import type { Metadata } from "next";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";
import { LogoMark } from "@/components/LogoMark";
import { getMessages } from "@/i18n/messages";

const t = getMessages("en");

export const metadata: Metadata = {
  title: "Page not found · KoReady",
  robots: { index: false },
};

/* Same voice as the site: say what happened, show it in Korean, give one way out. */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <div className="site">
        <main id="main" className="page grid-12 pb-16 pt-16 md:pt-24">
          <div className="col-span-12 md:col-span-8">
            <LogoMark size={28} />
            <p className="label mt-10">404</p>
            <h1 className="mt-2 text-xl md:text-2xl">{t.notFound.title}</h1>
            <p lang="ko" className="mt-6 text-2xl font-strong md:text-3xl">
              {t.notFound.ko}
            </p>
            <p className="mt-6 text-lg text-ink-muted">{t.notFound.body}</p>
            <p className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="btn btn-primary">
                {t.notFound.home}
              </a>
              <a href="/ko" lang="ko" className="link">
                한국어 홈으로
              </a>
            </p>
          </div>
        </main>
        </div>
      </body>
    </html>
  );
}
