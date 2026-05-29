# East Adelaide Capital Group — website

Marketing site for **East Adelaide Capital Group**, a diversified Australian
operating group across shelter, biotech and food.

Built with **Next.js (App Router) + TypeScript**, deployed to **Vercel**.

## Develop

```bash
npm install
cp .env.example .env.local   # fill in values (optional for most pages)
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build (runs the TypeScript checker)
npm run start   # serve the production build
npm run lint    # ESLint
```

## Architecture

- `app/` — routes (App Router). `layout.tsx` wires fonts (`next/font`), global
  metadata and the shared chrome; `globals.css` holds the `:root` design
  tokens, `chrome.css` the nav/curtain/cursor/footer, `sections.css` the
  page-section styles (all ported from the approved v1 design).
- `components/chrome/` — curtain intro, custom cursor, sticky nav + mobile
  menu, rail label, footer, and `ChromeProvider` (curtain state + Lenis
  smooth scroll).
- `components/sections/` + `components/ui/` — the editorial sections and
  shared pieces (`SectionHead`, `Arrow`, `MaisonCard`, `ProjectCard`).
- `lib/data/` — typed content (pillars, houses, projects, investor).
- `lib/actions/contact.ts` — server action for the contact form (zod
  validation + Resend).
- The approved single-file v1 design is kept for reference at
  `archive/index-reference.html` (gitignored).

## Pages

`/` · `/divisions` (+ `/divisions/[slug]`) · `/research` · `/projects`
(+ `/projects/[slug]`) · `/investor` · `/contact`. All prerender statically.

## Environment

See `.env.example`. The contact form needs `RESEND_API_KEY` (and a verified
`CONTACT_FROM_EMAIL` domain) to actually send; without it the form still
validates and reports that messaging is not configured. Set
`NEXT_PUBLIC_SITE_URL` to the production URL for correct metadata/sitemap.

## Deploy (Vercel)

Connect the repo to Vercel — it auto-detects Next.js. Add the environment
variables from `.env.example` in the Vercel project settings, then point the
production domain at the deployment.
