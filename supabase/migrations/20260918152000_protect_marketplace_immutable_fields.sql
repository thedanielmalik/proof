-- Prevent users from rewriting marketplace identity and message records after creation.
create or replace function public.protect_application_immutable_fields()
returns trigger
language plpgsql
set search_path = public
as $function$
begin
  if auth.uid() is not null then
    if new.id is distinct from old.id
       or new.job_id is distinct from old.job_id
       or new.talent_id is distinct from old.talent_id
       or new.message is distinct from old.message
       or new.created_at is distinct from old.created_at then
      raise exception 'Application identity and message fields cannot be changed after submission.';
    end if;
  end if;
  return new;
end;
$function$;

create or replace function public.protect_conversation_immutable_fields()
returns trigger
language plpgsql
set search_path = public
as $function$
begin
  if auth.uid() is not null then
    if new.id is distinct from old.id
       or new.application_id is distinct from old.application_id
       or new.employer_id is distinct from old.employer_id
       or new.talent_id is distinct from old.talent_id
       or new.created_at is distinct from old.created_at then
      raise exception 'Conversation participants and application cannot be changed after creation.';
    end if;
  end if;
  return new;
end;
$function$;

create or replace function public.protect_message_immutable_fields()
returns trigger
language plpgsql
set search_path = public
as $function$
begin
  if auth.uid() is not null then
    if new.id is distinct from old.id
       or new.conversation_id is distinct from old.conversation_id
       or new.sender_id is distinct from old.sender_id
       or new.body is distinct from old.body
       or new.created_at is distinct from old.created_at then
      raise exception 'Message content and sender cannot be changed after sending.';
    end if;
  end if;
  return new;
end;
$function$;

drop trigger if exists applications_immutable_fields on public.applications;
create trigger applications_immutable_fields
before update on public.applications
for each row execute function public.protect_application_immutable_fields();

drop trigger if exists conversations_immutable_fields on public.conversations;
create trigger conversations_immutable_fields
before update on public.conversations
for each row execute function public.protect_conversation_immutable_fields();

drop trigger if exists messages_immutable_fields on public.messages;
create trigger messages_immutable_fields
before update on public.messages
for each row execute function public.protect_message_immutable_fields();

revoke execute on function public.protect_application_immutable_fields() from public, anon, authenticated;
revoke execute on function public.protect_conversation_immutable_fields() from public, anon, authenticated;
revoke execute on function public.protect_message_immutable_fields() from public, anon, authenticated;
