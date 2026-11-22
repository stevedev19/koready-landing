// 1. Checks WCAG contrast (>= 4.5:1) for every text/background token pair
//    in src/app/globals.css, light and dark.
// 2. Checks that src/design/tokens.ts mirrors globals.css exactly.
// Exits 1 on any failure.
import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/app/globals.css", import.meta.url), "utf8");
const ts = readFileSync(new URL("../src/design/tokens.ts", import.meta.url), "utf8");

function tokens(block) {
  const out = {};
  for (const m of block.matchAll(/--([a-z-]+):\s*(#[0-9a-f]{6})\b/gi)) out[m[1]] = m[2].toLowerCase();
  return out;
}
const darkStart = css.indexOf("@media (prefers-color-scheme: dark)");
const light = tokens(css.slice(css.indexOf(":root {"), css.indexOf("@media (min-width")));
const dark = { ...light, ...tokens(css.slice(darkStart, css.indexOf("@theme"))) };

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
  ["ink", "paper"], ["ink", "sheet"], ["ink", "sheet-sunk"],
  ["ink-muted", "paper"], ["ink-muted", "sheet"], ["ink-muted", "sheet-sunk"],
  ["teal", "paper"], ["teal", "sheet"], ["teal", "sheet-sunk"], ["on-teal", "teal"],
  ["ink", "teal-wash"], ["paper", "ink"],
  ["red", "paper"], ["red", "sheet"], ["on-red", "red"], ["ink", "red-wash"],
];

let failed = false;
for (const [name, t] of [["light", light], ["dark", dark]]) {
  for (const [f, b] of pairs) {
    if (!t[f] || !t[b]) { console.log(`FAIL missing token ${f} or ${b}`); failed = true; continue; }
    const r = ratio(t[f], t[b]);
    const ok = r >= 4.5;
    if (!ok) failed = true;
    console.log(`${ok ? "ok  " : "FAIL"} ${name.padEnd(5)} ${f.padEnd(10)} on ${b.padEnd(11)} ${r.toFixed(2)}:1`);
  }
}

// Mirror check: camelCase keys in tokens.ts -> kebab-case CSS tokens.
const kebab = (k) => k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
for (const [name, t] of [["light", light], ["dark", dark]]) {
  const line = ts.match(new RegExp(`${name}:\\s*\\{([^}]*)\\}`))?.[1] ?? "";
  for (const m of line.matchAll(/(\w+):\s*"(#[0-9a-f]{6})"/gi)) {
    const css = t[kebab(m[1])];
    if (css !== m[2].toLowerCase()) {
      failed = true;
      console.log(`FAIL tokens.ts ${name}.${m[1]} = ${m[2]} but globals.css has ${css}`);
    }
  }
}
console.log(failed ? "contrast/mirror check FAILED" : "contrast/mirror check passed");
process.exit(failed ? 1 : 0);
