/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface Record {
  /** Reference (AT-URI) to the post record. */
  post: string;
  allow?: (
    | MentionRule
    | FollowingRule
    | ListRule
    | { $type: string; [k: string]: unknown }
  )[];
  createdAt: string;
  [k: string]: unknown;
}

/** Allow replies from actors mentioned in your post. */
export interface MentionRule {
  [k: string]: unknown;
}

/** Allow replies from actors you follow. */
export interface FollowingRule {
  [k: string]: unknown;
}

/** Allow replies from actors on a list. */
export interface ListRule {
  list: string;
  [k: string]: unknown;
}
