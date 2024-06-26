/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as AppBskyFeedDefs from "./defs";

export interface QueryParams {
  /** Variant 'algorithm' for timeline. Implementation-specific. NOTE: most feed flexibility has been moved to feed generator mechanism. */
  algorithm?: string;
  limit?: number;
  cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  cursor?: string;
  feed: AppBskyFeedDefs.FeedViewPost[];
  [k: string]: unknown;
}

export interface CallOptions {
  headers?: Headers;
}

export interface Response {
  success: boolean;
  headers: Headers;
  data: OutputSchema;
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e;
}
