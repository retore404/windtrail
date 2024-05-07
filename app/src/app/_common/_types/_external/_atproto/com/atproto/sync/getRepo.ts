/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {
  /** The DID of the repo. */
  did: string;
  /** The revision ('rev') of the repo to create a diff from. */
  since?: string;
}

export type InputSchema = undefined;

export interface CallOptions {
  headers?: Headers;
}

export interface Response {
  success: boolean;
  headers: Headers;
  data: Uint8Array;
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e;
}
