/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {}

export type InputSchema = undefined;

export interface OutputSchema {
  suggestions: Suggestion[];
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

export interface Suggestion {
  tag: string;
  subjectType: "actor" | "feed" | (string & {});
  subject: string;
  [k: string]: unknown;
}
