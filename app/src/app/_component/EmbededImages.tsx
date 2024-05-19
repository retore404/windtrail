import { Box } from "@mui/material";
import * as AppBskyEmbedImages from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import Image from "next/image";

type EmbededImagesProps = {
  params: { images: AppBskyEmbedImages.ViewImage[] };
};

export default function EmbededImages({ params }: EmbededImagesProps) {
  return (
    <Box display={`flex`} sx={{ gap: "8px" }}>
      {params.images.map((image) => {
        return (
          <Box key={image.thumb}>
            <a href={image.fullsize}>
              <Image
                src={image.thumb}
                alt={image.alt}
                width={image.aspectRatio?.width}
                height={image.aspectRatio?.height}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </a>
          </Box>
        );
      })}
    </Box>
  );
}
