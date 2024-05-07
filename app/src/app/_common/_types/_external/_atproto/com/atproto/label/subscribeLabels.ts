/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoLabelDefs from "./defs";

export interface Labels {
  seq: number;
  labels: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface Info {
  name: "OutdatedCursor" | (string & {});
  message?: string;
  [k: string]: unknown;
}
