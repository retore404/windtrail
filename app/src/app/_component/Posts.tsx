import {
  Box,
  Divider,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { Post } from "../_common/_types/type";
import PostCard from "./PostCard";

type PostsProps = {
  params: { postsDict: Record<string, Array<Post>> };
};

export default function Posts({ params }: PostsProps) {
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
            {params.postsDict[day].map((post) => {
              return <PostCard key={post.text} params={{ post: post }} />;
            })}
          </Stack>
        );
      })}
    </Box>
  );
}
