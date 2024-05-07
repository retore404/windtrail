/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoServerDefs from "../server/defs";

export interface StatusAttr {
  applied: boolean;
  ref?: string;
  [k: string]: unknown;
}

export interface AccountView {
  did: string;
  handle: string;
  email?: string;
  relatedRecords?: {}[];
  indexedAt: string;
  invitedBy?: ComAtprotoServerDefs.InviteCode;
  invites?: ComAtprotoServerDefs.InviteCode[];
  invitesDisabled?: boolean;
  emailConfirmedAt?: string;
  inviteNote?: string;
  [k: string]: unknown;
}

export interface RepoRef {
  did: string;
  [k: string]: unknown;
}

export interface RepoBlobRef {
  did: string;
  cid: string;
  recordUri?: string;
  [k: string]: unknown;
}
