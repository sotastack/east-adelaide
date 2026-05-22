# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A single-page marketing site for **East Adelaide Capital Group**, deployed to GitHub Pages from the `main` branch of `sotastack/east-adelaide`. There is no build step, no package manager, and no framework — everything is hand-authored HTML, CSS, and vanilla JS inside one file.

## Commands

- **Preview locally**: open `index.html` directly in a browser, or `python3 -m http.server 8000` from the repo root and visit `http://localhost:8000`.
- **Publish**: push to `main`. GitHub Pages serves the repo root automatically; there is no CI.
- No tests, no linter, no formatter. Don't introduce them unless asked.

## File layout

The published surface is intentionally tiny — most files in the working tree are *not* shipped:

- `index.html` — the entire production site. Self-contained: embedded `<style>` and inline `<script>` at the bottom (~1300 lines of markup, then a single `<script>` block).
- `main-logo.png`, `main-logo-icon.png` — the only assets that ship alongside `index.html`.
- `mockup/` — design variants (edition-02 through edition-07). **Gitignored.** Useful as references when iterating on the live page, but never link to them from `index.html`.
- `intro.md` — source brief describing the actual company (divisions, subsidiaries, revenue, academic partners). **Gitignored.** Authoritative source for *content* decisions; consult it before changing copy about business structure, revenue figures, or subsidiary names.
- `EAGroup_logo.png` — gitignored; do not reference from `index.html`.
- `Projects/`, `Improvements_web.pdf` — untracked working files, not part of the site.

When adding new assets to the live site, also add them to `.gitignore`'s "Working files" comment block if they shouldn't ship.

## Architecture of `index.html`

Top-to-bottom structure inside one file:

1. **`:root` design tokens** (~lines 14-33) — the entire visual language lives here as CSS custom properties: `--ink`, `--bone`, `--paper`, `--copper`, `--ember`, the three font stacks (`--display` Fraunces, `--sans` Instrument Sans, `--mono` IBM Plex Mono), and layout vars `--max`, `--gutter`, `--rail`. Always edit tokens here rather than hard-coding colors/fonts in component rules.
2. **Component CSS** — organized by section with `/* ============ NAME ============ */` banners that mirror the markup banners below. Mobile breakpoints are inline at the end of each component, not collected at the bottom. Primary breakpoint is `1000px` (gutter collapse) with a secondary at `1100px` (mobile menu).
3. **Markup** (~line 889 onward), in this order: `.curtain` intro → custom cursor → rail label → `<nav>` → mobile menu `<aside>` → `<section>`s (`hero`, `pillars`, `houses`, `research`, `investor`, `field-notes`) → CTA → footer.
4. **Single `<script>` block** (~line 1301) — four IIFEs, in order: curtain controller, custom cursor, sticky rail label, mobile menu. No bundler, no modules.

### Cross-cutting behaviors to know about

- **The curtain** is a full-viewport intro overlay shown on first visit. State is tracked via `sessionStorage.getItem('eac_intro_seen')`. While up, `<body>` has class `curtain-active` (which locks scroll). After auto-rise (2.4s) or skip, the curtain element is removed from the DOM. The "Replay Intro" nav button clears the session flag and reloads. If you add any first-paint animation, gate it on `body.no-curtain` so the timing matches when the curtain was skipped.
- **Sticky rail label** reads `data-section` and `data-title` from each `<section>` and updates as the user scrolls. Any new top-level section should set both attributes (Roman numeral + title) or it won't participate.
- **Custom cursor** activates only on `hover: hover` + `pointer: fine` devices. Interactive elements opt in by adding `data-link` and `data-label="…"` — the label text appears in the cursor ring on hover. Add these to any new CTAs/links you want to feel "part of" the design.
- **Mobile menu** is an overlay `<aside id="mobileMenu">` toggled by `#navToggle`. Links inside need `data-mm-close` so they dismiss the menu on tap. Auto-closes above 1100px viewport.

## Content conventions

- **Brand voice & content of record**: `intro.md` is authoritative for subsidiary names, division structure, revenue figures ($45M Housing & Construction, $30M Food Supply Chain, $75M combined), and academic partners (University of Melbourne, University of Sydney). Don't invent or "round" these.
- **Numerals**: tabular numerals and ordinals use the `.num` class (which applies IBM Plex Mono with the right OpenType features). Use it for metrics, dates, frame numbers, Roman numerals in eyebrows.
- **Editorial labels**: section eyebrows follow `<Roman>. <Title> <dot> <subtitle>` pattern — match the existing tone (filed/dispatch/frame language) rather than generic web copy.

## Working with mockups

When the user asks to try a different visual direction, prefer copying patterns *from* `mockup/edition-0X.html` *into* `index.html` rather than linking out to mockups or duplicating `index.html`. The mockups are sketches; only `index.html` ships.
