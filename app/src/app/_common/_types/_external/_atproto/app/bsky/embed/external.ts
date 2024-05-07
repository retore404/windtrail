/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

/** A representation of some externally linked content (eg, a URL and 'card'), embedded in a Bluesky record (eg, a post). */
export interface Main {
  external: External;
  [k: string]: unknown;
}

export interface External {
  uri: string;
  title: string;
  description: string;
  thumb?: BlobRef;
  [k: string]: unknown;
}

export interface View {
  external: ViewExternal;
  [k: string]: unknown;
}

export interface ViewExternal {
  uri: string;
  title: string;
  description: string;
  thumb?: string;
  [k: string]: unknown;
}
