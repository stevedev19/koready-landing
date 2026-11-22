# KoReady landing — design

This document is the source of truth for how the landing page looks and
sounds. Tokens named here live in `src/app/globals.css` and nowhere else.

## Concept

**A well-made phrasebook crossed with public signage.**

A phrasebook is calm and exact: one phrase, one translation, set so you can
point at it. Signage is legible from across a room, uses one colour for
"go" and one for "stop", and never decorates. KoReady's page borrows both:

- **Hangul set large is the main graphic element.** The biggest thing on the
  page is a Korean sentence a visitor might actually need, not a slogan.
- **Calm.** Warm paper background, near-black ink, generous space, hairline
  rules instead of boxes where a box adds nothing.
- **Exact.** Every example is a concrete sentence or message. Every claim is
  something the app does today.
- **Trustworthy.** We say what it won't do as plainly as what it does.

What it is not: a SaaS landing page. No gradients, no glow, no floating
phones, no grid of icon cards, no social proof.

## Type

Pretendard Variable only (self-hosted, OFL). The OG image uses static
Pretendard OTF from the same package because the image renderer cannot read
variable WOFF2.

### Scale

| Token | Size | Line height | Use |
| --- | --- | --- | --- |
| `--text-xs` | 12px | 16px (1.33) | Labels on UI examples, captions |
| `--text-sm` | 14px | 20px (1.43) | Secondary text, footer, meta |
| `--text-base` | 16px | 24px (1.5) | Body |
| `--text-lg` | 20px | 28px (1.4) | Lead paragraphs, row sentences |
| `--text-xl` | 28px | 36px (1.29) | Section headings, Korean in UI examples |
| `--text-2xl` | 44px | 52px (1.18) | Page headline (desktop) |
| `--text-3xl` | 72px | 80px (1.11) | Hero Hangul (desktop) |

On small screens the hero Hangul drops to `--text-2xl` and the headline to
`--text-xl`. Nothing else changes size by breakpoint.

### Rules

- **Two weights per context, at most:** 400 (regular) and 650 (heading /
  emphasis). Hero Hangul uses 650. No light, no black.
- **Korean is set larger than the English around it.** Inline Korean inside
  English steps up by `--ko-scale` (1.125em). Whole-Korean pages use a 17px
  root. Korean blocks that are themselves the subject (the hero phrase, UI
  examples) use their own scale step.
- `word-break: keep-all` for Korean, so lines break between words.
- `text-wrap: balance` for headings; `text-wrap: pretty` for paragraphs.
- Tabular numerals (`font-variant-numeric: tabular-nums`) for phone numbers,
  times and step numbers.
- Sentence case everywhere. No all-caps paragraphs; small labels may use
  `--text-xs` with 0.04em tracking, still sentence case.
- Measure: body copy max 60ch.

## Colour

One accent. Red means danger and nothing else.

| Role | Light | Dark |
| --- | --- | --- |
| `--paper` (page) | `#f6f4ef` warm off-white | `#151412` |
| `--sheet` (raised UI, examples) | `#fffefb` | `#1e1c1a` |
| `--sheet-sunk` (inputs, wells) | `#eeebe4` | `#272523` |
| `--ink` (text) | `#1b1a17` | `#f2efe9` |
| `--ink-muted` (secondary text) | `#5a564e` | `#aba59b` |
| `--rule` (hairlines) | `#dcd7cd` | `#353230` |
| `--teal` (actions, key marks) | `#0e6b63` | `#45cfbc` |
| `--on-teal` | `#ffffff` | `#06231f` |
| `--teal-wash` (selection, subtle mark) | `#d6ebe7` | `#173a36` |
| `--red` (emergency, "Likely scam") | `#b3261e` | `#ff8a80` |
| `--on-red` | `#ffffff` | `#3a0603` |
| `--red-wash` | `#f9e3e0` | `#3b1714` |

Every text/background pair is ≥ 4.5:1, checked by
`npm run check:contrast`.

Banned: gradients, gradient text, glow, blurred blobs, glassmorphism,
coloured shadows, a second accent.

**Shadow:** one level, `--shadow-1`, used only on UI examples so they read as
"a piece of the app". Everything else is flat, separated by space or a
`--rule` hairline.

## Layout

- **Grid:** 12 columns, `--grid-max` 1200px, `--grid-gutter` 24px, page
  margin 16px (mobile) / 40px (≥768px). Content lines up to the grid;
  UI examples may bleed past the right edge of the grid and the viewport.
