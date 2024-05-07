/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {}

export interface InputSchema {
  /** The handle or DID of the repo (aka, current account). */
  repo: string;
  /** Can be set to 'false' to skip Lexicon schema validation of record data, for all operations. */
  validate?: boolean;
  writes: (Create | Update | Delete)[];
  /** If provided, the entire operation will fail if the current repo commit CID does not match this value. Used to prevent conflicting repo mutations. */
  swapCommit?: string;
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

export class InvalidSwapError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === "InvalidSwap") return new InvalidSwapError(e);
  }
  return e;
}

/** Operation which creates a new record. */
export interface Create {
  collection: string;
  rkey?: string;
  value: {};
  [k: string]: unknown;
}

/** Operation which updates an existing record. */
export interface Update {
  collection: string;
  rkey: string;
  value: {};
  [k: string]: unknown;
}

/** Operation which deletes an existing record. */
export interface Delete {
  collection: string;
  rkey: string;
  [k: string]: unknown;
}
