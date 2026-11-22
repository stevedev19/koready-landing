import Link from "next/link";
import { SITE_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { QrCode } from "@/components/QrCode";
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
      <main id="main" className="mx-auto w-full max-w-4xl px-5 pb-16 pt-6">
        <h1 className="text-3xl font-bold tracking-tight">{p.title}</h1>
        <p className="mt-3 text-fg-muted">{p.intro}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section aria-labelledby="phone-title" className="card flex flex-col items-start p-6">
            <h2 id="phone-title" className="text-lg font-bold">
              {p.phoneTitle}
            </h2>
            <p className="mt-2 text-fg-muted">{p.phoneBody}</p>
            <div className="mt-5 self-center">
              <QrCode value={getUrl} label={`${p.qrLabel} ${shownUrl}`} />
            </div>
            <p className="mt-4 self-center text-sm text-fg-muted">
              {p.orVisit} <span className="font-semibold text-fg">{shownUrl}</span>
            </p>
          </section>

          <section aria-labelledby="browser-title" className="card flex flex-col items-start p-6">
            <h2 id="browser-title" className="text-lg font-bold">
              {p.browserTitle}
            </h2>
            <p className="mt-2 text-fg-muted">{p.browserBody}</p>
            <div className="mt-5">
              <MaybeLink
                href={linkOrNull(WEB_APP_URL)}
                comingSoonLabel={t.common.comingSoon}
                className="btn btn-primary"
                comingSoonClassName="btn btn-disabled"
              >
                {t.common.useWebApp}
              </MaybeLink>
            </div>

            <h3 className="mt-8 font-bold">{p.storesTitle}</h3>
            <div className="mt-3">
              <StoreButtons locale={locale} />
            </div>

            <p className="mt-8 text-sm text-fg-muted">
              {p.ipadNote}{" "}
              <Link href={localePath(locale, "/get/iphone")} className="tap-link text-accent">
                {p.ipadLink}
              </Link>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
