/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as ToolsOzoneModerationDefs from "./defs";

export interface QueryParams {
  uri: string;
  cid?: string;
}

export type InputSchema = undefined;
export type OutputSchema = ToolsOzoneModerationDefs.RecordViewDetail;

export interface CallOptions {
  headers?: Headers;
}

export interface Response {
  success: boolean;
  headers: Headers;
  data: OutputSchema;
}

export class RecordNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === "RecordNotFound") return new RecordNotFoundError(e);
  }
  return e;
}
