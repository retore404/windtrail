import { BskyAgent } from "@atproto/api";
import { AppBskyFeedPost } from "@atproto/api";
import { Dayjs } from "dayjs";
import { cache } from "react";
import getDayJs from "../_libs/dayjs";
import { FeedViewPost } from "../_types/_external/_atproto/app/bsky/feed/defs";

const agent = new BskyAgent({
  service: "https://public.api.bsky.app",
});

export const resolveHandle = cache(async (handle: string) => {
  const { data } = await agent.com.atproto.identity.resolveHandle({
    handle: handle,
  });
  const { did } = data;
  return did;
});

export const getProfile = cache(async (actor: string) => {
  const { data } = await agent.app.bsky.actor.getProfile({ actor: actor });
  return data;
});

export const getPosts = cache(
  async (handle: string, dateFrom: Dayjs, dateTo: Dayjs) => {
    // paramsで指定されたユーザ名から，didを取得
    const did = await resolveHandle(handle);

    // 日付操作用のライブラリ読み込み
    const dayjs = getDayJs();

    // dateFrom以上dateTo未満となる日付を連想配列化．
    // この時点ではArrayは空の状態にしておく．
    const postsDictInRange: Record<string, Array<FeedViewPost>> = {};
    let curDate = dateTo.subtract(1, "second"); // dateToは含まない（<なので）
    while (curDate.isSameOrAfter(dateFrom)) {
      //  daysInRange.push(curDate);
      postsDictInRange[curDate.format("YYYY-MM-DD")] = [];
      curDate = curDate.subtract(1, "day");
    }

    // dateTo未満dateFrom以上のpostを取得していく
    let cursor = dateTo;
    while (cursor.isSameOrAfter(dateFrom)) {
      // 指定中のcursorで取得
      const response = await agent.app.bsky.feed.getAuthorFeed({
        actor: did,
        filter: "posts_with_replies",
        limit: 100,
        cursor: cursor.utc().format("YYYY-MM-DDTHH:mm:ss.000[Z]"),
      });

      // 取得したフィードをループして，連想配列のうち投稿日に該当するvalueに追加する
      response.data.feed.map((feedViewPost) => {
        // 型ガード
        // ポストまたはリポストした日時を取得
        // リポストの場合はリポスト対象のポストではなく「リポストした日時」を対象の日時とする
        // reason(repostの場合に存在)がない場合，postのindexAt / ある場合，reasonのindexedAt(=リポスト日時)
        const postDate =
          feedViewPost.reason?.indexedAt == undefined
            ? dayjs(feedViewPost.post.indexedAt)
            : dayjs(feedViewPost.reason.indexedAt as string);

        // 投稿日時のうち年月日を'YYYY-MM-DD'形式の文字列に置き換える
        const postYYYYMMDD = postDate.tz().format("YYYY-MM-DD");
        // 対象となる期間の投稿か判定
        if (postDate.isSameOrAfter(dateFrom)) {
          // 本投稿の追加前の同日の投稿を取得し，処理中のポストを追加したうえで置き換え
          const currentPostArray = postsDictInRange[postYYYYMMDD];
          currentPostArray.push(feedViewPost as FeedViewPost);
          postsDictInRange[postYYYYMMDD] = currentPostArray;
        }
      });

      // 1件しか取れていない場合は最後まで取得できているのでbreak
      if (response.data.feed.length == 1) {
        break;
      }

      // カーソルの付替え
      cursor = dayjs(response.data.cursor);
    }

    return postsDictInRange;
  },
);
