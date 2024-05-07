/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyActorDefs from "../actor/defs";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";

export interface QueryParams {
  limit?: number;
  cursor?: string;
  seenAt?: string;
}

export type InputSchema = undefined;

export interface OutputSchema {
  cursor?: string;
  notifications: Notification[];
  seenAt?: string;
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

export interface Notification {
  uri: string;
  cid: string;
  author: AppBskyActorDefs.ProfileView;
  /** Expected values are 'like', 'repost', 'follow', 'mention', 'reply', and 'quote'. */
  reason:
    | "like"
    | "repost"
    | "follow"
    | "mention"
    | "reply"
    | "quote"
    | (string & {});
  reasonSubject?: string;
  record: {};
  isRead: boolean;
  indexedAt: string;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}