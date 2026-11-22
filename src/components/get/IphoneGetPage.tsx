import Link from "next/link";
import { APP_STORE_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
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
      <main id="main" className="mx-auto w-full max-w-xl px-5 pb-16 pt-6">
        <h1 className="text-3xl font-bold tracking-tight">{p.title}</h1>
        <p className="mt-3 text-fg-muted">{p.intro}</p>

        <section aria-labelledby="steps-title" className="card mt-8 p-6">
          <h2 id="steps-title" className="text-lg font-bold">
            {p.stepsTitle}
          </h2>
          <ol className="mt-4 space-y-4">
            {p.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft font-bold text-accent-soft-fg"
                >
                  {i + 1}
                </span>
                <span className="pt-1">
                  {step}
                  {i === 1 && (
                    <span className="ml-2 text-accent">
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
              className="btn btn-primary w-full"
              comingSoonClassName="btn btn-disabled w-full"
            >
              {t.common.openWebApp}
            </MaybeLink>
          </div>
        </section>

        {hasAppStore && (
          <section aria-labelledby="appstore-title" className="mt-8">
            <h2 id="appstore-title" className="text-lg font-bold">
              {p.appStoreTitle}
            </h2>
            <div className="mt-3">
              <StoreButtons locale={locale} stores={["appstore"]} />
            </div>
          </section>
        )}

        <p className="mt-10">
          <Link href={localePath(locale)} className="tap-link text-accent">
            {t.common.backHome}
          </Link>
        </p>
      </main>
    </>
  );
}
