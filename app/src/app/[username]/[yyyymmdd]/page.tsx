import getDayJs from "@/app/_common/_libs/dayjs";
import { getPosts, getPostsWithoutCache } from "../../_common/_libs/bsky";
import PageNavigation from "@/app/_component/PageNavigation";
import PostsContainer from "@/app/_component/PostsContainer";
import UserInfo from "@/app/_component/UserInfo";
import { Box, Divider } from "@mui/material";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

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
  const designatedDayYYYY = params.yyyymmdd.slice(0, 4);
  const designatedDayMM = params.yyyymmdd.slice(4, 6);
  const designatedDayDD = params.yyyymmdd.slice(6, 8);
  const deisgnatedDate =
    designatedDayYYYY +
    "-" +
    designatedDayMM +
    "-" +
    designatedDayDD +
    "T00:00:00+09:00";
  const startOfDesignatedDate = dayjs(deisgnatedDate).tz(); // JSTの本日0時
  const endOfDesignatedDate = startOfDesignatedDate.add(1, "day"); // JSTの翌日0時

  // 本日の0時0分0秒を取得
  const startOfToday = dayjs().tz().startOf("day");

  // 指定された日付のポストを取得
  // 指定された日が本日であればキャッシュ無し，本日以外ならキャッシュありの関数を選択
  const posts =
    startOfToday.diff(startOfDesignatedDate) == 0
      ? await getPostsWithoutCache(
          params.username,
          startOfDesignatedDate,
          endOfDesignatedDate,
        )
      : await getPosts(
          params.username,
          startOfDesignatedDate,
          endOfDesignatedDate,
        );

  return (
    <Box>
      <Suspense fallback={<div>loading...</div>}>
        <UserInfo params={{ username: params.username }}></UserInfo>
        <Divider
          sx={{
            marginTop: "0.5em",
            marginBottom: "0.5em",
          }}
        />
        <PostsContainer params={{ postsDict: posts }} />
        <PageNavigation
          params={{
            username: params.username,
            today: startOfDesignatedDate,
            unit: "day",
          }}
        />
      </Suspense>
    </Box>
  );
}
