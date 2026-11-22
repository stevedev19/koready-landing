import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { getMessages } from "@/i18n/messages";
import { localePath, otherLocale, type Locale } from "@/i18n/locales";

type Props = {
  locale: Locale;
  /** Path (without locale prefix) of the equivalent page, e.g. "/get/iphone". */
  path?: string;
};

export function SiteHeader({ locale, path = "/" }: Props) {
  const t = getMessages(locale);
  const alt = otherLocale(locale);
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-5 py-3">
      <Link
        href={localePath(locale)}
        className="inline-flex min-h-12 items-center gap-2.5 rounded-[14px] text-lg font-bold tracking-tight"
        aria-label={t.common.home}
      >
        <LogoMark size={32} />
        <span lang="en">KoReady</span>
      </Link>
      {/* Plain <a>: switching locale changes the root layout, so it is a full load anyway. */}
      <a
        href={localePath(alt, path)}
        hrefLang={alt}
        lang={alt}
        className="btn btn-secondary px-4 text-sm"
      >
        {t.common.languageSwitch}
      </a>
    </header>
  );
}
