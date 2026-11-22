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
  home: {
    hero: {
      eyebrow: "For foreigners in Korea",
      title: "Understand Korea in your language",
      body: "Say what you need in natural Korean, check messages that look wrong, and reach the right help. All in one app that installs from your browser.",
      primary: "Get the app",
      secondary: "Use the web app",
    },
    demo: {
      label: "Example: turning an English sentence into Korean",
      inputLabel: "You type",
      input: "Where is the nearest pharmacy?",
      outputLabel: "KoReady shows",
      output: "가장 가까운 약국이 어디예요?",
      note: "Shown big so the other person can read it.",
    },
    features: {
      title: "What KoReady does",
      items: [
        {
          id: "say",
          title: "Say it",
          body: "Type in your language and get natural Korean. Show it big on your screen so the other person can read it.",
        },
        {
          id: "check",
          title: "Check it",
          body: "A scam checker and a translator for Korean emergency texts, both running on your phone. Plus a letter reader for Korean mail and notices.",
        },
        {
          id: "help",
          title: "Get help",
          body: "SOS numbers, interpreter and official help lines, and a quick way to find a doctor or pharmacy.",
        },
        {
          id: "discover",
          title: "Discover",
          body: "Useful places nearby and the everyday apps people in Korea rely on.",
        },
      ],
      sos: "SOS",
    },
    screens: {
      title: "A look inside",
      placeholder: "Screenshot coming soon",
      items: [
        { id: "say", alt: "KoReady Say it screen" },
        { id: "check", alt: "KoReady Check it screen" },
        { id: "help", alt: "KoReady Get help screen" },
      ],
    },
    trust: {
      title: "Built to be careful",
      items: [
        "No account needed.",
        "Scam and alert checks run on your phone.",
        "The scam checker never says “safe”. It shows warning signs and points you to official numbers.",
        "Not a replacement for emergency services. In an emergency, call 112 (police) or 119 (fire and ambulance).",
      ],
    },
    how: {
      title: "How it works",
      steps: [
        {
          title: "Open KoReady",
          body: "Use it in your browser, or add it to your Home Screen so it opens like an app.",
        },
        {
          title: "Pick what you need",
          body: "Say something, check a message, get help or discover what’s nearby.",
        },
        {
          title: "Show it or call",
          body: "Show the Korean on your screen, or tap straight through to the right number.",
        },
      ],
    },
    faq: {
      title: "Questions",
      items: [
        {
          id: "free",
          q: "Is it free?",
          a: "Yes. KoReady is free to use, and you don’t need an account.",
        },
        {
          id: "offline",
          q: "Does it work offline?",
          a: "Partly. The scam checker and the emergency text translator run on your phone. Features that look things up, like turning your words into Korean, need an internet connection.",
        },
        {
          id: "emergency",
          q: "Does it replace emergency services?",
          a: "No. KoReady helps you understand and reach help, but it is not an emergency service. In an emergency, call 112 for police or 119 for fire and ambulance.",
        },
        {
          id: "languages",
          q: "Which languages does it support?",
          a: "English and Korean for now.",
        },
        {
          id: "iphone",
          q: "Can I use it on an iPhone?",
          a: "Yes. Open it in Safari and add it to your Home Screen, then use it from there.",
          link: "See the iPhone steps",
        },
      ],
    },
    tester: {
      title: "Help us test on Android",
      body: "Try new versions early and tell us what to fix.",
      button: "Join the Android test",
    },
    finalCta: {
      title: "Ready when you are",
      body: "Open it in your browser now, or install it on your phone.",
    },
  },
  footer: {
    privacy: "Privacy policy",
    support: "Support",
    credits: "Credits",
    creditsFont: "Pretendard typeface by Kil Hyung-jin, SIL Open Font License 1.1.",
    creditsWeather: "Weather data in the app:",
    noCookies: "This website uses no cookies or trackers.",
    notAffiliated: "Not affiliated with any government agency.",
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
  home: {
    hero: {
      eyebrow: "한국에 사는 외국인을 위해",
      title: "한국을 내 언어로 이해하세요",
      body: "필요한 말을 자연스러운 한국어로 전하고, 수상한 메시지를 확인하고, 알맞은 도움을 받으세요. 브라우저에서 설치하는 앱 하나로 모두 할 수 있습니다.",
      primary: "앱 받기",
      secondary: "웹 앱 사용하기",
    },
    demo: {
      label: "예시: 영어 문장을 한국어로 바꾸기",
      inputLabel: "입력",
      outputLabel: "KoReady 화면",
      note: "상대방이 읽을 수 있도록 크게 보여 줍니다.",
    },
    features: {
      title: "KoReady로 할 수 있는 일",
      items: [
        {
          id: "say",
          title: "말하기",
          body: "내 언어로 입력하면 자연스러운 한국어로 바꿔 줍니다. 상대방이 읽을 수 있도록 화면에 크게 보여 주세요.",
        },
        {
          id: "check",
          title: "확인하기",
          body: "사기 메시지 확인과 한국어 긴급 문자 번역이 휴대폰 안에서 실행됩니다. 한국어 우편물과 안내문을 읽어 주는 기능도 있습니다.",
        },
        {
          id: "help",
          title: "도움 받기",
          body: "긴급 번호, 통역 및 공식 상담 전화, 병원과 약국을 빠르게 찾는 방법을 제공합니다.",
        },
        {
          id: "discover",
          title: "둘러보기",
          body: "가까운 유용한 장소와 한국 생활에 꼭 필요한 앱을 소개합니다.",
        },
      ],
      sos: "SOS",
    },
    screens: {
      title: "앱 미리 보기",
      placeholder: "스크린샷 준비 중",
      items: [
        { id: "say", alt: "KoReady 말하기 화면" },
        { id: "check", alt: "KoReady 확인하기 화면" },
        { id: "help", alt: "KoReady 도움 받기 화면" },
      ],
    },
    trust: {
      title: "신중하게 만들었습니다",
      items: [
        "계정이 필요 없습니다.",
        "사기 및 경보 확인은 휴대폰 안에서 실행됩니다.",
        "사기 확인 기능은 절대 ‘안전하다’고 말하지 않습니다. 위험 신호를 보여 주고 공식 번호를 안내합니다.",
        "긴급 서비스를 대신하지 않습니다. 긴급 상황에서는 112(경찰) 또는 119(화재·구급)에 전화하세요.",
      ],
    },
    how: {
      title: "사용 방법",
      steps: [
        {
          title: "KoReady 열기",
          body: "브라우저에서 사용하거나, 홈 화면에 추가해 앱처럼 여세요.",
        },
        {
          title: "필요한 기능 고르기",
          body: "말하기, 메시지 확인, 도움 받기, 주변 둘러보기 중에서 고르세요.",
        },
        {
          title: "보여 주거나 전화하기",
          body: "화면의 한국어를 보여 주거나, 알맞은 번호로 바로 전화하세요.",
        },
      ],
    },
    faq: {
      title: "자주 묻는 질문",
      items: [
        {
          id: "free",
          q: "무료인가요?",
          a: "네. KoReady는 무료이며 계정이 필요 없습니다.",
        },
        {
          id: "offline",
          q: "오프라인에서도 작동하나요?",
          a: "일부 기능만 가능합니다. 사기 확인과 긴급 문자 번역은 휴대폰 안에서 실행됩니다. 입력한 말을 한국어로 바꾸는 것처럼 정보를 찾아오는 기능은 인터넷 연결이 필요합니다.",
        },
        {
          id: "emergency",
          q: "긴급 서비스를 대신하나요?",
          a: "아니요. KoReady는 상황을 이해하고 도움을 요청하도록 돕지만 긴급 서비스가 아닙니다. 긴급 상황에서는 경찰 112, 화재·구급 119에 전화하세요.",
        },
        {
          id: "languages",
          q: "어떤 언어를 지원하나요?",
          a: "현재는 영어와 한국어를 지원합니다.",
        },
        {
          id: "iphone",
          q: "iPhone에서도 쓸 수 있나요?",
          a: "네. Safari에서 열어 홈 화면에 추가한 뒤 홈 화면에서 사용하세요.",
          link: "iPhone 안내 보기",
        },
      ],
    },
    tester: {
      title: "Android 테스트에 참여하세요",
      body: "새 버전을 먼저 써 보고 고칠 점을 알려 주세요.",
      button: "Android 테스트 참여하기",
    },
    finalCta: {
      title: "준비되면 언제든지",
      body: "지금 브라우저에서 열거나 휴대폰에 설치하세요.",
    },
  },
  footer: {
    privacy: "개인정보 처리방침",
    support: "고객 지원",
    credits: "출처",
    creditsFont: "Pretendard 글꼴: 길형진, SIL Open Font License 1.1.",
    creditsWeather: "앱의 날씨 데이터:",
    noCookies: "이 웹사이트는 쿠키나 추적 도구를 사용하지 않습니다.",
    notAffiliated: "어떤 정부 기관과도 관련이 없습니다.",
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
