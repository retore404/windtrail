/**
 * GENERATED CODE - DO NOT MODIFY
 */
import { ValidationResult, BlobRef } from "@atproto/lexicon";

export interface Main {
  images: Image[];
  [k: string]: unknown;
}

export interface Image {
  image: BlobRef;
  /** Alt text description of the image, for accessibility. */
  alt: string;
  aspectRatio?: AspectRatio;
  [k: string]: unknown;
}

/** width:height represents an aspect ratio. It may be approximate, and may not correspond to absolute dimensions in any given unit. */
export interface AspectRatio {
  width: number;
  height: number;
  [k: string]: unknown;
}

export interface View {
  images: ViewImage[];
  [k: string]: unknown;
}

export interface ViewImage {
  /** Fully-qualified URL where a thumbnail of the image can be fetched. For example, CDN location provided by the App View. */
  thumb: string;
  /** Fully-qualified URL where a large version of the image can be fetched. May or may not be the exact original blob. For example, CDN location provided by the App View. */
  fullsize: string;
  /** Alt text description of the image, for accessibility. */
  alt: string;
  aspectRatio?: AspectRatio;
  [k: string]: unknown;
}
