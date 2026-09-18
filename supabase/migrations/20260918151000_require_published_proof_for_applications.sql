-- A talent must have a published Proof before an application can enter the employer pipeline.
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
);
