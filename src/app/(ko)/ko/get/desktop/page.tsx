import type { Metadata } from "next";
import { DesktopGetPage } from "@/components/get/DesktopGetPage";
import { getMessages } from "@/i18n/messages";

export const metadata: Metadata = {
  title: getMessages("ko").get.desktop.metaTitle,
  robots: { index: false, follow: true },
};

export default function Page() {
  return <DesktopGetPage locale="ko" />;
}
