/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as AppBskyActorDefs from "../actor/defs";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";

export interface LabelerView {
  uri: string;
  cid: string;
  creator: AppBskyActorDefs.ProfileView;
  likeCount?: number;
  viewer?: LabelerViewerState;
  indexedAt: string;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface LabelerViewDetailed {
  uri: string;
  cid: string;
  creator: AppBskyActorDefs.ProfileView;
  policies: LabelerPolicies;
  likeCount?: number;
  viewer?: LabelerViewerState;
  indexedAt: string;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface LabelerViewerState {
  like?: string;
  [k: string]: unknown;
}

export interface LabelerPolicies {
  /** The label values which this labeler publishes. May include global or custom labels. */
  labelValues: ComAtprotoLabelDefs.LabelValue[];
  /** Label values created by this labeler and scoped exclusively to it. Labels defined here will override global label definitions for this labeler. */
  labelValueDefinitions?: ComAtprotoLabelDefs.LabelValueDefinition[];
  [k: string]: unknown;
}
