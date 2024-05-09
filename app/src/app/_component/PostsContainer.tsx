import {
  Box,
  Divider,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import PostCard from "./PostCard";
import { FeedViewPost } from "../_common/_types/_external/_atproto/app/bsky/feed/defs";
import React from "react";

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
            <StyledEngineProvider injectFirst>
              <Divider
                sx={{
                  marginTop: "0.5em",
                  marginBottom: "0.5em",
                }}
              />
            </StyledEngineProvider>
            {params.postsDict[day].map((feedViewPost) => {
              return (
                <React.Fragment key={feedViewPost.post.uri}>
                  <PostCard params={{ feedViewPost: feedViewPost }} />
                  <Box
                    sx={{
                      marginTop: "16px",
                      marginBottom: "16px",
                      border: "0.1px solid var(--line-color)",
                    }}
                  />
                </React.Fragment>
              );
            })}
          </Stack>
        );
      })}
    </Box>
  );
}
