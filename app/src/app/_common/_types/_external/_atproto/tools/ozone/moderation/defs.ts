/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoAdminDefs from "../../../com/atproto/admin/defs";
import * as ComAtprotoRepoStrongRef from "../../../com/atproto/repo/strongRef";
import * as ComAtprotoModerationDefs from "../../../com/atproto/moderation/defs";
import * as ComAtprotoServerDefs from "../../../com/atproto/server/defs";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";

export interface ModEventView {
  id: number;
  event:
    | ModEventTakedown
    | ModEventReverseTakedown
    | ModEventComment
    | ModEventReport
    | ModEventLabel
    | ModEventAcknowledge
    | ModEventEscalate
    | ModEventMute
    | ModEventUnmute
    | ModEventMuteReporter
    | ModEventUnmuteReporter
    | ModEventEmail
    | ModEventResolveAppeal
    | ModEventDivert
    | { $type: string; [k: string]: unknown };
  subject:
    | ComAtprotoAdminDefs.RepoRef
    | ComAtprotoRepoStrongRef.Main
    | { $type: string; [k: string]: unknown };
  subjectBlobCids: string[];
  createdBy: string;
  createdAt: string;
  creatorHandle?: string;
  subjectHandle?: string;
  [k: string]: unknown;
}

export interface ModEventViewDetail {
  id: number;
  event:
    | ModEventTakedown
    | ModEventReverseTakedown
    | ModEventComment
    | ModEventReport
    | ModEventLabel
    | ModEventAcknowledge
    | ModEventEscalate
    | ModEventMute
    | ModEventUnmute
    | ModEventMuteReporter
    | ModEventUnmuteReporter
    | ModEventEmail
    | ModEventResolveAppeal
    | ModEventDivert
    | { $type: string; [k: string]: unknown };
  subject:
    | RepoView
    | RepoViewNotFound
    | RecordView
    | RecordViewNotFound
    | { $type: string; [k: string]: unknown };
  subjectBlobs: BlobView[];
  createdBy: string;
  createdAt: string;
  [k: string]: unknown;
}

export interface SubjectStatusView {
  id: number;
  subject:
    | ComAtprotoAdminDefs.RepoRef
    | ComAtprotoRepoStrongRef.Main
    | { $type: string; [k: string]: unknown };
  subjectBlobCids?: string[];
  subjectRepoHandle?: string;
  /** Timestamp referencing when the last update was made to the moderation status of the subject */
  updatedAt: string;
  /** Timestamp referencing the first moderation status impacting event was emitted on the subject */
  createdAt: string;
  reviewState: SubjectReviewState;
  /** Sticky comment on the subject. */
  comment?: string;
  muteUntil?: string;
  muteReportingUntil?: string;
  lastReviewedBy?: string;
  lastReviewedAt?: string;
  lastReportedAt?: string;
  /** Timestamp referencing when the author of the subject appealed a moderation action */
  lastAppealedAt?: string;
  takendown?: boolean;
  /** True indicates that the a previously taken moderator action was appealed against, by the author of the content. False indicates last appeal was resolved by moderators. */
  appealed?: boolean;
  suspendUntil?: string;
  tags?: string[];
  [k: string]: unknown;
}

export type SubjectReviewState =
  | "lex:tools.ozone.moderation.defs#reviewOpen"
  | "lex:tools.ozone.moderation.defs#reviewEscalated"
  | "lex:tools.ozone.moderation.defs#reviewClosed"
  | "lex:tools.ozone.moderation.defs#reviewNone"
  | (string & {});

/** Moderator review status of a subject: Open. Indicates that the subject needs to be reviewed by a moderator */
export const REVIEWOPEN = "tools.ozone.moderation.defs#reviewOpen";
/** Moderator review status of a subject: Escalated. Indicates that the subject was escalated for review by a moderator */
export const REVIEWESCALATED = "tools.ozone.moderation.defs#reviewEscalated";
/** Moderator review status of a subject: Closed. Indicates that the subject was already reviewed and resolved by a moderator */
export const REVIEWCLOSED = "tools.ozone.moderation.defs#reviewClosed";
/** Moderator review status of a subject: Unnecessary. Indicates that the subject does not need a review at the moment but there is probably some moderation related metadata available for it */
export const REVIEWNONE = "tools.ozone.moderation.defs#reviewNone";

/** Take down a subject permanently or temporarily */
export interface ModEventTakedown {
  comment?: string;
  /** Indicates how long the takedown should be in effect before automatically expiring. */
  durationInHours?: number;
  [k: string]: unknown;
}

/** Revert take down action on a subject */
export interface ModEventReverseTakedown {
  /** Describe reasoning behind the reversal. */
  comment?: string;
  [k: string]: unknown;
}

