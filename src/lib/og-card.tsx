import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { tokens } from "@/design/tokens";

const c = tokens.light;

const MARK_PATH =
  "M9 9.5h14a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-6.2L12 25v-3.5H9A2.5 2.5 0 0 1 6.5 19v-7A2.5 2.5 0 0 1 9 9.5Z";

/** Logo mark for generated images. TODO(owner): swap for the real logo. */
function Mark({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <rect width="32" height="32" rx="8" fill={c.teal} />
      <path d={MARK_PATH} fill={c.onTeal} />
    </svg>
  );
}

/**
 * Pretendard static OTF from the same OFL package as the site font
 * (the image renderer cannot read variable WOFF2). Read once at module
 * load, as the Next docs recommend, so the image stays statically
 * generated; nothing is fetched from the network.
 */
const fontDir = join(process.cwd(), "node_modules/pretendard/dist/public/static");
const [regular, semibold] = await Promise.all([
  readFile(join(fontDir, "Pretendard-Regular.otf")),
  readFile(join(fontDir, "Pretendard-SemiBold.otf")),
]);

/**
 * Social card built from DESIGN.md: warm paper, a 2px ink sign bar, the
 * hero phrase with Hangul as the main graphic, one teal mark.
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
          padding: "64px 80px",
          background: c.paper,
          color: c.ink,
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <Mark size={48} />
          <div style={{ fontSize: 36, fontWeight: 600 }}>KoReady</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto" }}>
          <div style={{ display: "flex", borderTop: `2px solid ${c.ink}`, paddingTop: 24, fontSize: 28, color: c.inkMuted }}>
            Is there a pharmacy near here?
          </div>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 600, lineHeight: 1.15, marginTop: 16, wordBreak: "keep-all" }}>
            이 근처에 약국이 있어요?
          </div>
          <div style={{ display: "flex", marginTop: 40, fontSize: 28, color: c.teal, fontWeight: 600 }}>
            Understand Korea in your language
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Pretendard", data: regular, weight: 400, style: "normal" },
        { name: "Pretendard", data: semibold, weight: 600, style: "normal" },
      ],
    },
  );
}
