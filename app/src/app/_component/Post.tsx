import { Box, Grid, Stack, Typography } from "@mui/material";
import { PostView } from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import getDayJs from "../_common/_libs/dayjs";
import AvatarIcon from "./AvatarIcon";
import HandleName from "./HandleName";
import EmbededContent from "./EmbededContent";

type PostProps = {
  params: { post: PostView; stepper?: boolean };
};

export default function Post({ params }: PostProps) {
  const dayjs = getDayJs();

  return (
    <>
      <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
        <AvatarIcon params={{ author: params.post.author }} />
        {params.stepper && (
          <Grid xs={12} item>
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <Box sx={{ borderLeft: "1px solid var(--line-color)" }}></Box>
            </Stack>
          </Grid>
        )}
      </Grid>
      <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
        <HandleName params={{ author: params.post.author }} />
        {/* 本文 */}
        <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
          {params.post.record.text}
        </Typography>
        {/* 埋め込み */}
        {params.post.embed != undefined && (
          <EmbededContent params={{ embed: params.post.embed }} />
        )}
        {/* 投稿日 */}
        <Typography variant="body2">
          posted at{" "}
          {dayjs(params.post.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
        </Typography>
      </Grid>
    </>
  );
}
