/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface QueryParams {}

export type InputSchema = undefined;

export interface OutputSchema {
  /** If true, an invite code must be supplied to create an account on this instance. */
  inviteCodeRequired?: boolean;
  /** If true, a phone verification token must be supplied to create an account on this instance. */
  phoneVerificationRequired?: boolean;
  /** List of domain suffixes that can be used in account handles. */
  availableUserDomains: string[];
  links?: Links;
  contact?: Contact;
  did: string;
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

export interface Links {
  privacyPolicy?: string;
  termsOfService?: string;
  [k: string]: unknown;
}

export interface Contact {
  email?: string;
  [k: string]: unknown;
}
