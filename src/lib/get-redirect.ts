import { NextResponse, type NextRequest } from "next/server";
import { GOOGLE_PLAY_URL, WEB_APP_URL, linkOrNull } from "@/config/links";
import { localePath, type Locale } from "@/i18n/locales";
import { detectDevice } from "@/lib/device";

/**
 * Decides where "Get the app" goes. Runs only when someone follows a
 * /get link — never on page load. Reads the User-Agent header for this
 * one decision; stores nothing, sets no cookies and logs nothing.
 *
 *   Android -> Google Play if set, otherwise the web app
 *   iPhone  -> /get/iphone (Add to Home Screen steps)
 *   other   -> /get/desktop (both options + QR code)
 */
export function getRedirect(request: NextRequest, locale: Locale): NextResponse {
  const device = detectDevice(request.headers.get("user-agent"));

  let target: string;
  if (device === "android") {
    target =
      linkOrNull(GOOGLE_PLAY_URL) ??
      linkOrNull(WEB_APP_URL) ??
      localePath(locale, "/get/desktop");
  } else if (device === "ios") {
    target = localePath(locale, "/get/iphone");
  } else {
    target = localePath(locale, "/get/desktop");
  }

  const response = NextResponse.redirect(new URL(target, request.url), 307);
  // The answer depends on the device, so no shared cache may keep it.
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "User-Agent");
  return response;
}
