import type { Metadata } from "next";
import { DesktopGetPage } from "@/components/get/DesktopGetPage";
import { getMessages } from "@/i18n/messages";

export const metadata: Metadata = {
  title: getMessages("en").get.desktop.metaTitle,
  robots: { index: false, follow: true },
};

export default function Page() {
  return <DesktopGetPage locale="en" />;
}
