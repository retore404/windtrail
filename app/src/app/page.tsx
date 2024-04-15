"use client";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Box
        component="section"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h2">Windtrail</Typography>
        <Box
          component="section"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <TextField
            id="handlename"
            label="Bluesky handle name"
            variant="standard"
          ></TextField>
          <Button
            variant="outlined"
            onClick={() => {
              const handlenamePath =
                "/" +
                (document.getElementById("handlename") as HTMLInputElement)
                  .value;
              window.location.href = handlenamePath;
            }}
          >
            See posts.
          </Button>
        </Box>
      </Box>
    </main>
  );
}
