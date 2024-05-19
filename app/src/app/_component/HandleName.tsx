import { Stack, Typography } from "@mui/material";
import { ProfileViewBasic } from "../_common/_types/_external/_atproto/app/bsky/actor/defs";

type HandleNameProps = {
  params: { author: ProfileViewBasic };
};

export default function HandleName({ params }: HandleNameProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        {params.author.displayName} (@
        {params.author.handle})
      </Typography>
    </Stack>
  );
}
