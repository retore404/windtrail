"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import * as AppBskyEmbedImages from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import Image from "next/image";

type LightboxProps = {
  params: { image: AppBskyEmbedImages.ViewImage };
};

export default function Lightbox({ params }: LightboxProps) {
  const image = params.image;
  return (
    <Zoom>
      <Image
        src={image.fullsize}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt={image.alt}
        width={image.aspectRatio?.width}
        height={image.aspectRatio?.height}
      />
    </Zoom>
  );
}
