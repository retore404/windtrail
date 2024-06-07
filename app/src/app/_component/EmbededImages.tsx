import { Box } from "@mui/material";
import * as AppBskyEmbedImages from "../_common/_types/_external/_atproto/app/bsky/embed/images";
import Lightbox from "./Lightbox";

type EmbededImagesProps = {
  params: { images: AppBskyEmbedImages.ViewImage[] };
};

export default function EmbededImages({ params }: EmbededImagesProps) {
  return (
    <Box display={`flex`} sx={{ gap: "8px", flexWrap: "wrap" }}>
      {params.images.map((image) => {
        return (
          <Box key={image.thumb} sx={{ maxWidth: "min(250px, 100%)" }}>
            <Lightbox params={{ image: image }} />
          </Box>
        );
      })}
    </Box>
  );
}
