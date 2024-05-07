/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";

export interface QueryParams {}

export interface InputSchema {
  token: string;
  password: string;
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

export class ExpiredTokenError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export class InvalidTokenError extends XRPCError {
  constructor(src: XRPCError) {
    super(src.status, src.error, src.message, src.headers);
  }
}

export function toKnownErr(e: any) {
  if (e instanceof XRPCError) {
    if (e.error === "ExpiredToken") return new ExpiredTokenError(e);
    if (e.error === "InvalidToken") return new InvalidTokenError(e);
  }
  return e;
}