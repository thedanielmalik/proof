-- Protect job salary data and enforce the Founding 100 cap at the database boundary.
alter table public.jobs
  drop constraint if exists jobs_salary_min_check,
  drop constraint if exists jobs_salary_max_check,
  drop constraint if exists jobs_salary_range_check;

alter table public.jobs
  add constraint jobs_salary_min_check check (salary_min is null or salary_min >= 0),
  add constraint jobs_salary_max_check check (salary_max is null or salary_max >= 0),
  add constraint jobs_salary_range_check check (
    salary_min is null or salary_max is null or salary_max >= salary_min
  );

create or replace function public.enforce_founding_100_limit()
returns trigger
language plpgsql
security definer
set search_path = public, pg_temp
as $function$
begin
  perform pg_advisory_xact_lock(hashtext('proof_founding_100_limit'));

  if (select count(*) from public.founding_100_signups) >= 100 then
    raise exception 'The Founding 100 is full.' using errcode = 'P0001';
  end if;

  return new;
end;
$function$;

drop trigger if exists founding_100_limit on public.founding_100_signups;
create trigger founding_100_limit
before insert on public.founding_100_signups
for each row execute function public.enforce_founding_100_limit();

revoke execute on function public.enforce_founding_100_limit() from public, anon, authenticated;

drop policy if exists "Applicant can create own applications" on public.applications;

create policy "Applicant can create own applications"
on public.applications
for insert
to authenticated
with check (
  (select auth.uid()) = talent_id
  and exists (
    select 1
    from public.profiles p
    where p.id = applications.talent_id
      and p.role = 'talent'::public.user_role
      and p.published = true
  )
  and exists (
    select 1
    from public.jobs j
    where j.id = applications.job_id
      and j.published = true
      and j.is_demo = false
  )
);
