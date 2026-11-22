import type { Metadata } from "next";
import { SITE_URL } from "@/config/links";
import { getMessages } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/locales";

/**
 * Canonical, hreflang (en, ko, x-default), Open Graph and Twitter tags
 * for a page. `path` is the locale-less path, e.g. "/" or "/get/iphone".
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  opts: { title?: string; description?: string; index?: boolean } = {},
): Metadata {
  const t = getMessages(locale);
  const title = opts.title ?? t.meta.title;
  const description = opts.description ?? t.meta.description;
  const url = localePath(locale, path);
  // og:image comes from app/(en)/opengraph-image.tsx and
  // app/(ko)/ko/opengraph-image.tsx automatically; X/Twitter falls back to it.

  return {
    metadataBase: new URL(SITE_URL),
    title: opts.title ? opts.title : { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: localePath("en", path),
        ko: localePath("ko", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName: t.meta.siteName,
      title,
      description,
      url,
      locale: locale === "ko" ? "ko_KR" : "en_US",
      alternateLocale: locale === "ko" ? ["en_US"] : ["ko_KR"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: opts.index === false ? { index: false, follow: true } : { index: true, follow: true },
  };
}
