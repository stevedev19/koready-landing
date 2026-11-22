import { TESTER_GROUP_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { FeatureIcon } from "@/components/home/FeatureIcon";
import { Screenshot } from "@/components/home/Screenshot";
import { getMessages } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/locales";

function GetAppButton({ locale, label }: { locale: Locale; label: string }) {
  // Plain <a>, not <Link>: /get is a route handler that decides on click.
  // <Link> would prefetch it during page load.
  return (
    <a href={localePath(locale, "/get")} className="btn btn-primary px-6 text-base">
      {label}
    </a>
  );
}

function WebAppButton({ locale, label }: { locale: Locale; label: string }) {
  const t = getMessages(locale);
  return (
    <MaybeLink
      href={linkOrNull(WEB_APP_URL)}
      comingSoonLabel={t.common.comingSoon}
      className="btn btn-secondary px-6 text-base"
      comingSoonClassName="btn btn-disabled px-6 text-base"
    >
      {label}
    </MaybeLink>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const h = t.home;
  const testerUrl = linkOrNull(TESTER_GROUP_URL);

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="main">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-5xl items-center gap-10 px-5 pb-12 pt-6 md:grid-cols-[1.1fr_1fr] md:pt-12">
          <div>
            <p className="pill">{h.hero.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {h.hero.title}
            </h1>
            <p className="mt-4 max-w-prose text-lg text-fg-muted">{h.hero.body}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <GetAppButton locale={locale} label={h.hero.primary} />
              <WebAppButton locale={locale} label={h.hero.secondary} />
            </div>
          </div>

          {/* CSS demo of "Say it" — not a screenshot. */}
          <figure className="card p-5 sm:p-6" aria-label={h.demo.label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
              {h.demo.inputLabel}
            </p>
            <p
              lang="en"
              className="mt-2 rounded-[14px] bg-surface-muted px-4 py-3 text-base"
            >
              {h.demo.input}
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-fg-muted">
              {h.demo.outputLabel}
            </p>
            <p
              lang="ko"
              className="mt-2 rounded-[14px] bg-accent px-4 py-5 text-center font-bold leading-snug text-accent-fg"
              style={{ fontSize: "clamp(1.6rem, 6vw, 2.1rem)" }}
            >
              {h.demo.output}
            </p>
            <figcaption className="mt-3 text-sm text-fg-muted">{h.demo.note}</figcaption>
          </figure>
        </section>

        {/* Features */}
        <section aria-labelledby="features-title" className="mx-auto w-full max-w-5xl px-5 py-12">
          <h2 id="features-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {h.features.title}
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {h.features.items.map((item) => (
              <li key={item.id} className="card p-6">
                <div className="flex items-center gap-3">
                  <FeatureIcon id={item.id} />
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  {item.id === "help" && (
                    <span className="pill pill-danger ml-auto">{h.features.sos}</span>
                  )}
                </div>
                <p className="mt-3 text-fg-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Screenshots (real ones from /public/screens, placeholders until then) */}
        <section aria-labelledby="screens-title" className="mx-auto w-full max-w-5xl px-5 py-12">
          <h2 id="screens-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {h.screens.title}
          </h2>
          {/* Scrollable on small screens: focusable and named so keyboard users can scroll it. */}
          <div
            role="region"
            aria-labelledby="screens-title"
            tabIndex={0}
            className="-mx-5 mt-6 overflow-x-auto px-5 pb-4 sm:mx-0 sm:px-0"
          >
            <ul className="flex snap-x gap-4 sm:justify-center">
              {h.screens.items.map((s) => (
                <li key={s.id} className="shrink-0 snap-start">
                  <Screenshot id={s.id} alt={s.alt} placeholder={h.screens.placeholder} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Trust strip */}
        <section aria-labelledby="trust-title" className="bg-accent-soft">
          <div className="mx-auto w-full max-w-5xl px-5 py-12">
            <h2 id="trust-title" className="text-2xl font-bold tracking-tight text-accent-soft-fg sm:text-3xl">
              {h.trust.title}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {h.trust.items.map((item, i) => (
                <li key={i} className="card flex gap-3 p-5">
                  <svg
                    aria-hidden="true"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 shrink-0 text-accent"
                  >
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section aria-labelledby="how-title" className="mx-auto w-full max-w-5xl px-5 py-12">
          <h2 id="how-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {h.how.title}
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {h.how.steps.map((step, i) => (
              <li key={i} className="card p-6">
                <span
                  aria-hidden="true"
                  className="flex size-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-fg"
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-fg-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ: native <details>, keyboard and screen-reader friendly, no JS */}
        <section aria-labelledby="faq-title" className="mx-auto w-full max-w-3xl px-5 py-12">
          <h2 id="faq-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {h.faq.title}
          </h2>
          <div className="mt-6 space-y-3">
            {h.faq.items.map((item) => (
              <details key={item.id} className="card group px-5">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <svg
                    aria-hidden="true"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="shrink-0 text-fg-muted transition-transform group-open:rotate-180"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </summary>
                <div className="pb-5 text-fg-muted">
                  <p>{item.a}</p>
                  {"link" in item && item.link && (
                    <p className="mt-1">
                      <a href={localePath(locale, "/get/iphone")} className="tap-link font-semibold text-accent">
                        {item.link}
                      </a>
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Android test — hidden while TESTER_GROUP_URL is empty */}
        {testerUrl && (
          <section aria-labelledby="tester-title" className="mx-auto w-full max-w-3xl px-5 py-6">
            <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 id="tester-title" className="text-lg font-bold">
                  {h.tester.title}
                </h2>
                <p className="mt-1 text-fg-muted">{h.tester.body}</p>
              </div>
              <a href={testerUrl} className="btn btn-secondary shrink-0" rel="noopener">
                {h.tester.button}
              </a>
            </div>
          </section>
        )}

        {/* Final call to action */}
        <section aria-labelledby="final-title" className="mx-auto w-full max-w-3xl px-5 pt-12 text-center">
          <h2 id="final-title" className="text-2xl font-bold tracking-tight sm:text-3xl">
            {h.finalCta.title}
          </h2>
          <p className="mt-2 text-fg-muted">{h.finalCta.body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <GetAppButton locale={locale} label={h.hero.primary} />
            <WebAppButton locale={locale} label={h.hero.secondary} />
          </div>
        </section>
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
