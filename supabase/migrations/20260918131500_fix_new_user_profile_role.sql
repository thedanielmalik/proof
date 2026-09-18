-- Preserve the role selected during signup when creating a profile.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
set search_path = public
as $function$
declare
  requested_role text;
begin
  requested_role := new.raw_user_meta_data ->> 'role';

  insert into public.profiles (id, name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    case
      when requested_role in ('talent', 'employer') then requested_role::public.user_role
      else 'talent'::public.user_role
    end
  );

  return new;
end;
$function$;
