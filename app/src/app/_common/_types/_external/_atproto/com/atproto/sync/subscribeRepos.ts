/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { Headers, XRPCError } from "@atproto/xrpc";
import { ValidationResult, BlobRef } from "@atproto/lexicon";

/** Represents a change to an account's identity. Could be an updated handle, signing key, or pds hosting endpoint. Serves as a prod to all downstream services to refresh their identity cache. */
export interface Identity {
  seq: number;
  did: string;
  time: string;
  [k: string]: unknown;
}

/** Represents an update of the account's handle, or transition to/from invalid state. NOTE: Will be deprecated in favor of #identity. */
export interface Handle {
  seq: number;
  did: string;
  handle: string;
  time: string;
  [k: string]: unknown;
}

/** Represents an account moving from one PDS instance to another. NOTE: not implemented; account migration uses #identity instead */
export interface Migrate {
  seq: number;
  did: string;
  migrateTo: string | null;
  time: string;
  [k: string]: unknown;
}

/** Indicates that an account has been deleted. NOTE: may be deprecated in favor of #identity or a future #account event */
export interface Tombstone {
  seq: number;
  did: string;
  time: string;
  [k: string]: unknown;
}

export interface Info {
  name: "OutdatedCursor" | (string & {});
  message?: string;
  [k: string]: unknown;
}
