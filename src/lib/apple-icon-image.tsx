import { ImageResponse } from "next/og";
import { tokens } from "@/design/tokens";

const c = tokens.light;
const MARK_PATH =
  "M9 9.5h14a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-6.2L12 25v-3.5H9A2.5 2.5 0 0 1 6.5 19v-7A2.5 2.5 0 0 1 9 9.5Z";

/** Apple touch icon from the logo mark. TODO(owner): swap for the real logo. */
export function appleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: c.teal }}>
        <svg width="180" height="180" viewBox="4 4 24 24">
          <path d={MARK_PATH} fill={c.onTeal} />
        </svg>
      </div>
    ),
    { width: 180, height: 180 },
  );
}
