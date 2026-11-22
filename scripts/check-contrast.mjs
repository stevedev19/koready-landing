// Checks WCAG contrast for every text/background token pair in
// src/app/globals.css, for light and dark themes. Exits 1 on failure.
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");

function tokens(block) {
  const out = {};
  for (const m of block.matchAll(/--([a-z-]+):\s*(#[0-9a-f]{6})/gi)) out[m[1]] = m[2];
  return out;
}
const light = tokens(css.slice(css.indexOf(":root {"), css.indexOf("@media (prefers-color-scheme: dark)")));
const darkStart = css.indexOf("@media (prefers-color-scheme: dark)");
const dark = { ...light, ...tokens(css.slice(darkStart, css.indexOf("@theme inline"))) };

const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

const pairs = [
  ["fg", "bg"], ["fg", "surface"], ["fg", "surface-muted"],
  ["fg-muted", "bg"], ["fg-muted", "surface"], ["fg-muted", "surface-muted"],
  ["accent", "bg"], ["accent", "surface"], ["accent-fg", "accent"],
  ["accent-soft-fg", "accent-soft"],
  ["danger", "surface"], ["danger", "bg"], ["danger-fg", "danger"],
  ["danger-soft-fg", "danger-soft"],
];

let failed = false;
for (const [name, t] of [["light", light], ["dark", dark]]) {
  for (const [f, b] of pairs) {
    const r = ratio(t[f], t[b]);
    const ok = r >= 4.5;
    if (!ok) failed = true;
    console.log(`${ok ? "ok  " : "FAIL"} ${name.padEnd(5)} ${f.padEnd(15)} on ${b.padEnd(14)} ${r.toFixed(2)}:1`);
  }
}
process.exit(failed ? 1 : 0);
