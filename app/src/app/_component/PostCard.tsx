import { Stepper } from "@mui/material";
import {
  FeedViewPost,
  PostView,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import PostContent from "./PostContent";

type PostProps = {
  params: { feedViewPost: FeedViewPost };
};

export default function PostCard({ params }: PostProps) {
  if (params.feedViewPost == undefined) {
    return null;
  }

  // reply先を取得
  const replyParent = params.feedViewPost.reply?.parent as PostView;

  // reasonを取得
  const reason = params.feedViewPost.reason as ReasonRepost;

  return (
    <Stepper orientation="vertical">
      {replyParent != undefined ? (
        <PostContent params={{ post: replyParent }} />
      ) : null}
      <PostContent
        params={{ post: params.feedViewPost.post, reason: reason }}
      />
    </Stepper>
  );
}
