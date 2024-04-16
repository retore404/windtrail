import { Metadata, ResolvingMetadata } from "next";
import UserInfo from "../_component/UserInfo";

// 引数の型定義
type Props = {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// メタデータを生成
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const username = params.username;

  return {
    title: username + " | Windtrail",
    description: username + "",
    openGraph: {
      title: username + " | Windtrail",
      description: username + "",
    },
  };
}

export default async function Page({ params, searchParams }: Props) {
  return (
    <UserInfo params={{username: params.username}}></UserInfo>
  );
}
