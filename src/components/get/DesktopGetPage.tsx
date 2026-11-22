import Link from "next/link";
import { SITE_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { QrCode } from "@/components/QrCode";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreButtons } from "@/components/StoreButtons";
import { getMessages } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/locales";

export function DesktopGetPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const p = t.get.desktop;
  const getUrl = `${SITE_URL}${localePath(locale, "/get")}`;
  const shownUrl = getUrl.replace(/^https?:\/\//, "");

  return (
    <>
      <SiteHeader locale={locale} path="/get/desktop" />
      <main id="main" className="page pt-10 md:pt-16">
        <h1 className="text-xl md:text-2xl">{p.title}</h1>
        <p className="mt-4 max-w-text text-lg text-ink-muted">{p.intro}</p>

        <div className="grid-12 mt-10 gap-y-10">
          <section aria-labelledby="phone-title" className="col-span-12 md:col-span-5">
            <h2 id="phone-title" className="text-lg">
              {p.phoneTitle}
            </h2>
            <p className="mt-2 text-ink-muted">{p.phoneBody}</p>
            <div className="example mt-6 inline-block p-4">
              <QrCode value={getUrl} label={`${p.qrLabel} ${shownUrl}`} />
            </div>
            <p className="mt-4 text-sm text-ink-muted">
              {p.orVisit} <span className="tnum font-strong text-ink">{shownUrl}</span>
            </p>
          </section>

          <section
            aria-labelledby="browser-title"
            className="col-span-12 border-t border-rule pt-10 md:col-start-7 md:col-span-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          >
            <h2 id="browser-title" className="text-lg">
              {p.browserTitle}
            </h2>
            <p className="mt-2 text-ink-muted">{p.browserBody}</p>
            <div className="mt-6">
              <MaybeLink
                href={linkOrNull(WEB_APP_URL)}
                comingSoonLabel={t.common.comingSoon}
                className="btn btn-primary"
                comingSoonClassName="btn btn-off"
              >
                {t.common.useWebApp}
              </MaybeLink>
            </div>

            <h3 className="mt-10 text-base">{p.storesTitle}</h3>
            <div className="mt-4">
              <StoreButtons locale={locale} />
            </div>

            <p className="mt-10 text-ink-muted">
              {p.ipadNote}{" "}
              <Link href={localePath(locale, "/get/iphone")} className="link">
                {p.ipadLink}
              </Link>
            </p>
          </section>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
