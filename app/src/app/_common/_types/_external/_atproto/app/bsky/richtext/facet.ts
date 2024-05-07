/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

/** Annotation of a sub-string within rich text. */
export interface Main {
  index: ByteSlice;
  features: (Mention | Link | Tag | { $type: string; [k: string]: unknown })[];
  [k: string]: unknown;
}

/** Facet feature for mention of another account. The text is usually a handle, including a '@' prefix, but the facet reference is a DID. */
export interface Mention {
  did: string;
  [k: string]: unknown;
}

/** Facet feature for a URL. The text URL may have been simplified or truncated, but the facet reference should be a complete URL. */
export interface Link {
  uri: string;
  [k: string]: unknown;
}

/** Facet feature for a hashtag. The text usually includes a '#' prefix, but the facet reference should not (except in the case of 'double hash tags'). */
export interface Tag {
  tag: string;
  [k: string]: unknown;
}

/** Specifies the sub-string range a facet feature applies to. Start index is inclusive, end index is exclusive. Indices are zero-indexed, counting bytes of the UTF-8 encoded text. NOTE: some languages, like Javascript, use UTF-16 or Unicode codepoints for string slice indexing; in these languages, convert to byte arrays before working with facets. */
export interface ByteSlice {
  byteStart: number;
  byteEnd: number;
  [k: string]: unknown;
}
