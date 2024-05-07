/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as AppBskyFeedDefs from "./defs";

export interface QueryParams {
  /** List of post AT-URIs to return hydrated views for. */
  uris: string[];
}

export type InputSchema = undefined;

export interface OutputSchema {
  posts: AppBskyFeedDefs.PostView[];
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
