# KoReady landing page

Marketing site for KoReady, an installable web app that helps foreigners in
Korea with language, scams, official help and daily life. The app itself lives
in a separate repository; this project only links to it.

This site is deliberately simple: no service worker, no PWA manifest, no
offline code, no cookies, no analytics, no third-party scripts.

## Requirements

- Node.js 22 (see `.nvmrc`; anything `>=20.9.0` works)
- npm

## Run locally

```bash
nvm use        # picks Node 22 from .nvmrc
npm install
npm run dev    # http://localhost:3000
```

## Checks

```bash
npm run typecheck
npm run lint
npm run build   # production build
npm start       # serve the production build
```

## Deploy to Vercel

1. Push this folder to a new GitHub repository.
2. In Vercel, choose **Add New → Project** and import that repository.
3. Keep the detected defaults (Framework: Next.js, Build: `next build`).
4. In **Settings → Build and Deployment**, set Node.js to 22.x.
5. Deploy. Every later push to `main` redeploys automatically.

Links to the app, the stores and the tester group are set in
`src/config/links.ts`.

## Before launch

- Fill the links in `src/config/links.ts`. Empty values show "Coming soon".
- In Vercel, set `NEXT_PUBLIC_SITE_URL` to the site's final public URL
  (for example a custom domain). It drives the canonical URL, sitemap,
  hreflang, Open Graph and the QR code. Without it, Vercel's production
  URL is used.
- Korean copy in `src/i18n/messages.ts` is a draft and needs native review.
- Replace the placeholder logo mark (`src/components/LogoMark.tsx`,
  `src/app/icon.svg`, `src/lib/brand-image.tsx`) with the real logo.
- Add real screenshots as WebP to `public/screens/` (see the README there).
