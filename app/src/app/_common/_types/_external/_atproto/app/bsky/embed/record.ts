/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoRepoStrongRef from "../../../com/atproto/repo/strongRef";
import * as AppBskyFeedDefs from "../feed/defs";
import * as AppBskyGraphDefs from "../graph/defs";
import * as AppBskyLabelerDefs from "../labeler/defs";
import * as AppBskyActorDefs from "../actor/defs";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import * as AppBskyEmbedImages from "./images";
import * as AppBskyEmbedExternal from "./external";
import * as AppBskyEmbedRecordWithMedia from "./recordWithMedia";

export interface Main {
  record: ComAtprotoRepoStrongRef.Main;
  [k: string]: unknown;
}

export interface View {
  record:
    | ViewRecord
    | ViewNotFound
    | ViewBlocked
    | AppBskyFeedDefs.GeneratorView
    | AppBskyGraphDefs.ListView
    | AppBskyLabelerDefs.LabelerView
    | { $type: string; [k: string]: unknown };
  [k: string]: unknown;
}

export interface ViewRecord {
  uri: string;
  cid: string;
  author: AppBskyActorDefs.ProfileViewBasic;
  /** The record data itself. */
  value: {};
  labels?: ComAtprotoLabelDefs.Label[];
  replyCount?: number;
  repostCount?: number;
  likeCount?: number;
  embeds?: (
    | AppBskyEmbedImages.View
    | AppBskyEmbedExternal.View
    | View
    | AppBskyEmbedRecordWithMedia.View
    | { $type: string; [k: string]: unknown }
  )[];
  indexedAt: string;
  [k: string]: unknown;
}

export interface ViewNotFound {
  uri: string;
  notFound: true;
  [k: string]: unknown;
}

export interface ViewBlocked {
  uri: string;
  blocked: true;
  author: AppBskyFeedDefs.BlockedAuthor;
  [k: string]: unknown;
}
