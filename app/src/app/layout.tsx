import type { Metadata } from "next";
import "./globals.css";
import Header from "./_component/Header";

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
        <Header />
        <section id="main">{children}</section>
      </body>
    </html>
  );
}
