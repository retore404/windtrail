import { ViewRecord } from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import { Box, Grid, Typography } from "@mui/material";
import AvatarIcon from "./AvatarIcon";
import HandleName from "./HandleName";
import getDayJs from "../_common/_libs/dayjs";
import EmbededContent from "./EmbededContent";
import themeDefinition from "../_themes/themeDefinition";

type EmbededViewRecordPartsProps = {
  params: {
    record: ViewRecord;
  };
};

export default function EmbededViewRecordParts({
  params,
}: EmbededViewRecordPartsProps) {
  const dayjs = getDayJs();

  const record = params.record;
  return (
    <Box
      sx={{
        border: "1px solid " + themeDefinition.palette.line,
        borderRadius: "8px",
        margin: "8px",
        padding: "8px",
      }}
    >
      <Grid xs={12} container>
        <Grid xs={2.5} sm={1} md={0.77} lg={0.75} item container>
          <AvatarIcon params={{ author: record.author }} />
        </Grid>
        <Grid xs={9.5} sm={11} md={11.23} lg={11.25} item>
          <HandleName params={{ author: record.author }} />
          {/* 本文 */}
          <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
            {record.value.text}
          </Typography>
          {/* 埋め込み */}
          {record.embeds != undefined && (
            <Box>
              {record.embeds.map((embed, i) => {
                return <EmbededContent key={i} params={{ embed: embed }} />;
              })}
            </Box>
          )}
          {/* 投稿日 */}
          <Typography variant="body2">
            posted at{" "}
            {dayjs(record.indexedAt).tz().format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
