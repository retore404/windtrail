import { IconButton, Stack } from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Dayjs } from "dayjs";
import Link from "next/link";
import getDayJs from "../_common/_functions/getDaysJs";

// Prop定義
type PageNavigationProps = {
  params: {
    username: string;
    today: Dayjs;
    unit: "day" | "month";
  };
};

export default function PageNavigation({ params }: PageNavigationProps) {
  // 次（未来）ページの基準日付
  const nextPageBaseDate = params.today.tz().add(1, params.unit);
  // 次（未来ページ）のリンクのパス導出
  const nextPagePath =
    params.unit === "day"
      ? nextPageBaseDate.format("YYYYMMDD")
      : nextPageBaseDate.format("YYYYMM");

  // 前（過去）ページの基準日付
  const previousPageBaseDate = params.today.tz().subtract(1, params.unit);
  // 前（過去）ページのリンクのパス導出
  const previousPagePath =
    params.unit === "day"
      ? previousPageBaseDate.format("YYYYMMDD")
      : previousPageBaseDate.format("YYYYMM");

  // 本日
  const dayjs = getDayJs();
  const todayDate = dayjs().tz();

  return (
    <Stack
      direction="row"
      justifyContent="center"
      sx={{ marginTop: "1em", gap: "2em" }}
    >
      {nextPageBaseDate.isAfter(todayDate) ? (
        <IconButton sx={{ visibility: "hidden" }}>
          <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
        </IconButton>
      ) : (
        <Link href={`/${params.username}/${nextPagePath}`}>
          <IconButton>
            <ArrowBackIosRoundedIcon></ArrowBackIosRoundedIcon>
          </IconButton>
        </Link>
      )}
      <Link href={`/${params.username}/${previousPagePath}`}>
        <IconButton>
          <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        </IconButton>
      </Link>
    </Stack>
  );
}
