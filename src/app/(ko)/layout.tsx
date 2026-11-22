import type { Metadata, Viewport } from "next";
// Pretendard Variable, dynamic subset (SIL OFL 1.1). Bundled and served
// from this site's own domain; the CSS uses font-display: swap.
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "../globals.css";
import { RootDocument } from "@/components/RootDocument";
import { SITE_URL } from "@/config/links";
import { getMessages } from "@/i18n/messages";

const t = getMessages("ko");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: t.meta.title, template: `%s · ${t.meta.siteName}` },
  description: t.meta.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1418" },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <RootDocument locale="ko">{children}</RootDocument>;
}
