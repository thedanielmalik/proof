create or replace function public.prevent_profile_role_change()
returns trigger
language plpgsql
as $$
begin
  if auth.uid() is not null
     and auth.uid() = old.id
     and new.role is distinct from old.role then
    raise exception 'Profile role cannot be changed after account creation.';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_role_guard on public.profiles;
create trigger profiles_role_guard
before update on public.profiles
for each row
execute function public.prevent_profile_role_change();

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
    where p.id = talent_id
      and p.role = 'talent'
  )
);

drop policy if exists "Company owner access" on public.companies;
create policy "Company owner access"
on public.companies
for all
to authenticated
using ((select auth.uid()) = owner_id)
with check (
  (select auth.uid()) = owner_id
  and exists (
    select 1
    from public.profiles p
    where p.id = owner_id
      and p.role = 'employer'
  )
);

create index if not exists companies_owner_id_idx on public.companies(owner_id);
create index if not exists education_profile_id_idx on public.education(profile_id);
create index if not exists experiences_profile_id_idx on public.experiences(profile_id);
create index if not exists portfolio_items_profile_id_idx on public.portfolio_items(profile_id);

