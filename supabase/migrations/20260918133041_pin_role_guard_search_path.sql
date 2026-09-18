create or replace function public.prevent_profile_role_change()
returns trigger
language plpgsql
set search_path = public, pg_temp
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
