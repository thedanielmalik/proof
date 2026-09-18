-- Keep admin-only beta reporting behind a private database helper.
create schema if not exists private;

revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;

create or replace function private.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $function$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and role = 'admin'::public.user_role
  );
$function$;

revoke all on function private.is_admin() from public, anon;
grant execute on function private.is_admin() to authenticated;

drop policy if exists "Admins can read all profiles" on public.profiles;
create policy "Admins can read all profiles"
on public.profiles
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read founding signups" on public.founding_100_signups;
create policy "Admins can read founding signups"
on public.founding_100_signups
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read companies" on public.companies;
create policy "Admins can read companies"
on public.companies
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read jobs" on public.jobs;
create policy "Admins can read jobs"
on public.jobs
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read applications" on public.applications;
create policy "Admins can read applications"
on public.applications
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read conversations" on public.conversations;
create policy "Admins can read conversations"
on public.conversations
for select
to authenticated
using ((select private.is_admin()));

drop policy if exists "Admins can read messages" on public.messages;
create policy "Admins can read messages"
on public.messages
for select
to authenticated
using ((select private.is_admin()));
