-- Allow authenticated clients to issue SELECT queries; RLS limits the rows to admins.
grant select on public.founding_100_signups to authenticated;
