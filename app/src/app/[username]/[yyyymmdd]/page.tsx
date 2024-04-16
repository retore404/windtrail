import getDayJsObj from "@/app/_component/Dayjs";
import getPosts from "@/app/_component/getPosts";
import Posts from "@/app/_component/Posts";
import UserInfo from "@/app/_component/UserInfo";
import { Box, Divider, StyledEngineProvider } from "@mui/material";
import { Dayjs } from "dayjs";
import { Metadata, ResolvingMetadata } from "next";

// 引数の型定義
type Props = {
  params: { username: string; yyyymmdd: string };
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

  // 指定された日付の0時0分0秒（JST）およびその翌日の日付の0時0分0秒（JST）をUTCで生成
  const dayjs = getDayJsObj();
  const todayYYYY = params.yyyymmdd.slice(0, 4);
  const todayMM = params.yyyymmdd.slice(4, 6);
  const todayDD = params.yyyymmdd.slice(6, 8);
  const todayDate =
    todayYYYY + "-" + todayMM + "-" + todayDD + "T00:00:00+09:00";
  const todayStart = dayjs(todayDate).tz(); // JSTの本日0時
  const todayEnd = todayStart.add(1, "day"); // JSTの翌日0時

  // 指定された日付のポストを取得
  const getPostsParams = {
    params: {
      did: did + "",
      dateFrom: todayStart,
      dateTo: todayEnd,
    },
  };
  const posts = await getPosts(getPostsParams);

  return (
    <Box>
      <UserInfo params={{ username: params.username }}></UserInfo>
      <StyledEngineProvider injectFirst>
        <Divider
          sx={{
            marginTop: "0.5em",
            marginBottom: "0.5em",
          }}
        />
      </StyledEngineProvider>
      <Posts params={{ postsDict: posts }} />
    </Box>
  );
}
