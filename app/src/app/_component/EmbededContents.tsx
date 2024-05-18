import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import * as AppBskyEmbedImages from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import * as AppBskyEmbedRecord from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import * as AppBskyEmbedExternal from "../_common/_types/_external/_atproto/app/bsky/embed/external";
import * as AppBskyEmbedRecordWithMedia from "../_common/_types/_external/_atproto/app/bsky/embed/recordWithMedia";
import Image from "next/image";
import InfoIcon from "@mui/icons-material/Info";

type EmbededContentsProps = {
  params: {
    embed:
      | AppBskyEmbedImages.View
      | AppBskyEmbedExternal.View
      | AppBskyEmbedRecord.View
      | AppBskyEmbedRecordWithMedia.View
      | { $type: string; [k: string]: unknown };
  };
};

export default function EmbededContents({ params }: EmbededContentsProps) {
  const type = params.embed.$type as string;

  if (params.embed.$type == "app.bsky.embed.images#view") {
    // 画像の場合
    const images = params.embed.images as AppBskyEmbedImages.ViewImage[];
    return (
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
    );
  } else if (params.embed.$type == "app.bsky.embed.record#view") {
    // 引用リポストの場合
    const quoted = params.embed.record as AppBskyEmbedRecord.ViewRecord;
    return (
      <Box
        sx={{
          border: "1px solid var(--line-color)",
          borderRadius: "8px",
          margin: "8px",
          padding: "8px",
        }}
      >
        <Grid xs={12} container>
          <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
            <Grid xs={12} item sx={{ marginTop: "4px" }}>
              <Stack direction="row" justifyContent="center">
                <Avatar alt="avatar" src={quoted.author.avatar} />
              </Stack>
            </Grid>
          </Grid>
          <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {quoted.author.displayName}
                {`(@`}
                {quoted.author.handle}
                {`)`}
              </Typography>
            </Stack>
            <Typography variant="body1">{quoted.value.text}</Typography>
            {/* 引用リポストの埋め込み部分 */}
            <Box display={`flex`} sx={{ gap: "8px" }}>
              {quoted.embeds?.map((embed, i) => {
                {
                  /* 画像の場合 */
                }
                if (embed.$type == "app.bsky.embed.images#view") {
                  const images = embed.images as AppBskyEmbedImages.ViewImage[];
                  return (
                    <Box key={`quote-embed-${i}`}>
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
                  );
                }
                return (
                  <Box
                    key="underconstruction"
                    display={`flex`}
                    flexDirection={`row`}
                    sx={{
                      backgroundColor: "var(--secondary-light)",
                      padding: "8px",
                    }}
                  >
                    <InfoIcon />
                    <Typography>
                      Windtrail is currently been developed to deal with embed
                      contents type {`"${embed.$type}"`}.
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  } else if (params.embed.$type == "app.bsky.embed.recordWithMedia#view") {
    // メディアありのレコード
    const record = (params.embed.record as AppBskyEmbedRecord.View)
      .record as AppBskyEmbedRecord.ViewRecord;
    const media = params.embed.media as AppBskyEmbedImages.View;

    return (
      <>
        {/* メディア部分 */}
        {(() => {
          if (media["$type"] == "app.bsky.embed.images#view") {
            const images = media.images;

            return (
              <Box sx={{ maxWidth: "100%" }}>
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
            );
          }
          return (
            <Box
              sx={{ backgroundColor: "var(--secondary-light)", padding: "8px" }}
              display={`flex`}
              flexDirection={`row`}
            >
              <InfoIcon />
              <Typography>
                Windtrail is currently been developed to deal with embed
                contents type {`"${media["$type"]}"`}.
              </Typography>
            </Box>
          );
        })()}
        <Box display={`flex`} sx={{ gap: "8px" }}></Box>
        {/* 引用ポスト部分 */}
        <Box
          sx={{
            border: "1px solid var(--line-color)",
            borderRadius: "8px",
            margin: "8px",
            padding: "8px",
          }}
        >
          <Grid xs={12} container>
            <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
              <Grid xs={12} item sx={{ marginTop: "4px" }}>
                <Stack direction="row" justifyContent="center">
                  <Avatar alt="avatar" src={record.author.avatar} />
                </Stack>
              </Grid>
            </Grid>
            <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {record.author.displayName}
                  {`(@`}
                  {record.author.handle}
                  {`)`}
                </Typography>
              </Stack>
              <Typography variant="body1">{record.value.text}</Typography>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
  return (
    <Box
      sx={{ backgroundColor: "var(--secondary-light)", padding: "8px" }}
      display={`flex`}
      flexDirection={`row`}
    >
      <InfoIcon />
      <Typography>
        Windtrail is currently been developed to deal with embed contents type{" "}
        {`"${type}"`}.
      </Typography>
    </Box>
  );
}
