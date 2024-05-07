/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {
  /** The handle or DID of the repo. */
  repo: string;
  /** The NSID of the record type. */
  collection: string;
  /** The number of records to return. */
  limit?: number;
  cursor?: string;
  /** DEPRECATED: The lowest sort-ordered rkey to start from (exclusive) */
  rkeyStart?: string;
  /** DEPRECATED: The highest sort-ordered rkey to stop at (exclusive) */
  rkeyEnd?: string;
  /** Flag to reverse the order of the returned records. */
  reverse?: boolean;
}

export type InputSchema = undefined;

export interface OutputSchema {
  cursor?: string;
  records: Record[];
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

export interface Record {
  uri: string;
  cid: string;
  value: {};
  [k: string]: unknown;
}