/** Resolve appeal on a subject */
export interface ModEventResolveAppeal {
  /** Describe resolution. */
  comment?: string;
  [k: string]: unknown;
}

/** Add a comment to a subject */
export interface ModEventComment {
  comment: string;
  /** Make the comment persistent on the subject */
  sticky?: boolean;
  [k: string]: unknown;
}

/** Report a subject */
export interface ModEventReport {
  comment?: string;
  /** Set to true if the reporter was muted from reporting at the time of the event. These reports won't impact the reviewState of the subject. */
  isReporterMuted?: boolean;
  reportType: ComAtprotoModerationDefs.ReasonType;
  [k: string]: unknown;
}

/** Apply/Negate labels on a subject */
export interface ModEventLabel {
  comment?: string;
  createLabelVals: string[];
  negateLabelVals: string[];
  [k: string]: unknown;
}

export interface ModEventAcknowledge {
  comment?: string;
  [k: string]: unknown;
}

export interface ModEventEscalate {
  comment?: string;
  [k: string]: unknown;
}

/** Mute incoming reports on a subject */
export interface ModEventMute {
  comment?: string;
  /** Indicates how long the subject should remain muted. */
  durationInHours: number;
  [k: string]: unknown;
}

/** Unmute action on a subject */
export interface ModEventUnmute {
  /** Describe reasoning behind the reversal. */
  comment?: string;
  [k: string]: unknown;
}

/** Mute incoming reports from an account */
export interface ModEventMuteReporter {
  comment?: string;
  /** Indicates how long the account should remain muted. */
  durationInHours: number;
  [k: string]: unknown;
}

/** Unmute incoming reports from an account */
export interface ModEventUnmuteReporter {
  /** Describe reasoning behind the reversal. */
  comment?: string;
  [k: string]: unknown;
}

/** Keep a log of outgoing email to a user */
export interface ModEventEmail {
  /** The subject line of the email sent to the user. */
  subjectLine: string;
  /** The content of the email sent to the user. */
  content?: string;
  /** Additional comment about the outgoing comm. */
  comment?: string;
  [k: string]: unknown;
}

/** Divert a record's blobs to a 3rd party service for further scanning/tagging */
export interface ModEventDivert {
  comment?: string;
  [k: string]: unknown;
}

/** Add/Remove a tag on a subject */
export interface ModEventTag {
  /** Tags to be added to the subject. If already exists, won't be duplicated. */
  add: string[];
  /** Tags to be removed to the subject. Ignores a tag If it doesn't exist, won't be duplicated. */
  remove: string[];
  /** Additional comment about added/removed tags. */
  comment?: string;
  [k: string]: unknown;
}

export interface RepoView {
  did: string;
  handle: string;
  email?: string;
  relatedRecords: {}[];
  indexedAt: string;
  moderation: Moderation;
  invitedBy?: ComAtprotoServerDefs.InviteCode;
  invitesDisabled?: boolean;
  inviteNote?: string;
  [k: string]: unknown;
}

export interface RepoViewDetail {
  did: string;
  handle: string;
  email?: string;
  relatedRecords: {}[];
  indexedAt: string;
  moderation: ModerationDetail;
  labels?: ComAtprotoLabelDefs.Label[];
  invitedBy?: ComAtprotoServerDefs.InviteCode;
  invites?: ComAtprotoServerDefs.InviteCode[];
  invitesDisabled?: boolean;
  inviteNote?: string;
  emailConfirmedAt?: string;
  [k: string]: unknown;
}

export interface RepoViewNotFound {
  did: string;
  [k: string]: unknown;
}

export interface RecordView {
  uri: string;
  cid: string;
  value: {};
  blobCids: string[];
  indexedAt: string;
  moderation: Moderation;
  repo: RepoView;
  [k: string]: unknown;
}

export interface RecordViewDetail {
  uri: string;
  cid: string;
  value: {};
  blobs: BlobView[];
  labels?: ComAtprotoLabelDefs.Label[];
  indexedAt: string;
  moderation: ModerationDetail;
  repo: RepoView;
  [k: string]: unknown;
}

export interface RecordViewNotFound {
  uri: string;
  [k: string]: unknown;
}

export interface Moderation {
  subjectStatus?: SubjectStatusView;
  [k: string]: unknown;
}

export interface ModerationDetail {
  subjectStatus?: SubjectStatusView;
  [k: string]: unknown;
}

export interface BlobView {
  cid: string;
  mimeType: string;
  size: number;
  createdAt: string;
  details?:
    | ImageDetails
    | VideoDetails
    | { $type: string; [k: string]: unknown };
  moderation?: Moderation;
  [k: string]: unknown;
}

export interface ImageDetails {
  width: number;
  height: number;
  [k: string]: unknown;
}

export interface VideoDetails {
  width: number;
  height: number;
  length: number;
  [k: string]: unknown;
}
