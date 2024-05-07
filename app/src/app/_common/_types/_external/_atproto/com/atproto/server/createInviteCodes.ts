/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {}

export interface InputSchema {
  codeCount: number;
  useCount: number;
  forAccounts?: string[];
  [k: string]: unknown;
}

export interface OutputSchema {
  codes: AccountCodes[];
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
  data: OutputSchema;
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
  }
  return e;
}

export interface AccountCodes {
  account: string;
  codes: string[];
  [k: string]: unknown;
}

