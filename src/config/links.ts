/**
 * All outbound links in one place.
 *
 * Leave a value as "" until it is real. Empty values render an honest
 * "Coming soon" state in the UI, never a broken or placeholder link.
 */

/** The KoReady web app's current Vercel URL, e.g. "https://koready-app.vercel.app". No trailing slash. */
export const WEB_APP_URL = "";

/** Google Play listing. Empty until the listing is live. */
export const GOOGLE_PLAY_URL = "";

/** App Store listing. Empty until the listing is live. */
export const APP_STORE_URL = "";

/** Android closed-test group (Google Group or Play testing link). Empty hides the button. */
export const TESTER_GROUP_URL = "";

/** Support email address, e.g. "help@example.com". Empty shows "Coming soon". */
export const SUPPORT_EMAIL_PLACEHOLDER = "";

/**
 * The privacy policy lives in the app, not here, so the text is never
 * duplicated. Empty while WEB_APP_URL is empty.
 */
export const PRIVACY_URL = WEB_APP_URL ? `${WEB_APP_URL}/privacy` : "";

/**
 * This landing site's own public URL, used for the canonical URL, the
 * sitemap, Open Graph and the QR code. Set NEXT_PUBLIC_SITE_URL in Vercel
 * once a custom domain exists; otherwise Vercel's production URL is used.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/+$/, "");

/** Returns the URL if set, otherwise null. Use this before rendering any link. */
export function linkOrNull(url: string): string | null {
  const trimmed = url.trim();
  return trimmed.length > 0 ? trimmed : null;
}

/** "mailto:" link for the support address, or null while it is empty. */
export function supportMailto(): string | null {
  const email = linkOrNull(SUPPORT_EMAIL_PLACEHOLDER);
  return email ? `mailto:${email}` : null;
}
