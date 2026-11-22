import Link from "next/link";
import { APP_STORE_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StoreButtons } from "@/components/StoreButtons";
import { ShareIcon } from "@/components/get/ShareIcon";
import { getMessages } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/locales";

export function IphoneGetPage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const p = t.get.iphone;
  const hasAppStore = linkOrNull(APP_STORE_URL) !== null;

  return (
    <>
      <SiteHeader locale={locale} path="/get/iphone" />
      <main id="main" className="page pt-10 md:pt-16">
        <div className="grid-12">
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-xl md:text-2xl">{p.title}</h1>
            <p className="mt-4 max-w-text text-lg text-ink-muted">{p.intro}</p>

            <section aria-labelledby="steps-title" className="mt-10">
              <h2 id="steps-title" className="text-lg">
                {p.stepsTitle}
              </h2>
              <ol className="mt-4 border-b border-rule">
                {p.steps.map((step, i) => (
                  <li key={i} className="flex gap-4 border-t border-rule py-4 text-lg">
                    <span aria-hidden="true" className="tnum font-strong text-teal">
                      {i + 1}
                    </span>
                    <span>
                      {step}
                      {i === 1 && (
                        <span className="ml-2 text-teal">
                          <ShareIcon label={p.shareIconLabel} />
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <MaybeLink
                  href={linkOrNull(WEB_APP_URL)}
                  comingSoonLabel={t.common.comingSoon}
                  className="btn btn-primary"
                  comingSoonClassName="btn btn-off"
                >
                  {t.common.openWebApp}
                </MaybeLink>
              </div>
            </section>

            {hasAppStore && (
              <section aria-labelledby="appstore-title" className="mt-10">
                <h2 id="appstore-title" className="text-lg">
                  {p.appStoreTitle}
                </h2>
                <div className="mt-4">
                  <StoreButtons locale={locale} stores={["appstore"]} />
                </div>
              </section>
            )}

            <p className="mt-10">
              <Link href={localePath(locale)} className="link">
                {t.common.backHome}
              </Link>
            </p>
          </div>
        </div>
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
