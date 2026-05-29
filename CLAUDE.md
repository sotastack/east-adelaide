# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

The marketing site for **East Adelaide Capital Group**, a diversified Australian operating group across shelter, biotech and food. It is a **Next.js (App Router) + TypeScript** application, deployed to **Vercel** from the `main` branch of `sotastack/east-adelaide`.

> History: the site began as a single hand-authored `index.html`. That approved v1 design is preserved at `archive/index-reference.html` (gitignored) and is the visual source of truth — the React components are ports of it. Don't treat it as live.

## Commands

- **Dev**: `npm install`, then `npm run dev` (http://localhost:3000). `cp .env.example .env.local` for the contact form / site URL.
- **Build / checks**: `npm run build` (runs the TS checker), `npm run lint`, `npx tsc --noEmit`.
- **Deploy**: push `main` → Vercel auto-deploys. `main` is production, so don't push half-finished states; verify (`build` + `lint`) first.

## Architecture

- `app/` — routes. `layout.tsx` wires the three fonts via `next/font` and renders the shared chrome around `{children}`. Global CSS, imported once in `layout.tsx`:
  - `app/globals.css` — `:root` design tokens (`--ink`, `--bone`, `--paper`, `--copper`, `--ember`, font stacks `--display`/`--sans`/`--mono`, `--max`/`--gutter`/`--rail`), base reset, `.container`, grain overlay, Lenis base rules. **Edit tokens here, never hard-code.**
  - `app/chrome.css` — nav, curtain, custom cursor, rail label, mobile menu, footer (kept global; coupled to `body`-state classes).
  - `app/sections.css` — all page-section styles + shared editorial utilities (`.eyebrow`/`.display`/`.h2`/`.h3`/`.lede`/`.num`/`.dropcap`) + inner-page helpers. Ported verbatim from v1, extended for v2 pages.
- `components/chrome/` — `ChromeProvider` (curtain state via `sessionStorage('eac_intro_seen')` + 2.4s auto-rise + `replay`; hosts Lenis smooth scroll), `Curtain`, `CustomCursor` (delegated `[data-link]`/`data-label` hover), `Nav` (+ mobile menu), `RailLabel` (IntersectionObserver over `[data-section]`/`data-title`; `data-rail-theme="dark"` for dark sections), `Footer`, `ReplayLink`.
- `components/sections/` — the homepage sections (Hero, Pillars, Houses, Research, Projects, Partners, Investor, FieldNotes, Cta). Several are reused on their dedicated pages.
- `components/ui/` — shared `SectionHead`, `Arrow`, `MaisonCard`, `ProjectCard`, `ArticleCard`.
- `lib/data/` — typed content: `pillars`, `houses`, `projects` (+ `projectSlugs`, `projectDetails`), `investor`, `partners`, `insights`, `about`, `legal`.
- `lib/actions/contact.ts` — `'use server'` contact action (zod validation + Resend; honeypot). Falls back to a clear "not configured" message without `RESEND_API_KEY`.
- `public/` — `main-logo*.png`, `partners/*.svg` (university logos), and `logos/` for real house/division/partner logos dropped in later (see `public/logos/README.md`).

## Routes

`/`, `/about`, `/divisions` (+ `/divisions/[slug]`), `/research`, `/projects` (+ `/projects/[slug]`), `/partners`, `/insights` (+ `/insights/[slug]`), `/investor`, `/contact`, `/legal/[slug]`. All prerender statically except `/contact` (reads `?topic`). The homepage is the flagship long-scroll gateway; subpages carry the depth.

## Conventions

- **Design tokens & utilities** live in CSS; reuse `.eyebrow/.h2/.lede/.num/.dropcap` and the `SectionHead`/`Arrow` components rather than re-styling.
- **Cursor**: add `data-link` + `data-label="…"` to interactive elements so they participate in the custom cursor.
- **Rail**: any top-level `<section>` should set `data-section` + `data-title` to appear in the rail label.
- **Logos**: set the optional `logo` field on a `houses`/`pillars`/`partners` entry to swap its monogram for a real asset under `public/logos/`.
- **Content of record**: `archive/intro.md`, `archive/Improvements_web.pdf` and the project briefs in `archive/Projects/` are the source material; the figures in the live data files (three divisions; investor table totalling $90M) are authoritative. Don't invent names, figures or legal commitments. About/Investor/Legal copy is placeholder pending client/counsel review.

## Local-only (`archive/`, gitignored)

`archive/index-reference.html` (v1 design reference), `archive/intro.md`, `archive/Projects/` (source PDFs), `archive/Improvements_web.pdf`, `archive/mockup/`, plus scratch files. Never imported by the app.
