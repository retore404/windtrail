/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";
import * as ComAtprotoLabelDefs from "../../../com/atproto/label/defs";
import * as AppBskyGraphDefs from "../graph/defs";

export interface ProfileViewBasic {
  did: string;
  handle: string;
  displayName?: string;
  avatar?: string;
  associated?: ProfileAssociated;
  viewer?: ViewerState;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface ProfileView {
  did: string;
  handle: string;
  displayName?: string;
  description?: string;
  avatar?: string;
  associated?: ProfileAssociated;
  indexedAt?: string;
  viewer?: ViewerState;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface ProfileViewDetailed {
  did: string;
  handle: string;
  displayName?: string;
  description?: string;
  avatar?: string;
  banner?: string;
  followersCount?: number;
  followsCount?: number;
  postsCount?: number;
  associated?: ProfileAssociated;
  indexedAt?: string;
  viewer?: ViewerState;
  labels?: ComAtprotoLabelDefs.Label[];
  [k: string]: unknown;
}

export interface ProfileAssociated {
  lists?: number;
  feedgens?: number;
  labeler?: boolean;
  [k: string]: unknown;
}

/** Metadata about the requesting account's relationship with the subject account. Only has meaningful content for authed requests. */
export interface ViewerState {
  muted?: boolean;
  mutedByList?: AppBskyGraphDefs.ListViewBasic;
  blockedBy?: boolean;
  blocking?: string;
  blockingByList?: AppBskyGraphDefs.ListViewBasic;
  following?: string;
  followedBy?: string;
  [k: string]: unknown;
}

export type Preferences = (
  | AdultContentPref
  | ContentLabelPref
  | SavedFeedsPref
  | SavedFeedsPrefV2
  | PersonalDetailsPref
  | FeedViewPref
  | ThreadViewPref
  | InterestsPref
  | MutedWordsPref
  | HiddenPostsPref
  | { $type: string; [k: string]: unknown }
)[];

export interface AdultContentPref {
  enabled: boolean;
  [k: string]: unknown;
}

export interface ContentLabelPref {
  /** Which labeler does this preference apply to? If undefined, applies globally. */
  labelerDid?: string;
  label: string;
  visibility: "ignore" | "show" | "warn" | "hide" | (string & {});
  [k: string]: unknown;
}

export interface SavedFeed {
  id: string;
  type: "feed" | "list" | "timeline" | (string & {});
  value: string;
  pinned: boolean;
  [k: string]: unknown;
}

export interface SavedFeedsPrefV2 {
  items: SavedFeed[];
  [k: string]: unknown;
}

export interface SavedFeedsPref {
  pinned: string[];
  saved: string[];
  timelineIndex?: number;
  [k: string]: unknown;
}

export interface PersonalDetailsPref {
  /** The birth date of account owner. */
  birthDate?: string;
  [k: string]: unknown;
}

export interface FeedViewPref {
  /** The URI of the feed, or an identifier which describes the feed. */
  feed: string;
  /** Hide replies in the feed. */
  hideReplies?: boolean;
  /** Hide replies in the feed if they are not by followed users. */
  hideRepliesByUnfollowed: boolean;
  /** Hide replies in the feed if they do not have this number of likes. */
  hideRepliesByLikeCount?: number;
  /** Hide reposts in the feed. */
  hideReposts?: boolean;
  /** Hide quote posts in the feed. */
  hideQuotePosts?: boolean;
  [k: string]: unknown;
}

export interface ThreadViewPref {
  /** Sorting mode for threads. */
  sort?: "oldest" | "newest" | "most-likes" | "random" | (string & {});
  /** Show followed users at the top of all replies. */
  prioritizeFollowedUsers?: boolean;
  [k: string]: unknown;
}

export interface InterestsPref {
  /** A list of tags which describe the account owner's interests gathered during onboarding. */
  tags: string[];
  [k: string]: unknown;
}

export type MutedWordTarget = "content" | "tag" | (string & {});

/** A word that the account owner has muted. */
export interface MutedWord {
  /** The muted word itself. */
  value: string;
  /** The intended targets of the muted word. */
  targets: MutedWordTarget[];
  [k: string]: unknown;
}

export interface MutedWordsPref {
  /** A list of words the account owner has muted. */
  items: MutedWord[];
  [k: string]: unknown;
}

export interface HiddenPostsPref {
  /** A list of URIs of posts the account owner has hidden. */
  items: string[];
  [k: string]: unknown;
}

export interface LabelersPref {
  labelers: LabelerPrefItem[];
  [k: string]: unknown;
}

export interface LabelerPrefItem {
  did: string;
  [k: string]: unknown;
}
