/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as AppBskyActorDefs from "./defs";

export interface QueryParams {
  limit?: number;
  cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  cursor?: string;
  actors: AppBskyActorDefs.ProfileView[];
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
