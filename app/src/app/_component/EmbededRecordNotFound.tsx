import { Box, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import themeDefinition from "../_themes/themeDefinition";

export default function EmbededRecordNotFound() {
  return (
    <>
      <Box
        sx={{
          border: "1px solid " + themeDefinition.palette.line,
          borderRadius: "8px",
          margin: "8px",
          padding: "8px",
        }}
      >
        <Box display={`flex`} gap={`8px`}>
          <InfoIcon />
          <Typography>Embeded Record is not found.</Typography>
        </Box>
      </Box>
    </>
  );
}
