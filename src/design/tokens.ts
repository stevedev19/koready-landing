/**
 * Mirror of the colour tokens in src/app/globals.css, for places that
 * cannot read CSS variables: <meta name="theme-color">, generated images
 * (OG card, apple icon). scripts/check-contrast.mjs fails if these drift
 * from globals.css. Edit globals.css first, then this file.
 */
export const tokens = {
  light: { paper: "#f6f4ef", sheet: "#fffefb", ink: "#1b1a17", inkMuted: "#5a564e", rule: "#dcd7cd", teal: "#0e6b63", onTeal: "#ffffff" },
  dark: { paper: "#151412", sheet: "#1e1c1a", ink: "#f2efe9", inkMuted: "#aba59b", rule: "#353230", teal: "#45cfbc", onTeal: "#06231f" },
} as const;
