import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/links";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { en: `${SITE_URL}/`, ko: `${SITE_URL}/ko` };
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1, alternates: { languages } },
    { url: `${SITE_URL}/ko`, changeFrequency: "monthly", priority: 0.9, alternates: { languages } },
  ];
}
