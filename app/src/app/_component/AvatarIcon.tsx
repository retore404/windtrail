import { Avatar, Grid, Stack } from "@mui/material";
import { ProfileViewBasic } from "../_common/_types/_external/_atproto/app/bsky/actor/defs";

type AvatarIconProps = {
  params: { author: ProfileViewBasic };
};

export default function AvatarIcon({ params }: AvatarIconProps) {
  return (
    <Grid xs={12} item>
      <Stack direction="row" justifyContent="center">
        <Avatar alt="avatar" src={params.author.avatar} />
      </Stack>
    </Grid>
  );
}
