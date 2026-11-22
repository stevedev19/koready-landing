import type { ReactNode } from "react";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

/** Shared <html>/<body> shell for the English and Korean root layouts. */
export function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getMessages(locale);
  return (
    <html lang={locale}>
      <body>
        <a
          href="#main"
          className="btn btn-primary sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10"
        >
          {t.common.skipToContent}
        </a>
        <div className="site">{children}</div>
      </body>
    </html>
  );
}
