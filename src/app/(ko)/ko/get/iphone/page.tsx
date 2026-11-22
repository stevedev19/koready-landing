import { IphoneGetPage } from "@/components/get/IphoneGetPage";
import { getMessages } from "@/i18n/messages";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ko", "/get/iphone", {
  title: getMessages("ko").get.iphone.metaTitle,
  index: false,
});

export default function Page() {
  return <IphoneGetPage locale="ko" />;
}
