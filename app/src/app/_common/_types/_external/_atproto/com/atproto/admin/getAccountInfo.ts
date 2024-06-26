/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as ComAtprotoAdminDefs from "./defs";

export interface QueryParams {
  did: string;
}

export type InputSchema = undefined;
export type OutputSchema = ComAtprotoAdminDefs.AccountView;

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
