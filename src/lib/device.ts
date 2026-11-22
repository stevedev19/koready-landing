export type DeviceKind = "android" | "ios" | "desktop";

/**
 * Classifies a User-Agent string. Nothing is stored or logged.
 * iPadOS 13+ reports a desktop Mac user agent, so iPads land on the
 * desktop page, which links to the iPhone steps.
 */
export function detectDevice(userAgent: string | null | undefined): DeviceKind {
  const ua = userAgent ?? "";
  if (/iPhone|iPod|iPad/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}
