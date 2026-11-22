import { PRIVACY_URL, SUPPORT_EMAIL_PLACEHOLDER, linkOrNull, supportMailto } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const f = t.footer;
  const mailto = supportMailto();
  const offClass = "inline-flex min-h-12 items-center gap-2 text-ink";

  return (
    <footer className="mt-16 border-t border-rule md:mt-24">
      <div className="page grid-12 gap-y-6 py-10 text-sm text-ink-muted">
        <nav aria-label={`${f.privacy}, ${f.support}`} className="col-span-12 md:col-span-4">
          <ul>
            <li>
              <MaybeLink
                href={linkOrNull(PRIVACY_URL)}
                comingSoonLabel={t.common.comingSoon}
                className="link"
                comingSoonClassName={offClass}
              >
                {f.privacy}
              </MaybeLink>
            </li>
            <li>
              {mailto ? (
                <a href={mailto} className="link">
                  {f.support}: {SUPPORT_EMAIL_PLACEHOLDER}
                </a>
              ) : (
                <span className={offClass} aria-disabled="true">
                  {f.support}
                  <span className="pill">{t.common.comingSoon}</span>
                </span>
              )}
            </li>
          </ul>
        </nav>

        <div className="col-span-12 md:col-span-4">
          <h2 className="font-strong text-ink">{f.credits}</h2>
          <ul className="mt-2 space-y-2">
            <li>{f.creditsFont}</li>
            <li>
              {f.creditsWeather}{" "}
              <a href="https://open-meteo.com/" className="link-inline" rel="noopener">
                Open-Meteo.com
              </a>{" "}
              (
              <a href="https://creativecommons.org/licenses/by/4.0/" className="link-inline" rel="noopener">
                CC BY 4.0
              </a>
              )
            </li>
          </ul>
        </div>

        <div className="col-span-12 space-y-2 md:col-span-4">
          <p>{f.noCookies}</p>
          <p>{f.notAffiliated}</p>
        </div>
      </div>
    </footer>
  );
}
