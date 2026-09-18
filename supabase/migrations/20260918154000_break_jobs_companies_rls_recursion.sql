-- Avoid circular RLS evaluation between companies and jobs.
create or replace function private.company_has_published_job(p_company_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $function$
  select exists (
    select 1
    from public.jobs j
    where j.company_id = p_company_id
      and j.published = true
  );
$function$;

revoke all on function private.company_has_published_job(uuid) from public;
grant execute on function private.company_has_published_job(uuid) to anon, authenticated;

drop policy if exists "Published companies public read" on public.companies;
create policy "Published companies public read"
on public.companies
for select
to anon, authenticated
using (
  is_demo = true
  or (select private.company_has_published_job(id))
);
