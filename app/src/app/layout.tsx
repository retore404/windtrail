import type { Metadata } from "next";
import "./globals.css";
import Header from "./_component/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

export const metadata: Metadata = {
  title: "Windtrail",
  description: "Logging posts on Bluesky Social.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider>
          <Header />
          <section id="main">{children}</section>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
