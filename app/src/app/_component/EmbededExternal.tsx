import { Box, Card, Typography } from "@mui/material";
import * as AppBskyEmbedExternal from "../_common/_types/_external/_atproto/app/bsky/embed/external";
import themeDefinition from "../_themes/themeDefinition";
import Image from "next/image";

type EmbededExternalProps = {
  params: { embed: AppBskyEmbedExternal.View };
};

export default function EmbededExternal({ params }: EmbededExternalProps) {
  const external = params.embed.external;
  const domain = new URL(external.uri).origin;
  const abbrDescription =
    external.description.length < 60
      ? external.description
      : external.description.substring(0, 60) + "...";
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: "max(70%, 500px)", // 2カラム配置に変更したら100%に変える
        marginBottom: "8px",
      }}
    >
      <a
        href={external.uri}
        target="_blank"
        style={{
          textDecoration: "none",
          color: `${themeDefinition.palette.text.light}`,
        }}
      >
        {external.thumb != undefined && (
          <Box
            display={`block`}
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: "1.91/1",
            }}
          >
            <Image
              src={external.thumb}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        )}
        <Box sx={{ padding: "8px" }}>
          <Typography variant="subtitle2">{domain}</Typography>
          <Typography
            variant="h6"
            sx={{
              color: `${themeDefinition.palette.text.primary}`,
            }}
          >
            {external.title}
          </Typography>
          <Typography sx={{ color: `${themeDefinition.palette.text.primary}` }}>
            {abbrDescription}
          </Typography>
        </Box>
      </a>
    </Card>
  );
}
