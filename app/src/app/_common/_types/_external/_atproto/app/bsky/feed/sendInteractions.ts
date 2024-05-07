/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as AppBskyFeedDefs from "./defs";

export interface QueryParams {}

export interface InputSchema {
  interactions: AppBskyFeedDefs.Interaction[];
  [k: string]: unknown;
}

export interface OutputSchema {
  [k: string]: unknown;
}

export interface CallOptions {
  headers?: Headers;
  qp?: QueryParams;
  encoding: "application/json";
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
