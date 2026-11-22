export const LOCALES = ["en", "ko"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** URL prefix for a locale. English lives at the root, Korean under /ko. */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path === "/" ? "" : path;
  if (locale === "en") return clean || "/";
  return `/ko${clean}`;
}

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "ko" : "en";
}
