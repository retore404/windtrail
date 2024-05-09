import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  Step,
  Typography,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import getDayJs from "../_common/_libs/dayjs";
import {
  PostView,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";

type PostContentProps = {
  params: { postView: PostView };
};

export default function PostContent({ params }: PostContentProps) {
  const dayjs = getDayJs();
  // reasonの型がReasonRepostであることを保証
  const reason = params.postView.reason as ReasonRepost;
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
          <Avatar alt="avatar" src={params.postView.author.avatar} />
          <Typography variant="body2">
            {params.postView.author.displayName}
          </Typography>
          <Typography variant="body2">
            (@{params.postView.author.handle})
          </Typography>
        </Stack>
        <Typography variant="h6">{params.postView.record.text}</Typography>
        <Typography variant="body2">
          posted at.{" "}
          {dayjs(params.postView.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
        </Typography>
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
      </Card>
    </Step>
  );
}
