import { APP_STORE_URL, GOOGLE_PLAY_URL, linkOrNull } from "@/config/links";
import { MaybeLink } from "@/components/MaybeLink";
import { getMessages } from "@/i18n/messages";
import type { Locale } from "@/i18n/locales";

type Props = {
  locale: Locale;
  stores?: ReadonlyArray<"play" | "appstore">;
};

export function StoreButtons({ locale, stores = ["play", "appstore"] }: Props) {
  const t = getMessages(locale);
  const items = {
    play: { href: linkOrNull(GOOGLE_PLAY_URL), label: t.common.googlePlay },
    appstore: { href: linkOrNull(APP_STORE_URL), label: t.common.appStore },
  };
  return (
    <ul className="flex flex-wrap gap-3">
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
