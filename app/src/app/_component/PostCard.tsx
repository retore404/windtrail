import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import getDayJs from "../_common/_libs/dayjs";
import {
  FeedViewPost,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";

type PostProps = {
  params: { feedViewPost: FeedViewPost };
};

export default function PostCard({ params }: PostProps) {
  if (params.feedViewPost == undefined) {
    return null;
  }
  const dayjs = getDayJs();
  const postedAt = dayjs(params.feedViewPost.post.indexedAt)
    .tz()
    .format("YYYY-MM-DD HH:mm:ss");

  // reasonの型がReasonRepostであることを保証
  const reason = params.feedViewPost.reason as ReasonRepost;

  return (
    <Card sx={{ marginBottom: "8px" }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar alt="avatar" src={params.feedViewPost.post.author.avatar} />
          <Typography variant="body2">
            {params.feedViewPost.post.author.displayName}
          </Typography>
          <Typography variant="body2">
            (@{params.feedViewPost.post.author.handle})
          </Typography>
        </Stack>
        <Typography variant="h6">
          {params.feedViewPost.post.record.text}
        </Typography>
        <Typography variant="body2">posted at. {postedAt}</Typography>
        {reason != undefined &&
        reason["$type"] === "app.bsky.feed.defs#reasonRepost" ? (
          <>
            <Divider sx={{ marginTop: "8px", marginBottom: "8px" }} />
            <Stack direction="row" spacing={1} alignItems="center">
              <CachedIcon />
              <Typography variant="body2">
                reposted at{" "}
                {dayjs(reason.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
              </Typography>
            </Stack>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
