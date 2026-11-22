import { HomePage } from "@/components/home/HomePage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("ko", "/");

export default function Page() {
  return <HomePage locale="ko" />;
}
