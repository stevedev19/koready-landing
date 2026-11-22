import { ImageResponse } from "next/og";

const MARK_PATH =
  "M9 9.5h14a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-6.2L12 25v-3.5H9A2.5 2.5 0 0 1 6.5 19v-7A2.5 2.5 0 0 1 9 9.5Z";

/** Logo mark as an SVG element for ImageResponse. TODO(owner): swap for the real logo. */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="9" fill="#0f6e66" />
      <path d={MARK_PATH} fill="#ffffff" />
    </svg>
  );
}

/**
 * Open Graph / social card, generated at build time. Text is English only
 * because the built-in OG font has no Korean glyphs and no font files are
 * fetched from third parties.
 */
export function socialCard() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#f2f4f6",
          color: "#0f1b22",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <Mark size={120} />
          <div style={{ fontSize: 84, fontWeight: 800 }}>KoReady</div>
        </div>
        <div style={{ marginTop: 48, fontSize: 60, fontWeight: 700, color: "#0f6e66" }}>
          Understand Korea in your language
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

export function appleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0f6e66" }}>
        <svg width="180" height="180" viewBox="4 4 24 24">
          <path d={MARK_PATH} fill="#ffffff" />
        </svg>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
