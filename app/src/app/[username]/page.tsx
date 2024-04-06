export default function Page({
    params,
    searchParams,
  }: {
    params: { username: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }) {
    return (<h1>{params.username}</h1>)
  }