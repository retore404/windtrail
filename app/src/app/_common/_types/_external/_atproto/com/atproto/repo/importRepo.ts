/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {}

export type InputSchema = string | Uint8Array;

export interface CallOptions {
  headers?: Headers;
  qp?: QueryParams;
  encoding: "application/vnd.ipld.car";
}

export interface Response {
  success: boolean;
  headers: Headers;
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e;
}
