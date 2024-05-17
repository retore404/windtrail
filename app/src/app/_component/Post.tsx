import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import {
  FeedViewPost,
  PostView,
  ReasonRepost,
} from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import getDayJs from "../_common/_libs/dayjs";
import { View } from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import Image from "next/image";

type PostProps = {
  params: { feedViewPost: FeedViewPost };
};

export default function Post({ params }: PostProps) {
  const dayjs = getDayJs();

  if (params.feedViewPost == undefined) {
    return null;
  }

  // ポスト（メイン）
  const post = params.feedViewPost.post;

  // 埋め込みコンテンツ
  const embed = post.embed as View;
  const images = embed?.images;

  // reply先を取得
  const replyParent = params.feedViewPost.reply?.parent as PostView;

  // reasonを取得
  const reason = params.feedViewPost.reason as ReasonRepost;

  return (
    <>
      <Grid container>
        {/* リプライ先がある場合 */}
        {replyParent != undefined && (
          <>
            <Grid xs={12} container>
              <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
                <Grid xs={12} item sx={{ marginTop: "4px" }}>
                  <Stack direction="row" justifyContent="center">
                    <Avatar alt="avatar" src={replyParent.author.avatar} />
                  </Stack>
                </Grid>
                <Grid xs={12} item>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    sx={{ height: "100%" }}
                  >
                    <Box
                      sx={{ borderLeft: "1px solid var(--line-color)" }}
                    ></Box>
                  </Stack>
                </Grid>
              </Grid>
              <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {replyParent.author.displayName}
                    {`(@`}
                    {replyParent.author.handle}
                    {`)`}
                  </Typography>
                </Stack>
                <Typography variant="body1">
                  {replyParent.record.text}
                </Typography>
                <Typography variant="body2">
                  posted at{" "}
                  {dayjs(replyParent.indexedAt)
                    .tz()
                    .format("YYYY-MM-DD HH:mm:ss")}
                </Typography>
                <Box sx={{ height: "8px" }}></Box>
              </Grid>
            </Grid>
            <Grid xs={12} sx={{ height: "8px" }}></Grid>
          </>
        )}
        {/* ポスト部分 */}
        <Grid xs={12} container>
          {/* リポストの場合はその旨の表記 */}
          {reason != undefined &&
            reason["$type"] === "app.bsky.feed.defs#reasonRepost" && (
              <>
                <Grid xs={12} item>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ marginLeft: "16px" }}
                  >
                    <CachedIcon />
                    <Typography variant="body2">
                      reposted at{" "}
                      {dayjs(reason.indexedAt)
                        .tz()
                        .format("YYYY-MM-DD HH:mm:ss")}
                    </Typography>
                  </Stack>
                  <Box sx={{ height: "8px" }} />
                </Grid>
              </>
            )}
          {/* ポストのメイン部分（リポストの場合はリポスト対象） */}
          <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
            <Grid xs={12} item>
              <Stack direction="row" justifyContent="center">
                <Avatar alt="avatar" src={post.author.avatar} />
              </Stack>
            </Grid>
          </Grid>
          <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {post.author.displayName} (@
                {post.author.handle})
              </Typography>
            </Stack>
            <Typography variant="body1">{post.record.text}</Typography>
            {/* 埋め込み画像 */}
            {images != undefined && (
              <Box display={`flex`} sx={{ gap: "8px" }}>
                {images.map((image) => {
                  return (
                    <Box key={image.thumb}>
                      <a href={image.fullsize}>
                        <Image
                          src={image.thumb}
                          alt={image.alt}
                          width={image.aspectRatio?.width}
                          height={image.aspectRatio?.height}
                          loading="lazy"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </a>
                    </Box>
                  );
                })}
              </Box>
            )}
            <Typography variant="body2">
              posted at{" "}
              {dayjs(post.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
