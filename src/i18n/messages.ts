import type { Locale } from "./locales";

/**
 * All site copy, English and Korean, in one file.
 *
 * English is the source and the fallback: any key missing from `ko`
 * falls back to English automatically.
 *
 * KOREAN NEEDS NATIVE REVIEW. Every Korean string below is a draft and
 * must be checked by a native speaker before launch.
 */
export const KO_NEEDS_NATIVE_REVIEW = true;

const en = {
  meta: {
    siteName: "KoReady",
    title: "KoReady: Understand Korea in your language",
    description:
      "KoReady helps foreigners in Korea say things in natural Korean, check suspicious messages, reach official help and get through daily life. No account needed.",
  },
  common: {
    skipToContent: "Skip to content",
    comingSoon: "Coming soon",
    languageSwitch: "한국어",
    languageSwitchLabel: "이 페이지를 한국어로 보기 (View this page in Korean)",
    home: "KoReady home",
    backHome: "Back to home",
    useWebApp: "Use the web app",
    openWebApp: "Open KoReady",
    googlePlay: "Get it on Google Play",
    appStore: "Download on the App Store",
  },
  get: {
    iphone: {
      metaTitle: "Use KoReady on your iPhone",
      title: "Use KoReady on your iPhone",
      intro:
        "KoReady runs in your browser. Add it to your Home Screen once and it opens like any other app.",
      stepsTitle: "Add it to your Home Screen",
      steps: [
        "Open KoReady in Safari with the button below.",
        "Tap the Share button. On newer iOS versions, tap ••• first.",
        "Scroll down and tap “Add to Home Screen”.",
        "Tap “Add”. Open KoReady from your Home Screen from now on.",
      ],
      shareIconLabel: "Share button icon: a square with an arrow pointing up",
      appStoreTitle: "Prefer the App Store?",
    },
    desktop: {
      metaTitle: "Get KoReady",
      title: "Get KoReady",
      intro: "Use it on your phone, or right here in your browser.",
      phoneTitle: "On your phone",
      phoneBody: "Point your phone camera at the code. It opens the right option for your phone.",
      qrLabel: "QR code linking to",
      orVisit: "Or visit",
      browserTitle: "In this browser",
      browserBody: "KoReady works in any modern browser. No account needed.",
      storesTitle: "App stores",
      ipadNote: "Using an iPad?",
      ipadLink: "Follow the iPhone steps",
    },
  },
};

export type Messages = typeof en;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends readonly unknown[]
    ? T[K]
    : T[K] extends object
      ? DeepPartial<T[K]>
      : T[K];
};

/* KOREAN NEEDS NATIVE REVIEW — draft translations. */
const ko: DeepPartial<Messages> = {
  meta: {
    title: "KoReady: 한국을 내 언어로 이해하기",
    description:
      "KoReady는 한국에 사는 외국인이 자연스러운 한국어로 말하고, 의심스러운 메시지를 확인하고, 공식 도움을 받고, 일상생활을 해 나가도록 돕습니다. 계정이 필요 없습니다.",
  },
  common: {
    skipToContent: "본문으로 건너뛰기",
    comingSoon: "준비 중",
    languageSwitch: "English",
    languageSwitchLabel: "View this page in English (이 페이지를 영어로 보기)",
    home: "KoReady 홈",
    backHome: "홈으로 돌아가기",
    useWebApp: "웹 앱 사용하기",
    openWebApp: "KoReady 열기",
    googlePlay: "Google Play에서 받기",
    appStore: "App Store에서 다운로드",
  },
  get: {
    iphone: {
      metaTitle: "iPhone에서 KoReady 사용하기",
      title: "iPhone에서 KoReady 사용하기",
      intro:
        "KoReady는 브라우저에서 실행됩니다. 홈 화면에 한 번 추가하면 다른 앱처럼 열 수 있습니다.",
      stepsTitle: "홈 화면에 추가하기",
      steps: [
        "아래 버튼으로 Safari에서 KoReady를 엽니다.",
        "공유 버튼을 누릅니다. 최신 iOS에서는 먼저 •••을 누릅니다.",
        "아래로 스크롤해 ‘홈 화면에 추가’를 누릅니다.",
        "‘추가’를 누릅니다. 이제 홈 화면에서 KoReady를 여세요.",
      ],
      shareIconLabel: "공유 버튼 아이콘: 위쪽 화살표가 있는 네모",
      appStoreTitle: "App Store를 선호하시나요?",
    },
    desktop: {
      metaTitle: "KoReady 받기",
      title: "KoReady 받기",
      intro: "휴대폰에서 사용하거나, 지금 이 브라우저에서 바로 사용하세요.",
      phoneTitle: "휴대폰에서",
      phoneBody: "휴대폰 카메라로 코드를 비추세요. 휴대폰에 맞는 방법이 열립니다.",
      qrLabel: "다음 주소로 연결되는 QR 코드:",
      orVisit: "또는 다음 주소로 이동",
      browserTitle: "이 브라우저에서",
      browserBody: "KoReady는 최신 브라우저에서 모두 작동합니다. 계정이 필요 없습니다.",
      storesTitle: "앱 스토어",
      ipadNote: "iPad를 사용하시나요?",
      ipadLink: "iPhone 안내를 따라 하세요",
    },
  },
};

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override ?? base) as T;
  }
  const out: Record<string, unknown> = { ...base };
  for (const [key, value] of Object.entries(override)) {
    if (value === undefined) continue;
    out[key] = deepMerge((base as Record<string, unknown>)[key], value);
  }
  return out as T;
}

const ALL: Record<Locale, Messages> = {
  en,
  ko: deepMerge(en, ko),
};

/** Messages for a locale, with English filling any gaps. */
export function getMessages(locale: Locale): Messages {
  return ALL[locale];
}
