import { Grid } from "@mui/material";
import getDayJs from "../_common/_libs/dayjs";
import {
  FeedViewPost,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import RepostLabel from "./RepostLabel";
import Post from "./Post";
import ReplyParent from "./ReplyParent";

type FeedPostProps = {
  params: { feedViewPost: FeedViewPost };
};

export default function FeedPost({ params }: FeedPostProps) {
  const dayjs = getDayJs();

  const feedViewPost = params.feedViewPost;
  // リプライ先
  const replyParent = params.feedViewPost.reply?.parent;
  // reason（リポスト）
  const reason = params.feedViewPost.reason as ReasonRepost;

  // ポスト（主）
  const post = params.feedViewPost.post;

  return (
    <>
      <Grid container>
        {/* リプライ先がある場合 */}
        {replyParent != undefined && (
          <ReplyParent params={{ parent: replyParent }} />
        )}
        <Grid xs={12} item container>
          {/* リポストの場合はその旨のラベルを表示 */}
          {reason != undefined &&
            reason["$type"] === "app.bsky.feed.defs#reasonRepost" && (
              <RepostLabel params={{ repostedDate: dayjs(reason.indexedAt) }} />
            )}
          {/* ポスト部分 */}
          <Post params={{ post: post }} />
        </Grid>
      </Grid>
    </>
  );
}
