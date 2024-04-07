export default async function Page({
  params,
  searchParams,
}: {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const res = await fetch(
    `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=` +
      params.username,
    {
      next: { revalidate: 3600 },
    },
  );
  if (res.status != 200) {
    return <span>Could not get user data.</span>;
  }
  const data = await res.json();
  return (
    <section>
      <h1>{params.username}</h1>
      <span>{data.did}</span>
    </section>
  );
}
