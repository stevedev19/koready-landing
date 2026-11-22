import { PRIVACY_URL, SUPPORT_EMAIL_PLACEHOLDER, linkOrNull, supportMailto } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const f = t.footer;
  const mailto = supportMailto();

  return (
    <footer className="mt-20 border-t border-border">
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-10 text-sm text-fg-muted md:grid-cols-3">
        <nav aria-label={f.privacy + " / " + f.support}>
          <ul className="space-y-1">
            <li>
              <MaybeLink
                href={linkOrNull(PRIVACY_URL)}
                comingSoonLabel={t.common.comingSoon}
                className="tap-link font-semibold text-fg"
                comingSoonClassName="inline-flex min-h-12 items-center font-semibold"
              >
                {f.privacy}
              </MaybeLink>
            </li>
            <li>
              {mailto ? (
                <a href={mailto} className="tap-link font-semibold text-fg">
                  {f.support}: {SUPPORT_EMAIL_PLACEHOLDER}
                </a>
              ) : (
                <span className="inline-flex min-h-12 items-center font-semibold" aria-disabled="true">
                  {f.support}
                  <span className="pill ml-1 text-xs">{t.common.comingSoon}</span>
                </span>
              )}
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold text-fg">{f.credits}</h2>
          <ul className="mt-2 space-y-2">
            <li>{f.creditsFont}</li>
            <li>
              {f.creditsWeather}{" "}
              <a href="https://open-meteo.com/" className="underline underline-offset-2" rel="noopener">
                Open-Meteo.com
              </a>{" "}
              (
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                className="underline underline-offset-2"
                rel="noopener"
              >
                CC BY 4.0
              </a>
              )
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <p>{f.noCookies}</p>
          <p>{f.notAffiliated}</p>
        </div>
      </div>
    </footer>
  );
}
