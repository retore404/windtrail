import getDayJs from "@/app/_common/_libs/dayjs";
import { getPosts } from "../../_common/_libs/bsky";
import PageNavigation from "@/app/_component/PageNavigation";
import PostsContainer from "@/app/_component/PostsContainer";
import UserInfo from "@/app/_component/UserInfo";
import { Box, Divider, StyledEngineProvider } from "@mui/material";
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
  // 指定された日付の0時0分0秒（JST）およびその翌日の日付の0時0分0秒（JST）をUTCで生成
  const dayjs = getDayJs();
  const todayYYYY = params.yyyymmdd.slice(0, 4);
  const todayMM = params.yyyymmdd.slice(4, 6);
  const todayDD = params.yyyymmdd.slice(6, 8);
  const date = todayYYYY + "-" + todayMM + "-" + todayDD + "T00:00:00+09:00";
  const startOfDate = dayjs(date).tz(); // JSTの本日0時
  const endOfDate = startOfDate.add(1, "day"); // JSTの翌日0時

  // 指定された日付のポストを取得
  const posts = await getPosts(params.username, startOfDate, endOfDate);

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
      <PostsContainer params={{ postsDict: posts }} />
      <PageNavigation
        params={{ username: params.username, today: startOfDate, unit: "day" }}
      />
    </Box>
  );
}
