/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyActorDefs from "../actor/defs";

export interface QueryParams {
  /** AT-URI of the subject (eg, a post record). */
  uri: string;
  /** CID of the subject record (aka, specific version of record), to filter likes. */
  cid?: string;
  limit?: number;
  cursor?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  uri: string;
  cid?: string;
  cursor?: string;
  likes: Like[];
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

export interface Like {
  indexedAt: string;
  createdAt: string;
  actor: AppBskyActorDefs.ProfileView;
  [k: string]: unknown;
}
