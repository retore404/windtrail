import { Avatar, Card, CardContent, Stack, Typography } from "@mui/material";
import { Post } from "../@types/type";
import getDayJsObj from "./Dayjs";

type PostProps = {
  params: { post: Post };
};

export default function PostCard({ params }: PostProps) {
  if (params.post == undefined) {
    return null;
  }
  const dayjs = getDayJsObj();
  const postedAt = dayjs(params.post.createdAt)
    .tz()
    .format("YYYY-MM-DD HH:mm:ss");
  return (
    <Card sx={{ marginBottom: "8px" }}>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar alt="avatar" src={params.post.author.avatar} />
          <Typography variant="body2">
            {params.post.author.displayName}
          </Typography>
          <Typography variant="body2">
            (@{params.post.author.handle})
          </Typography>
          <Typography variant="body2">posted at. {postedAt}</Typography>
        </Stack>
        <Typography variant="h6">{params.post.text}</Typography>
      </CardContent>
    </Card>
  );
}
