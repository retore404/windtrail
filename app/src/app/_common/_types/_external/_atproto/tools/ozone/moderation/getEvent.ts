/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as ToolsOzoneModerationDefs from "./defs";

export interface QueryParams {
  id: number;
}

export type InputSchema = undefined;
export type OutputSchema = ToolsOzoneModerationDefs.ModEventViewDetail;

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
