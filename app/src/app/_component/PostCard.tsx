import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import getDayJs from "../_common/_libs/dayjs";
import { FeedViewPost } from "../_common/_types/_external/_atproto/app/bsky/feed/defs";

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
          <Typography variant="body2">posted at. {postedAt}</Typography>
        </Stack>
        <Typography variant="h6">
          {params.feedViewPost.post.record.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
