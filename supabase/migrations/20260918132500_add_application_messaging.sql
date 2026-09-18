-- Application-based messaging between talent and employers.
create table if not exists public.conversations (
  id uuid primary key default gen_random_uuid(),
  application_id uuid not null unique references public.applications(id) on delete cascade,
  employer_id uuid not null references auth.users(id) on delete cascade,
  talent_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender_id uuid not null references auth.users(id) on delete cascade,
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists conversations_employer_id_idx on public.conversations(employer_id);
create index if not exists conversations_talent_id_idx on public.conversations(talent_id);
create index if not exists conversations_updated_at_idx on public.conversations(updated_at desc);
create index if not exists messages_conversation_id_idx on public.messages(conversation_id);
create index if not exists messages_sender_id_idx on public.messages(sender_id);
create index if not exists messages_unread_idx on public.messages(conversation_id, read_at) where read_at is null;

alter table public.conversations enable row level security;
alter table public.messages enable row level security;

create policy "Participants can view conversations"
on public.conversations for select to authenticated
using ((select auth.uid()) = employer_id or (select auth.uid()) = talent_id);

create policy "Participants can create conversations"
on public.conversations for insert to authenticated
with check (
  ((select auth.uid()) = employer_id or (select auth.uid()) = talent_id)
  and exists (
    select 1 from public.applications a
    join public.jobs j on j.id = a.job_id
    join public.companies c on c.id = j.company_id
    where a.id = conversations.application_id
      and a.talent_id = conversations.talent_id
      and c.owner_id = conversations.employer_id
  )
);

create policy "Participants can view messages"
on public.messages for select to authenticated
using (
  exists (
    select 1 from public.conversations c
    where c.id = messages.conversation_id
      and ((select auth.uid()) = c.employer_id or (select auth.uid()) = c.talent_id)
  )
);

create policy "Participants can send messages"
on public.messages for insert to authenticated
with check (
  (select auth.uid()) = sender_id
  and exists (
    select 1 from public.conversations c
    where c.id = messages.conversation_id
      and ((select auth.uid()) = c.employer_id or (select auth.uid()) = c.talent_id)
  )
);

create policy "Recipients can mark messages read"
on public.messages for update to authenticated
using (
  sender_id <> (select auth.uid())
  and exists (
    select 1 from public.conversations c
    where c.id = messages.conversation_id
      and ((select auth.uid()) = c.employer_id or (select auth.uid()) = c.talent_id)
  )
)
with check (
  sender_id <> (select auth.uid())
  and exists (
    select 1 from public.conversations c
    where c.id = messages.conversation_id
      and ((select auth.uid()) = c.employer_id or (select auth.uid()) = c.talent_id)
  )
);

revoke update on table public.messages from authenticated;
grant update(read_at) on table public.messages to authenticated;

create or replace function public.touch_conversation_from_message()
returns trigger
language plpgsql
set search_path = public
as $function$
begin
  update public.conversations set updated_at = now() where id = new.conversation_id;
  return new;
end;
$function$;

drop trigger if exists messages_touch_conversation on public.messages;
create trigger messages_touch_conversation
after insert on public.messages
for each row execute function public.touch_conversation_from_message();

revoke update on table public.conversations from authenticated;

do $$
begin
  alter publication supabase_realtime add table public.messages;
exception when duplicate_object then null;
end
$$;
