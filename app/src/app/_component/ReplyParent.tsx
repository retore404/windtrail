import { Grid } from "@mui/material";
import {
  BlockedPost,
  NotFoundPost,
  PostView,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import UnderConstruction from "./UnderConstruction";
import Post from "./Post";

type ReplyParentProps = {
  params: {
    parent:
      | PostView
      | NotFoundPost
      | BlockedPost
      | { $type: string; [k: string]: unknown };
  };
};

export default function ReplyParent({ params }: ReplyParentProps) {
  const type = params.parent["$type"] as string;

  if (type == "app.bsky.feed.defs#postView") {
    const replyParentPost = params.parent as PostView;
    return (
      <>
        <Post params={{ post: replyParentPost, stepper: true }} />
        <Grid xs={12} item sx={{ height: "8px" }}></Grid>
      </>
    );
  }

  return <UnderConstruction params={{ type: type }} />;
}
