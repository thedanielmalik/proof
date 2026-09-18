-- Backfill role summaries for profiles created before the role_summary field existed.
update public.profiles
set role_summary = headline
where coalesce(trim(role_summary), '') = ''
  and coalesce(trim(headline), '') <> '';
