import { DesktopGetPage } from "@/components/get/DesktopGetPage";
import { getMessages } from "@/i18n/messages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("en", "/get/desktop", {
  title: getMessages("en").get.desktop.metaTitle,
  index: false,
});

export default function Page() {
  return <DesktopGetPage locale="en" />;
}
