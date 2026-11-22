import type { Metadata, Viewport } from "next";
// Pretendard Variable, dynamic subset (SIL OFL 1.1). Bundled and served
// from this site's own domain; the CSS uses font-display: swap.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "KoReady",
  description: "Understand Korea in your language.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1418" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
