import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import themeDefinition from "../_themes/themeDefinition";

type UnderConstructionProps = {
  params: { type: string };
};

export default function UnderConstruction({ params }: UnderConstructionProps) {
  return (
    <Box
      sx={{
        backgroundColor: themeDefinition.palette.secondary.light,
        padding: "8px",
      }}
      display={`flex`}
      flexDirection={`row`}
    >
      <InfoIcon />
      <Typography>
        Windtrail is currently been developed to deal with embed contents type{" "}
        {`"${params.type}"`}.
      </Typography>
    </Box>
  );
}
