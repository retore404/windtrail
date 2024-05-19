import * as AppBskyEmbedImages from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import * as AppBskyEmbedRecord from "../_common/_types/_external/_atproto/app/bsky/embed/record";
import * as AppBskyEmbedExternal from "../_common/_types/_external/_atproto/app/bsky/embed/external";
import * as AppBskyEmbedRecordWithMedia from "../_common/_types/_external/_atproto/app/bsky/embed/recordWithMedia";
import UnderConstruction from "./UnderConstruction";
import EmbededImages from "./EmbededImages";
import EmbededRecord from "./EmbededRecord";
import EmbededRecordWithMedia from "./EmbededRecordWithMedia";

type EmbededContentProps = {
  params: {
    embed:
      | AppBskyEmbedImages.View
      | AppBskyEmbedExternal.View
      | AppBskyEmbedRecord.View
      | AppBskyEmbedRecordWithMedia.View
      | { $type: string; [k: string]: unknown };
  };
};

export default function EmbededContent({ params }: EmbededContentProps) {
  const type = params.embed.$type as string;

  if (type == "app.bsky.embed.images#view") {
    // 画像の場合
    const embed = params.embed as AppBskyEmbedImages.View;
    const images = embed.images;
    return <EmbededImages params={{ images: images }} />;
  } else if (params.embed.$type == "app.bsky.embed.record#view") {
    // 引用ポストの場合
    const embed = params.embed as AppBskyEmbedRecord.View;
    return (
      <>
        <EmbededRecord params={{ embed: embed }} />
      </>
    );
  } else if (params.embed.$type == "app.bsky.embed.recordWithMedia#view") {
    // メディア付きの引用ポストの場合
    const embed = params.embed as AppBskyEmbedRecordWithMedia.View;
    return (
      <>
        <EmbededRecordWithMedia params={{ embed: embed }} />
      </>
    );
  }

  return <UnderConstruction params={{ type: type }} />;
}
