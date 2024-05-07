/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import * as AppBskyActorDefs from "./defs";

export interface QueryParams {
  /** Handle or DID of account to fetch profile of. */
  actor: string;
}

export type InputSchema = undefined;
export type OutputSchema = AppBskyActorDefs.ProfileViewDetailed;

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
