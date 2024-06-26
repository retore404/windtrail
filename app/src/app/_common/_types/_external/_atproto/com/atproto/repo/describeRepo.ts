/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {
  /** The handle or DID of the repo. */
  repo: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  handle: string;
  did: string;
  /** The complete DID document for this account. */
  didDoc: {};
  /** List of all the collections (NSIDs) for which this repo contains at least one record. */
  collections: string[];
  /** Indicates if handle is currently valid (resolves bi-directionally) */
  handleIsCorrect: boolean;
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
