import {
  Avatar,
  Card,
  CardContent,
  Divider,
  Stack,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { getProfile, resolveHandle } from "../_common/_libs/bsky";
import { renderTwemoji } from "../_common/_libs/twemojiUtil";

// 引数の型定義
type Props = {
  params: { username: string };
};

export default async function UserInfo({ params }: Props) {
  // didの取得
  const did = await resolveHandle(params.username);

  // ユーザ情報の取得
  const profile = await getProfile(did);
  const displayName = profile.displayName;
  const avatarImage = profile.avatar;
  const description = profile.description + "";
  const parsedDescription = renderTwemoji(description);

  const followersCount = profile.followersCount;
  const followsCount = profile.followsCount;
  const postsCount = profile.postsCount;

  return (
    <Card>
      <CardContent>
        <Stack>
          <Stack direction="row" spacing={1}>
            <Avatar alt="avatar" src={avatarImage} />
            <Typography variant="h4" component="h2">
              {displayName}
            </Typography>
          </Stack>
          <Typography>
            {`@` + params.username} / {did}
          </Typography>
          <Typography>
            {postsCount} posts. / Follows: {followsCount} / Followers:{" "}
            {followersCount}
          </Typography>
        </Stack>
        <StyledEngineProvider injectFirst>
          <Divider
            sx={{
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }}
          />
        </StyledEngineProvider>
        <Stack>
          <p
            style={{ whiteSpace: "pre-wrap", margin: 0 }}
            dangerouslySetInnerHTML={{ __html: parsedDescription }}
          ></p>
        </Stack>
      </CardContent>
    </Card>
  );
}
