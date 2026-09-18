-- Persist the talent's plain-language "What do you do?" statement.
alter table public.profiles
  add column if not exists role_summary text not null default '';
