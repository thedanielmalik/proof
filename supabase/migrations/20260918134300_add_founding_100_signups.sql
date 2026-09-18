create table if not exists public.founding_100_signups (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 120),
  email text not null check (char_length(trim(email)) between 5 and 254),
  role text not null check (role in ('talent','employer')),
  location text,
  focus text,
  company text,
  notes text,
  source text,
  created_at timestamptz not null default now()
);

create unique index if not exists founding_100_email_unique
  on public.founding_100_signups (lower(trim(email)));

alter table public.founding_100_signups enable row level security;

drop policy if exists "Anyone can join Founding 100" on public.founding_100_signups;
create policy "Anyone can join Founding 100"
on public.founding_100_signups
for insert
to anon, authenticated
with check (true);

revoke all on public.founding_100_signups from anon, authenticated;
grant insert on public.founding_100_signups to anon, authenticated;
