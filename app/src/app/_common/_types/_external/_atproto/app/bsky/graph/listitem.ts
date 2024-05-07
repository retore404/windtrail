/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface Record {
  /** The account which is included on the list. */
  subject: string;
  /** Reference (AT-URI) to the list record (app.bsky.graph.list). */
  list: string;
  createdAt: string;
  [k: string]: unknown;
}
