/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";

export interface Record {
  displayName?: string;
  /** Free-form profile description text. */
  description?: string;
  /** Small image to be displayed next to posts from account. AKA, 'profile picture' */
  avatar?: BlobRef;
  /** Larger horizontal image to display behind profile view. */
  banner?: BlobRef;
  labels?:
    | ComAtprotoLabelDefs.SelfLabels
    | { $type: string; [k: string]: unknown };
  [k: string]: unknown;
}
