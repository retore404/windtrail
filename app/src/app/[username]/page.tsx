import { Card, CardContent, Typography } from "@mui/material";
import { Metadata, ResolvingMetadata } from "next";

// 引数の型定義
type Props = {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// メタデータを生成
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const username = params.username;

  return {
    title: username + " | Windtrail",
    description: username + "",
    openGraph: {
      title: username + " | Windtrail",
      description: username + "",
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
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
    <Card>
      <CardContent>
        <Typography variant="h4">{params.username}</Typography>
        <span>{data.did}</span>
      </CardContent>
    </Card>
  );
}