- **Hero:** left-aligned and asymmetric. Text spans columns 1–6; the Hangul
  example spans 7–12 and bleeds right. On mobile, text first, then the
  example, full width, bleeding right.
- **Rhythm varies.** Sections are not all centred and not all rows of cards:
  - Hero: split 6/6.
  - What you can do: four rows. Text 5 columns, example 7 columns,
    alternating sides; each example is a different shape (phrase card, a
    stack of three results, a two-part translation, a list of numbers).
  - What it won't do: a plain list on a full-width tinted band, text in
    columns 1–8.
  - How it works: three numbered lines, no boxes.
  - FAQ: a disclosure list with hairline rules, columns 1–8.
  - Footer: three columns of small text above a hairline.
- **Spacing scale (only these):** 4, 8, 12, 16, 24, 40, 64, 96px →
  Tailwind keys `1 2 3 4 6 10 16 24`. Plus `12` = 48px, reserved for tap
  target sizes, not for spacing.
- **Section spacing:** 96px between sections on desktop, 64px on mobile.

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | 8px | Inner wells, small tags inside UI examples |
| `--radius-md` | 14px | Buttons, inputs |
| `--radius-lg` | 20px | UI example panels, screenshot frames |
| `full` | 9999px | Status pills only |

## Imagery

The product itself, nothing else.

- **Real screenshots** go in `public/screens/` as WebP and are shown cropped,
  bleeding off the edge, never inside a device mockup.
- **Until then, rebuilt UI states** in HTML/CSS, built from these tokens:
  1. A phrase result: English input, big Korean output, a "Show full
     screen" control.
  2. The three scam-check result states: *Likely scam* (red), *Be careful*,
     *No warning signs found*. Never "safe".
  3. An emergency text translation: the Korean alert, then the translation.
  4. Help lines: 112, 119, and an interpreter/official line.
  Each is labelled "Example" so nobody mistakes it for a screenshot.
- **Screenshot placeholders:** flat `--sheet-sunk` rectangles with the exact
  aspect ratio (9:19.5) and a text label. No fake UI inside.
- Banned: stock photos, illustrations of people, emoji, 3D icons,
  icon-in-a-circle feature cards, floating device mockups.

## Motion

**One idea:** on first paint, the hero phrase shows in English, then the
Korean sentence wipes in beneath it, once (600ms, 300ms delay). After that,
nothing on the page moves by itself.

- `prefers-reduced-motion: reduce` → the Korean is shown immediately.
- The Korean occupies its space from the start (only `clip-path` and
  `opacity` animate), so there is no layout shift.
- No parallax, no scroll-triggered animation, no looping decoration.
  Hover/press feedback on controls is a colour change only.

## Copy

- Concrete and plain. Show an example instead of an adjective.
- Say who it is for once ("for people living in or visiting Korea"), then
  stop describing and start showing.
- Banned words: revolutionize, seamless, effortless, supercharge, unlock,
  empower, cutting-edge, all-in-one, AI-powered. No exclamation marks.
- AI is mentioned once, honestly, where it matters: the Korean phrases are
  written by an AI model and are not checked by a person.
- No statistics, testimonials, user counts, ratings or "trusted by".
- Every claim must be true of the app as it ships today. If unsure, leave it
  out and list it in the report.
- Korean copy is a draft until a native speaker reviews it, and the page
  says so where relevant.

## Structure

1. **Hero** — headline, one plain sentence, the animated Hangul example, one
   button ("Get the app"). The web app is a quiet text link, not a second
   button.
2. **What you can do** — four rows: Say it, Check a message, Read an
   emergency text, Get help. One plain sentence each, paired with a rebuilt
   UI state.
3. **What it won't do** — plain list: never says safe; not emergency
   services; not official; Korean written by AI, not checked by a person;
   this site's Korean still under native review.
4. **How it works** — three short numbered lines.
5. **FAQ** — disclosure list.
6. **Footer** — privacy, support, credits, no-cookies line, not affiliated.

## Details

- Focus ring: 3px `--teal`, 3px offset, on every interactive element.
- Tap targets ≥ 48px.
- Selection: `--teal-wash` background, `--ink` text.
- Favicon and OG image from the logo mark and the hero Hangul.
- 404 in the same voice.
- No layout shift; Lighthouse mobile ≥ 90.
