import { Stepper } from "@mui/material";
import {
  FeedViewPost,
  PostView,
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

  return (
    <Stepper orientation="vertical">
      {replyParent != undefined ? (
        <PostContent params={{ postView: replyParent }} />
      ) : null}
      <PostContent params={{ postView: params.feedViewPost.post }} />
    </Stepper>
  );
}
