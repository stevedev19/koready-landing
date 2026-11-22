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
    <header className="border-b border-rule">
      <div className="page flex items-center justify-between gap-4 py-2">
        <Link
          href={localePath(locale)}
          className="inline-flex min-h-12 items-center gap-3 text-lg font-strong"
          aria-label={t.common.home}
        >
          <LogoMark size={28} />
          <span lang="en">KoReady</span>
        </Link>
        {/* Plain <a>: switching locale changes the root layout, so it is a full load anyway. */}
        <a href={localePath(alt, path)} hrefLang={alt} lang={alt} className="link px-2">
          {t.common.languageSwitch}
        </a>
      </div>
    </header>
  );
}
