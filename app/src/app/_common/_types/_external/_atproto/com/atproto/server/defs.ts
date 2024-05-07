/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface InviteCode {
  code: string;
  available: number;
  disabled: boolean;
  forAccount: string;
  createdBy: string;
  createdAt: string;
  uses: InviteCodeUse[];
  [k: string]: unknown;
}

export interface InviteCodeUse {
  usedBy: string;
  usedAt: string;
  [k: string]: unknown;
}
