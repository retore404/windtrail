/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyEmbedRecord from "./record";
import * as AppBskyEmbedImages from "./images";
import * as AppBskyEmbedExternal from "./external";

export interface Main {
  record: AppBskyEmbedRecord.Main;
  media:
    | AppBskyEmbedImages.Main
    | AppBskyEmbedExternal.Main
    | { $type: string; [k: string]: unknown };
  [k: string]: unknown;
}

export interface View {
  record: AppBskyEmbedRecord.View;
  media:
    | AppBskyEmbedImages.View
    | AppBskyEmbedExternal.View
    | { $type: string; [k: string]: unknown };
  [k: string]: unknown;
}
