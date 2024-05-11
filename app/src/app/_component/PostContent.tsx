import { Avatar, Card, Divider, Stack, Step, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import getDayJs from "../_common/_libs/dayjs";
import {
  PostView,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";

type PostContentProps = {
  params: { post: PostView; reason?: ReasonRepost };
};

export default function PostContent({ params }: PostContentProps) {
  const dayjs = getDayJs();

  return (
    <Step>
      <Card
        sx={{
          marginBottom: "8px",
          paddingTop: "8px",
          paddingBottom: "8px",
          paddingLeft: "16px",
          paddingRight: "16px",
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar alt="avatar" src={params.post.author.avatar} />
          <Typography variant="body2">
            {params.post.author.displayName}
          </Typography>
          <Typography variant="body2">
            (@{params.post.author.handle})
          </Typography>
        </Stack>
        <Typography variant="h6">{params.post.record.text}</Typography>
        <Typography variant="body2">
          posted at.{" "}
          {dayjs(params.post.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
        </Typography>
        {params.reason != undefined &&
        params.reason["$type"] === "app.bsky.feed.defs#reasonRepost" ? (
          <>
            <Divider sx={{ marginTop: "8px", marginBottom: "8px" }} />
            <Stack direction="row" spacing={1} alignItems="center">
              <CachedIcon />
              <Typography variant="body2">
                reposted at{" "}
                {dayjs(params.reason.indexedAt)
                  .tz()
                  .format("YYYY-MM-DD HH:mm:ss")}
              </Typography>
            </Stack>
          </>
        ) : null}
      </Card>
    </Step>
  );
}
