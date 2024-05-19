import { ViewRecord } from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import * as AppBskyEmbedRecordWithMedia from "../_common/_types/_external/_atproto/app/bsky/embed/recordWithMedia";
import UnderConstruction from "./UnderConstruction";
import { Box } from "@mui/material";
import EmbededViewRecordParts from "./EmbededViewRecordParts";
import { ViewImage } from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import EmbededImages from "./EmbededImages";

type EmbededRecordWithMediaProps = {
  params: {
    embed: AppBskyEmbedRecordWithMedia.View;
  };
};

export default function EmbededRecordWithMedia({
  params,
}: EmbededRecordWithMediaProps) {
  const record = params.embed.record.record;
  const recordType = record.$type as string;
  const media = params.embed.media;
  return (
    <>
      {/* 画像部分は親ポスト側のコンテンツとして表示 */}
      {(() => {
        const mediaType = media.$type as string;
        if (mediaType == "app.bsky.embed.images#view") {
          const images = media.images as ViewImage[];
          return <EmbededImages params={{ images: images }} />;
        }

        return <UnderConstruction params={{ type: mediaType }} />;
      })()}
      {/* 引用リポスト部分 */}
      {recordType == "app.bsky.embed.record#viewRecord" ? (
        <Box>
          {(() => {
            const viewRecord = record as ViewRecord;
            return <EmbededViewRecordParts params={{ record: viewRecord }} />;
          })()}
        </Box>
      ) : (
        <UnderConstruction params={{ type: recordType }} />
      )}
    </>
  );
}
