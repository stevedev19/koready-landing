import { APP_STORE_URL, GOOGLE_PLAY_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

type Props = {
  locale: Locale;
  stores?: ReadonlyArray<"play" | "appstore">;
};

/**
 * Plain, accessible text buttons for the app stores.
 *
 * TODO(store badges): once the Google Play and App Store listings are live,
 * replace these text buttons with the official badge artwork, downloaded
 * from the brand pages and used exactly as their guidelines require:
 *   - Google Play: https://partnermarketinghub.withgoogle.com/brands/google-play/
 *   - App Store:   https://developer.apple.com/app-store/marketing/guidelines/
 * Do NOT redraw, recolour or approximate either logo. Add each badge to
 * THIRD_PARTY_LICENSES.md with its source URL and date.
 */
export function StoreButtons({ locale, stores = ["play", "appstore"] }: Props) {
  const t = getMessages(locale);
  const items = {
    play: { href: linkOrNull(GOOGLE_PLAY_URL), label: t.common.googlePlay },
    appstore: { href: linkOrNull(APP_STORE_URL), label: t.common.appStore },
  };
  return (
    <ul className="flex flex-wrap gap-3" aria-label={t.get.desktop.storesTitle}>
      {stores.map((key) => (
        <li key={key}>
          <MaybeLink
            href={items[key].href}
            comingSoonLabel={t.common.comingSoon}
            className="btn btn-secondary"
            comingSoonClassName="btn btn-disabled"
          >
            {items[key].label}
          </MaybeLink>
        </li>
      ))}
    </ul>
  );
}
