/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as ComAtprotoLabelDefs from "../label/defs";

export interface QueryParams {
  since?: number;
  limit?: number;
}

export type InputSchema = undefined;

export interface OutputSchema {
  labels: ComAtprotoLabelDefs.Label[];
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
