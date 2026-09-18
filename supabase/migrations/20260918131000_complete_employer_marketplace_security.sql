-- Employer marketplace hardening and job brief fields
alter table public.jobs
  add column if not exists responsibilities text not null default '',
  add column if not exists requirements text not null default '';

create index if not exists jobs_company_id_idx on public.jobs(company_id);
create index if not exists applications_job_id_idx on public.applications(job_id);
create index if not exists applications_talent_id_idx on public.applications(talent_id);

drop policy if exists "Published companies public read" on public.companies;
create policy "Published companies public read"
on public.companies
for select
to anon, authenticated
using (
  is_demo = true
  or exists (
    select 1
    from public.jobs j
    where j.company_id = companies.id
      and j.published = true
  )
);

drop policy if exists "Applicant can manage own applications" on public.applications;
create policy "Applicant can view own applications"
on public.applications
for select
to authenticated
using ((select auth.uid()) = talent_id);

create policy "Applicant can create own applications"
on public.applications
for insert
to authenticated
with check ((select auth.uid()) = talent_id);

create policy "Applicant can delete own applications"
on public.applications
for delete
to authenticated
using ((select auth.uid()) = talent_id);

drop policy if exists "Job owners can update applications" on public.applications;
create policy "Job owners can update application status"
on public.applications
for update
to authenticated
using (
  exists (
    select 1
    from public.jobs j
    join public.companies c on c.id = j.company_id
    where j.id = applications.job_id
      and c.owner_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1
    from public.jobs j
    join public.companies c on c.id = j.company_id
    where j.id = applications.job_id
      and c.owner_id = (select auth.uid())
  )
);

revoke update on table public.applications from authenticated;
grant update(status) on table public.applications to authenticated;
