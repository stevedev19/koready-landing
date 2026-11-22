import type { ReactNode } from "react";
import { TESTER_GROUP_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  AlertExample,
  ExampleFrame,
  HelpExample,
  PhraseExample,
  ScamExample,
} from "@/components/home/Examples";
import { getMessages } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/locales";

/* Layout follows DESIGN.md: 12-column grid, left-aligned, varied rhythm. */

function Row({
  kicker,
  title,
  body,
  textCols,
  example,
  exampleCols,
  after,
}: {
  kicker: string;
  title: string;
  body: string;
  textCols: string;
  example: ReactNode;
  exampleCols: string;
  after?: ReactNode;
}) {
  return (
    <div className="grid-12 gap-y-10">
      <div className={`col-span-12 md:row-start-1 ${textCols}`}>
        <p className="text-sm font-strong text-teal">{kicker}</p>
        <h3 className="mt-2 text-xl">{title}</h3>
        <p className="mt-4 text-lg text-ink-muted">{body}</p>
        {after}
      </div>
      <div className={`col-span-12 md:row-start-1 ${exampleCols}`}>{example}</div>
    </div>
  );
}

export function HomePage({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const h = t.home;
  const r = h.rows;
  const webApp = linkOrNull(WEB_APP_URL);
  const testerUrl = linkOrNull(TESTER_GROUP_URL);

  return (
    <>
      <SiteHeader locale={locale} />

      <main id="main">
        {/* 1. Hero: text 1–6, live example 7–12 bleeding right */}
        <section className="page pb-16 pt-10 md:pb-24 md:pt-16">
          <div className="grid-12 items-center gap-y-10">
            <div className="col-span-12 md:col-span-6">
              <p className="text-sm text-ink-muted">{h.hero.eyebrow}</p>
              <h1 className="mt-4 text-xl md:text-2xl">{h.hero.title}</h1>
              <p className="mt-6 max-w-text text-lg text-ink-muted">{h.hero.body}</p>
              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2">
                {/* Plain <a>: /get decides on click; <Link> would prefetch it. */}
                <a href={localePath(locale, "/get")} className="btn btn-primary">
                  {h.hero.primary}
                </a>
                <span className="text-ink-muted">
                  {h.hero.webAppLead}{" "}
                  {webApp ? (
                    <a href={webApp} className="link" rel="noopener">
                      {h.hero.webApp}
                    </a>
                  ) : (
                    <span className="inline-flex min-h-12 items-center gap-2" aria-disabled="true">
                      {h.hero.webApp}
                      <span className="pill">{t.common.comingSoon}</span>
                    </span>
                  )}
                </span>
              </div>
              <p className="mt-4 text-sm text-ink-muted">{h.hero.noAccount}</p>
            </div>

            <figure className="bleed-right col-span-12 md:col-span-6">
              <div className="example">
                <div className="bleed-safe p-6 md:p-10">
                  <figcaption className="label">{h.heroExample.caption}</figcaption>
                  <p lang="en" className="mt-4 text-lg text-ink-muted">
                    {h.heroExample.en}
                  </p>
                  <p lang="ko" className="ko-reveal mt-4 text-2xl font-strong md:text-3xl">
                    {h.heroExample.ko}
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </section>

        {/* 2. What you can do: four rows, alternating sides, varied widths */}
        <section aria-labelledby="rows-title" className="page section">
          <h2 id="rows-title" className="text-xl">
            {r.title}
          </h2>
          <div className="mt-16 space-y-24">
            <Row
              kicker={r.say.kicker}
              title={r.say.title}
              body={r.say.body}
              textCols="md:col-span-5"
              exampleCols="md:col-start-7 md:col-span-6"
              example={
                <ExampleFrame id="say" side="right" label={r.say.exampleLabel} exampleWord={t.common.example}>
                  <PhraseExample t={r.say} />
                </ExampleFrame>
              }
            />
            <Row
              kicker={r.check.kicker}
              title={r.check.title}
              body={r.check.body}
              textCols="md:col-start-9 md:col-span-4 md:self-center"
              exampleCols="md:col-start-1 md:col-span-7"
              example={
                <ExampleFrame id="check" side="left" label={r.check.exampleLabel} exampleWord={t.common.example}>
                  <ScamExample t={r.check} />
                </ExampleFrame>
              }
            />
            <Row
              kicker={r.alert.kicker}
              title={r.alert.title}
              body={r.alert.body}
              textCols="md:col-span-4"
              exampleCols="md:col-start-6 md:col-span-7"
              after={<p className="mt-6 text-sm text-ink-muted">{r.alert.also}</p>}
              example={
                <ExampleFrame id="alert" side="right" label={r.alert.exampleLabel} exampleWord={t.common.example}>
                  <AlertExample t={r.alert} />
                </ExampleFrame>
              }
            />
            <Row
              kicker={r.help.kicker}
              title={r.help.title}
              body={r.help.body}
              textCols="md:col-start-8 md:col-span-5 md:self-end"
              exampleCols="md:col-start-1 md:col-span-6"
              example={
                <ExampleFrame id="help" side="left" label={r.help.exampleLabel} exampleWord={t.common.example}>
                  <HelpExample t={r.help} />
                </ExampleFrame>
              }
            />
          </div>
        </section>

        {/* 3. What it won't do: plain list on a tinted band */}
        <section aria-labelledby="wont-title" className="mt-16 bg-sheet-sunk md:mt-24">
          <div className="page section">
            <div className="grid-12">
              <div className="col-span-12 md:col-span-8">
                <h2 id="wont-title" className="text-xl">
                  {h.wont.title}
                </h2>
                <ul className="mt-6">
                  {h.wont.items.map((item, i) => (
                    <li key={i} className="flex gap-4 border-b border-rule py-4 text-lg last:border-b-0">
                      <span aria-hidden="true" className="text-ink-muted">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How it works: heading left, three numbered lines right */}
        <section aria-labelledby="how-title" className="page section">
          <div className="grid-12 gap-y-6">
            <h2 id="how-title" className="col-span-12 text-xl md:col-span-4">
              {h.how.title}
            </h2>
            <ol className="col-span-12 md:col-span-8">
              {h.how.steps.map((step, i) => (
                <li key={i} className="flex gap-4 border-t border-rule py-4 text-lg first:border-t-0 first:pt-0">
                  <span aria-hidden="true" className="tnum font-strong text-teal">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5. FAQ: disclosure list with hairlines */}
        <section aria-labelledby="faq-title" className="page section">
          <div className="grid-12">
            <div className="col-span-12 md:col-span-8">
              <h2 id="faq-title" className="text-xl">
                {h.faq.title}
              </h2>
              <div className="mt-6 border-b border-rule">
                {h.faq.items.map((item) => (
                  <details key={item.id} className="group border-t border-rule">
                    <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-4 text-lg font-strong [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="tnum text-xl text-teal group-open:hidden"
                      >
                        +
                      </span>
                      <span aria-hidden="true" className="tnum hidden text-xl text-teal group-open:inline">
                        −
                      </span>
                    </summary>
                    <div className="max-w-text pb-6 text-base text-ink-muted">
                      <p>{item.a}</p>
                      {"link" in item && item.link && (
                        <a href={localePath(locale, "/get/iphone")} className="link">
                          {item.link}
                        </a>
                      )}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Android test, hidden while TESTER_GROUP_URL is empty */}
        {testerUrl && (
          <section aria-labelledby="tester-title" className="page pb-16">
            <div className="flex flex-col items-start gap-4 border-t border-rule pt-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 id="tester-title" className="text-lg">
                  {h.tester.title}
                </h2>
                <p className="mt-1 text-ink-muted">{h.tester.body}</p>
              </div>
              <a href={testerUrl} className="btn btn-quiet shrink-0" rel="noopener">
                {h.tester.button}
              </a>
            </div>
          </section>
        )}
      </main>

      <SiteFooter locale={locale} />
    </>
  );
}
