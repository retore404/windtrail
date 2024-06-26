import { Box, Divider, Stack, Typography } from "@mui/material";
import { FeedViewPost } from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import React from "react";
import FeedPost from "./FeedPost";

type PostsContainerProps = {
  params: { postsDict: Record<string, Array<FeedViewPost>> };
};

export default function PostsContainer({ params }: PostsContainerProps) {
  return (
    <Box>
      {Object.keys(params.postsDict).map((day) => {
        return (
          <Stack key={day}>
            <Stack
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
              alignItems="center"
            >
              <Typography variant="h5" component="h3">
                {day}
              </Typography>
              <Typography>{params.postsDict[day].length} posts.</Typography>
            </Stack>
            <Divider
              sx={{
                marginTop: "0.5em",
                marginBottom: "0.5em",
              }}
            />
            <Stack
              direction="column"
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
              sx={{ backgroundColor: "white", padding: "8px" }}
            >
              {params.postsDict[day].map((feedViewPost) => {
                return (
                  <React.Fragment key={feedViewPost.post.uri}>
                    <FeedPost params={{ feedViewPost: feedViewPost }} />
                  </React.Fragment>
                );
              })}
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
}
