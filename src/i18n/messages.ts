import type { Locale } from "./locales";

/**
 * All site copy, English and Korean, in one file.
 *
 * English is the source and the fallback: any key missing from `ko`
 * falls back to English automatically. Arrays are replaced whole.
 *
 * KOREAN NEEDS NATIVE REVIEW. Every Korean string below is a draft and
 * must be checked by a native speaker before launch.
 *
 * Copy rules live in DESIGN.md: concrete, plain, no hype words, no
 * exclamation marks, and every claim true of the app as it ships.
 *
 * UI-example labels (scam result names, help lines) must match the app.
 * They are marked CHECK-AGAINST-APP below.
 */
export const KO_NEEDS_NATIVE_REVIEW = true;

const en = {
  meta: {
    siteName: "KoReady",
    title: "KoReady: Understand Korea in your language",
    description:
      "Type what you need to say and see it in polite Korean. Check a suspicious text on your phone. Read emergency alerts in English. Find the right number to call. No account needed.",
  },
  common: {
    skipToContent: "Skip to content",
    comingSoon: "Coming soon",
    languageSwitch: "한국어",
    home: "KoReady home",
    backHome: "Back to the home page",
    useWebApp: "Open in your browser",
    openWebApp: "Open KoReady in Safari",
    googlePlay: "Google Play",
    appStore: "App Store",
    example: "Example",
  },
  home: {
    hero: {
      eyebrow: "For people living in or visiting Korea",
      title: "Understand Korea in your language",
      body: "Type what you need to say. KoReady writes it in polite Korean and shows it large enough to hand your phone across a counter.",
      primary: "Get the app",
      webAppLead: "or",
      webApp: "open it in your browser",
      noAccount: "No account needed.",
    },
    heroExample: {
      caption: "Example phrase",
      en: "Is there a pharmacy near here?",
      ko: "이 근처에 약국이 있어요?",
    },
    rows: {
      title: "What you can do",
      say: {
        kicker: "Say it",
        title: "Type in English, show it in Korean.",
        body: "Write what you need. KoReady turns it into polite Korean and shows it full screen, so the person in front of you can read it.",
        exampleLabel: "Example of a phrase result",
        input: "I’m allergic to peanuts.",
        output: "저는 땅콩 알레르기가 있어요.",
        fullScreen: "Show full screen",
      },
      check: {
        kicker: "Check a message",
        title: "Paste a text that feels wrong.",
        body: "The check runs on your phone and tells you what looks off. It never calls a message safe. When it finds nothing, it says exactly that.",
        exampleLabel: "Examples of the three scam-check results",
        // CHECK-AGAINST-APP: result names and wording.
        results: [
          {
            tone: "red",
            status: "Likely scam",
            message: "[Web발신] 택배 주소 불일치로 보관 중. 주소 확인: kr-parcel.example",
            why: "A delivery text with a link that is not the courier’s. Don’t tap it.",
          },
          {
            tone: "neutral",
            status: "Be careful",
            message: "엄마 폰 고장나서 임시 번호야. 급하게 돈 좀 보내줄 수 있어?",
            why: "A new number asking for money. Call the person on the number you already have.",
          },
          {
            tone: "neutral",
            status: "No warning signs found",
            message: "내일 오후 2시 진료 예약 확인 부탁드립니다.",
            why: "That is not the same as safe. If in doubt, contact the sender another way.",
          },
        ],
      },
      alert: {
        kicker: "Read an emergency text",
        title: "Know what the alert on your phone says.",
        body: "Korean emergency alerts are short and urgent. KoReady translates them on your phone, so you know whether to act.",
        exampleLabel: "Example of an emergency text translation",
        sourceLabel: "Alert in Korean",
        source:
          "[행정안전부] 오늘 15시 호우경보 발효. 하천변, 지하차도 등 위험지역 접근을 자제하고 안전에 유의하시기 바랍니다.",
        targetLabel: "In English",
        target:
          "[Ministry of the Interior and Safety] Heavy rain warning from 3 p.m. today. Stay away from riverbanks, underpasses and other risky areas, and take care.",
        also: "Also in the app: a reader for Korean letters and notices.",
      },
      help: {
        kicker: "Get help",
        title: "The right number, one tap away.",
        body: "Emergency numbers, interpreter and official help lines, and a quick way to find a doctor or pharmacy.",
        exampleLabel: "Example of the help screen",
        // CHECK-AGAINST-APP: numbers and labels shown in the app.
        lines: [
          { number: "112", label: "Police", tone: "red" },
          { number: "119", label: "Fire and ambulance", tone: "red" },
          { number: "1345", label: "Immigration contact centre, many languages", tone: "teal" },
        ],
        findCare: "Find a doctor or pharmacy",
      },
    },
    wont: {
      title: "What it won’t do",
      items: [
        "It won’t tell you a message is safe. The most it says is “No warning signs found”.",
        "It isn’t an emergency service. In an emergency, call 112 for police or 119 for fire and ambulance.",
        "It isn’t official. KoReady is not affiliated with any government agency; it points you to the official lines.",
        "Its Korean is written by an AI model and isn’t checked by a person. For contracts, medical or legal matters, use a qualified interpreter.",
      ],
    },
    how: {
      title: "How it works",
      steps: [
        "Open KoReady in your browser. No account, no sign-up.",
        "Add it to your Home Screen if you like. It opens like any other app.",
        "Pick what you need: say it, check it, read an alert or call for help.",
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
          a: "Partly. The scam check and the emergency text translator run on your phone. Turning your words into Korean needs an internet connection.",
        },
        {
          id: "emergency",
          q: "Does it replace emergency services?",
          a: "No. In an emergency, call 112 for police or 119 for fire and ambulance.",
        },
        {
          id: "languages",
          q: "Which languages does it support?",
          a: "English and Korean for now.",
        },
        {
          id: "iphone",
          q: "Can I use it on an iPhone?",
          a: "Yes. Open it in Safari, add it to your Home Screen, and use it from there.",
          link: "See the iPhone steps",
        },
      ],
    },
    tester: {
      title: "Have an Android phone?",
      body: "Try new versions before everyone else and tell us what to fix.",
      button: "Join the Android test",
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
  notFound: {
    title: "This page isn’t here",
    body: "The link may be old or mistyped.",
    ko: "페이지를 찾을 수 없어요.",
    home: "Go to the home page",
  },
  get: {
    iphone: {
      metaTitle: "Use KoReady on your iPhone",
      title: "Use KoReady on your iPhone",
      intro:
        "KoReady runs in Safari. Add it to your Home Screen once and it opens like any other app.",
      stepsTitle: "Add it to your Home Screen",
      steps: [
        "Open KoReady in Safari with the button below.",
        "Tap the Share button. On newer iOS versions, tap ••• first.",
        "Scroll down and tap “Add to Home Screen”.",
        "Tap “Add”. From now on, open KoReady from your Home Screen.",
      ],
      shareIconLabel: "Share button icon: a square with an arrow pointing up",
      appStoreTitle: "Prefer the App Store?",
    },
    desktop: {
      metaTitle: "Get KoReady",
      title: "Get KoReady",
      intro: "On your phone, or right here in your browser.",
      phoneTitle: "On your phone",
      phoneBody: "Point your phone camera at the code. It opens the right option for your phone.",
      qrLabel: "QR code linking to",
      orVisit: "Or type",
      browserTitle: "In this browser",
      browserBody: "Works in any current browser. No account needed.",
      storesTitle: "App stores",
      ipadNote: "On an iPad?",
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
      "하고 싶은 말을 입력하면 정중한 한국어로 보여 줍니다. 의심스러운 문자를 휴대폰에서 확인하고, 긴급재난문자를 영어로 읽고, 필요한 전화번호를 찾으세요. 계정이 필요 없습니다.",
  },
  common: {
    skipToContent: "본문으로 건너뛰기",
    comingSoon: "준비 중",
    languageSwitch: "English",
    home: "KoReady 홈",
    backHome: "홈으로 돌아가기",
    useWebApp: "브라우저에서 열기",
    openWebApp: "Safari에서 KoReady 열기",
    example: "예시",
  },
  home: {
    hero: {
      eyebrow: "한국에 살거나 여행하는 외국인을 위해",
      title: "한국을 내 언어로 이해하세요",
      body: "하고 싶은 말을 입력하세요. KoReady가 정중한 한국어로 바꿔, 휴대폰을 건네 보여 줄 수 있을 만큼 크게 띄워 줍니다.",
      primary: "앱 받기",
      webAppLead: "또는",
      webApp: "브라우저에서 열기",
      noAccount: "계정이 필요 없습니다.",
    },
    heroExample: {
      caption: "예시 문장",
    },
    rows: {
      title: "할 수 있는 일",
      say: {
        kicker: "말하기",
        title: "영어로 입력하고, 한국어로 보여 주세요.",
        body: "필요한 말을 쓰면 KoReady가 정중한 한국어로 바꿔 전체 화면으로 보여 줍니다. 앞에 있는 사람이 바로 읽을 수 있습니다.",
        exampleLabel: "문장 결과 예시",
        fullScreen: "전체 화면으로 보기",
      },
      check: {
        kicker: "메시지 확인",
        title: "이상한 문자를 붙여 넣어 보세요.",
        body: "확인은 휴대폰 안에서 이루어지며, 무엇이 이상한지 알려 줍니다. 절대 ‘안전하다’고 말하지 않습니다. 아무것도 찾지 못하면 그렇게만 말합니다.",
        exampleLabel: "사기 확인 결과 세 가지 예시",
        results: [
          {
            tone: "red",
            status: "사기 가능성 높음",
            message: "[Web발신] 택배 주소 불일치로 보관 중. 주소 확인: kr-parcel.example",
            why: "택배사 주소가 아닌 링크가 있는 배송 문자입니다. 누르지 마세요.",
          },
          {
            tone: "neutral",
            status: "주의",
            message: "엄마 폰 고장나서 임시 번호야. 급하게 돈 좀 보내줄 수 있어?",
            why: "새 번호로 돈을 요구합니다. 원래 알던 번호로 직접 전화해 보세요.",
          },
          {
            tone: "neutral",
            status: "위험 신호 없음",
            message: "내일 오후 2시 진료 예약 확인 부탁드립니다.",
            why: "안전하다는 뜻은 아닙니다. 의심되면 다른 방법으로 보낸 사람에게 확인하세요.",
          },
        ],
      },
      alert: {
        kicker: "긴급재난문자 읽기",
        title: "휴대폰에 온 경보가 무슨 뜻인지 알아 두세요.",
        body: "긴급재난문자는 짧고 급합니다. KoReady가 휴대폰 안에서 번역해 주므로 무엇을 해야 할지 알 수 있습니다.",
        exampleLabel: "긴급재난문자 번역 예시",
        sourceLabel: "한국어 원문",
        targetLabel: "영어 번역",
        also: "앱에는 한국어 우편물과 안내문을 읽어 주는 기능도 있습니다.",
      },
      help: {
        kicker: "도움 받기",
        title: "필요한 번호를 한 번에.",
        body: "긴급 번호, 통역 및 공식 상담 전화, 병원과 약국을 빠르게 찾는 방법을 제공합니다.",
        exampleLabel: "도움 화면 예시",
        lines: [
          { number: "112", label: "경찰", tone: "red" },
          { number: "119", label: "화재·구급", tone: "red" },
          { number: "1345", label: "외국인종합안내센터, 다국어 상담", tone: "teal" },
        ],
        findCare: "병원·약국 찾기",
      },
    },
    wont: {
      title: "KoReady가 하지 않는 일",
      items: [
        "메시지가 안전하다고 말하지 않습니다. 가장 긍정적인 결과도 ‘위험 신호 없음’입니다.",
        "긴급 서비스가 아닙니다. 긴급 상황에서는 경찰 112, 화재·구급 119에 전화하세요.",
        "공식 서비스가 아닙니다. 어떤 정부 기관과도 관련이 없으며, 공식 전화번호를 안내할 뿐입니다.",
        "한국어 문장은 AI 모델이 작성하며 사람이 검토하지 않습니다. 계약, 의료, 법률 문제에는 자격 있는 통역사를 이용하세요.",
        "이 웹사이트의 한국어는 아직 원어민 검토 중인 초안입니다.",
      ],
    },
    how: {
      title: "사용 방법",
      steps: [
        "브라우저에서 KoReady를 엽니다. 계정도, 가입도 필요 없습니다.",
        "원하면 홈 화면에 추가하세요. 다른 앱처럼 열립니다.",
        "필요한 기능을 고르세요: 말하기, 확인하기, 경보 읽기, 도움 요청.",
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
          a: "일부만 됩니다. 사기 확인과 긴급재난문자 번역은 휴대폰 안에서 실행됩니다. 입력한 말을 한국어로 바꾸려면 인터넷 연결이 필요합니다.",
        },
        {
          id: "emergency",
          q: "긴급 서비스를 대신하나요?",
          a: "아니요. 긴급 상황에서는 경찰 112, 화재·구급 119에 전화하세요.",
        },
        {
          id: "languages",
          q: "어떤 언어를 지원하나요?",
          a: "현재는 영어와 한국어를 지원합니다.",
        },
        {
          id: "iphone",
          q: "iPhone에서도 쓸 수 있나요?",
          a: "네. Safari에서 열어 홈 화면에 추가한 뒤, 홈 화면에서 사용하세요.",
          link: "iPhone 안내 보기",
        },
      ],
    },
    tester: {
      title: "Android 휴대폰을 쓰시나요?",
      body: "새 버전을 먼저 써 보고 고칠 점을 알려 주세요.",
      button: "Android 테스트 참여하기",
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
      intro: "KoReady는 Safari에서 실행됩니다. 홈 화면에 한 번 추가하면 다른 앱처럼 열 수 있습니다.",
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
      intro: "휴대폰에서, 또는 지금 이 브라우저에서.",
      phoneTitle: "휴대폰에서",
      phoneBody: "휴대폰 카메라로 코드를 비추세요. 휴대폰에 맞는 방법이 열립니다.",
      qrLabel: "다음 주소로 연결되는 QR 코드:",
      orVisit: "또는 직접 입력",
      browserTitle: "이 브라우저에서",
      browserBody: "최신 브라우저라면 어디서나 작동합니다. 계정이 필요 없습니다.",
      storesTitle: "앱 스토어",
      ipadNote: "iPad를 쓰시나요?",
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
