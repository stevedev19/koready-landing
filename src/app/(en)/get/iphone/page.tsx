import type { Metadata } from "next";
import { IphoneGetPage } from "@/components/get/IphoneGetPage";
import { getMessages } from "@/i18n/messages";

export const metadata: Metadata = {
  title: getMessages("en").get.iphone.metaTitle,
  robots: { index: false, follow: true },
};

export default function Page() {
  return <IphoneGetPage locale="en" />;
}
