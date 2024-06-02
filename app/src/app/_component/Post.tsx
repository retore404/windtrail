import {
  Box,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { PostView } from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import getDayJs from "../_common/_libs/dayjs";
import AvatarIcon from "./AvatarIcon";
import HandleName from "./HandleName";
import EmbededContent from "./EmbededContent";
import { renderTwemoji } from "../_common/_libs/twemojiUtil";
import themeDefinition from "../_themes/themeDefinition";

type PostProps = {
  params: { post: PostView; stepper?: boolean };
};

export default function Post({ params }: PostProps) {
  const dayjs = getDayJs();

  return (
    <>
      <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
        <Grid xs={12} item>
          <AvatarIcon params={{ author: params.post.author }} />
          {params.stepper && (
            <Stack
              direction="row"
              justifyContent="center"
              sx={{ height: "100%" }}
            >
              <Box
                sx={{ borderLeft: "1px solid " + themeDefinition.palette.line }}
              ></Box>
            </Stack>
          )}
        </Grid>
      </Grid>
      <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
        <HandleName params={{ author: params.post.author }} />
        {/* 本文 */}
        <Stack>
          <Typography>
            <span
              style={{ whiteSpace: "pre-wrap", margin: 0 }}
              dangerouslySetInnerHTML={{
                __html: renderTwemoji(params.post.record.text),
              }}
            ></span>
          </Typography>
        </Stack>
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
