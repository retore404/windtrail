import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  StyledEngineProvider,
  Typography,
  styled,
} from "@mui/material";
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
  // didの取得
  const didRes = await fetch(
    `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=` +
      params.username,
    {
      next: { revalidate: 3600 },
    },
  );
  if (didRes.status != 200) {
    return <span>Could not get did.</span>;
  }
  const didData = await didRes.json();
  const did = didData.did;

  // ユーザ情報の取得
  const userInfoRes = await fetch(
    `https://public.api.bsky.app/xrpc/app.bsky.actor.getProfile?actor=` + did,
    {
      next: { revalidate: 3600 },
    },
  );

  if (userInfoRes.status != 200) {
    return <span>Could not get user profile.</span>;
  }

  const userData = await userInfoRes.json();

  const displayName = userData.displayName;
  const avatarImage = userData.avatar;
  const description = userData.description;
  const followersCount = userData.followersCount;
  const followsCount = userData.followsCount;
  const postsCount = userData.postsCount;

  return (
    <Card>
      <CardContent>
        <Stack>
          <Stack direction="row" spacing={1}>
            <Avatar alt="Cindy Baker" src={avatarImage} />
            <Typography variant="h4" component="h2">
              {displayName}
            </Typography>
          </Stack>
          <Typography>
            {`@` + params.username} / {did}
          </Typography>
          <Typography>
            {postsCount} posts. / Follows: {followsCount} / Followers:{" "}
            {followersCount}
          </Typography>
        </Stack>
        <StyledEngineProvider injectFirst>
          <Divider
            sx={{
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }}
          />
        </StyledEngineProvider>
        <Stack>
          <Typography>{description}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
