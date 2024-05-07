/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {}

export interface InputSchema {
  /** A short name for the App Password, to help distinguish them. */
  name: string;
  [k: string]: unknown;
}

export type OutputSchema = AppPassword;

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

export class AccountTakedownError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === "AccountTakedown") return new AccountTakedownError(e);
  }
  return e;
}

export interface AppPassword {
  name: string;
  password: string;
  createdAt: string;
  [k: string]: unknown;
}

