import type { Metadata } from "next";
import "./globals.css";
import Header from "./_component/Header";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./_themes/theme";
import themeDefinition from "./_themes/themeDefinition";

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <html lang="ja">
        <body
          style={{
            color: themeDefinition.palette.text.primary,
            backgroundColor: themeDefinition.palette.primary.light,
          }}
        >
          <AppRouterCacheProvider>
            <Header />
            <section id="main">{children}</section>
          </AppRouterCacheProvider>
        </body>
      </html>
    </ThemeProvider>
  );
}
