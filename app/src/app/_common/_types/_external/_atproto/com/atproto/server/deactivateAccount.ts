/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {}

export interface InputSchema {
  /** A recommendation to server as to how long they should hold onto the deactivated account before deleting. */
  deleteAfter?: string;
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
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e;
}
