/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {
  /** The DID of the repo. */
  did: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  root: string;
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

export class HeadNotFoundError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === "HeadNotFound") return new HeadNotFoundError(e);
  }
  return e;
}
