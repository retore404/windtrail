/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyLabelerDefs from "./defs";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";

export interface Record {
  policies: AppBskyLabelerDefs.LabelerPolicies;
  labels?:
    | ComAtprotoLabelDefs.SelfLabels
    | { $type: string; [k: string]: unknown };
  createdAt: string;
  [k: string]: unknown;
}
