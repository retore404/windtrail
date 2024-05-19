import { Box, Grid, Stack, Typography } from "@mui/material";
import getDayJs from "../_common/_libs/dayjs";
import { Dayjs } from "dayjs";
import CachedIcon from "@mui/icons-material/Cached";

type RepostLabelProps = {
  params: { repostedDate: Dayjs };
};

export default function RepostLabel({ params }: RepostLabelProps) {
  const dayjs = getDayJs();

  return (
    <>
      <Grid xs={12} item>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          sx={{ marginLeft: "16px" }}
        >
          <CachedIcon />
          <Typography variant="body2">
            reposted at{" "}
            {dayjs(params.repostedDate).tz().format("YYYY-MM-DD HH:mm:ss")}
          </Typography>
        </Stack>
        <Box sx={{ height: "8px" }} />
      </Grid>
    </>
  );
}
