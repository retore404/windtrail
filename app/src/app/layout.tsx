import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
