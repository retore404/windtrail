import { Metadata, ResolvingMetadata } from "next";
import UserInfo from "../_component/UserInfo";
import { Box, Divider, StyledEngineProvider } from "@mui/material";
import Posts from "../_component/Posts";
import PageNavigation from "../_component/PageNavigation";
import getDayJs from "../_common/_libs/dayjs";
import { getPosts } from "../_common/_libs/bsky";

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
  // 本日の日付を取得
  const dayjs = getDayJs();
  const startOfToday = dayjs().tz().startOf("day");
  const endOfToday = startOfToday.add(1, "day");

  // 本日のポストを取得
  const getPostsParams = {
    params: {
      username: params.username,
      dateFrom: startOfToday,
      dateTo: endOfToday,
    },
  };
  const posts = await getPosts(params.username, startOfToday, endOfToday);

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
      <PageNavigation
        params={{ username: params.username, today: startOfToday, unit: "day" }}
      />
    </Box>
  );
}
