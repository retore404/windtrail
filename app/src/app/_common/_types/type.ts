import { Dayjs } from "dayjs";

export type Author = {
  did: string;
  handle: string;
  displayName: string;
  avatar: string;
};

export type Post = {
  author: Author;
  text: string;
  createdAt: Dayjs;
};

export type getPostsProps = {
  params: { username: string; dateFrom: Dayjs; dateTo: Dayjs };
};
