import { ViewRecord } from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import * as AppBskyEmbedRecord from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import EmbededViewRecordParts from "./EmbededViewRecordParts";

type EmbededRecordProps = {
  params: {
    embed: AppBskyEmbedRecord.View;
  };
};

export default function EmbededRecord({ params }: EmbededRecordProps) {
  const record = params.embed.record as ViewRecord;
  return <EmbededViewRecordParts params={{ record: record }} />;
}
