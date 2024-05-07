/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyRichtextFacet from "../richtext/facet";
import * as AppBskyEmbedImages from "../embed/images";
import * as AppBskyEmbedExternal from "../embed/external";
import * as AppBskyEmbedRecord from "../embed/record";
import * as AppBskyEmbedRecordWithMedia from "../embed/recordWithMedia";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import * as ComAtprotoRepoStrongRef from "../../../com/atproto/repo/strongRef";

export interface Record {
  /** The primary post content. May be an empty string, if there are embeds. */
  text: string;
  /** DEPRECATED: replaced by app.bsky.richtext.facet. */
  entities?: Entity[];
  /** Annotations of text (mentions, URLs, hashtags, etc) */
  facets?: AppBskyRichtextFacet.Main[];
  reply?: ReplyRef;
  embed?:
    | AppBskyEmbedImages.Main
    | AppBskyEmbedExternal.Main
    | AppBskyEmbedRecord.Main
    | AppBskyEmbedRecordWithMedia.Main
    | { $type: string; [k: string]: unknown };
  /** Indicates human language of post primary text content. */
  langs?: string[];
  labels?:
    | ComAtprotoLabelDefs.SelfLabels
    | { $type: string; [k: string]: unknown };
  /** Additional hashtags, in addition to any included in post text and facets. */
  tags?: string[];
  /** Client-declared timestamp when this post was originally created. */
  createdAt: string;
  [k: string]: unknown;
}

export interface ReplyRef {
  root: ComAtprotoRepoStrongRef.Main;
  parent: ComAtprotoRepoStrongRef.Main;
  [k: string]: unknown;
}

/** Deprecated: use facets instead. */
export interface Entity {
  index: TextSlice;
  /** Expected values are 'mention' and 'link'. */
  type: string;
  value: string;
  [k: string]: unknown;
}

/** Deprecated. Use app.bsky.richtext instead -- A text segment. Start is inclusive, end is exclusive. Indices are for utf16-encoded strings. */
export interface TextSlice {
  start: number;
  end: number;
  [k: string]: unknown;
}
