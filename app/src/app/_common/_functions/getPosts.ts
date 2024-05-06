import { Post, getPostsProps } from "../_types/type";
import getDayJs from "./getDaysJs";

async function getPosts({ params }: getPostsProps) {
  // paramsで指定されたユーザ名から，didを取得
  const didRes = await fetch(
    `https://public.api.bsky.app/xrpc/com.atproto.identity.resolveHandle?handle=` +
      params.username,
    {
      next: { revalidate: 3600 },
    },
  );
  if (didRes.status != 200) {
    throw Error("Failed to get did.");
  }
  const didData = await didRes.json();
  const did = didData.did;
  const dateFrom = params.dateFrom;
  const dateTo = params.dateTo;

  const dayjs = getDayJs();

  // dateFrom以上dateTo未満となる日付を連想配列化
  //const daysInRange = []
  const postsDictInRange: Record<string, Array<Post>> = {};
  // 初回カーソル指定
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
    const postsRes = await fetch(
      `https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor=` +
        did +
        `&filter=posts_with_replies&limit=100&cursor=` +
        cursor.utc().format("YYYY-MM-DDTHH:mm:ss.000[Z]"), // UTCに変換したうえで問い合わせ
    );

    const posts = await postsRes.json();

    // TODO：レスポンスの型定義したいが……後でやる．
    posts.feed.map((i: any) => {
      // 投稿日時（Dayjs）
      const postDate = dayjs(i.post.indexedAt);
      // 投稿日時のうち年月日を'YYYY-MM-DD'形式の文字列に置き換える
      const postYYYYMMDD = postDate.tz().format("YYYY-MM-DD");
      // 対象となる期間の投稿か判定
      if (postDate.isSameOrAfter(dateFrom)) {
        // 本投稿の追加前の同日の投稿
        const currentPostArray = postsDictInRange[postYYYYMMDD];
        const author = {
          did: i.post.author.did,
          handle: i.post.author.handle,
          displayName: i.post.author.displayName,
          avatar: i.post.author.avatar,
        };
        const post = {
          author: author,
          text: i.post.record.text,
          createdAt: dayjs(i.post.record.createdAt),
        };
        currentPostArray.push(post);
        postsDictInRange[postYYYYMMDD] = currentPostArray;
      }
    });

    // 1件しか取れていない場合は最後まで取得できているのでbreak
    if (posts.feed.length == 1) {
      break;
    }

    // カーソルの付替え
    cursor = dayjs(posts.cursor);
  }
  return postsDictInRange;
}

export default getPosts;
