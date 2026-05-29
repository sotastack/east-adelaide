# Logos

Drop real brand logos here and reference them from the data files. Until a
logo is present, the site renders the existing monogram / leaf marks, so this
is safe to populate incrementally.

- `houses/` — operating-business logos. Set `logo: "/logos/houses/<file>.svg"`
  on the matching entry in `lib/data/houses.ts` (e.g. `procon.svg`).
- `divisions/` — division logos. Set `logo` on the entry in `lib/data/pillars.ts`.
- `partners/` — industry-partner logos. Set `logo: "/logos/partners/<file>.svg"`
  on the matching entry in `lib/data/partners.ts`.

Prefer SVG (or transparent PNG). Anything served from `public/` is available at
the site root, e.g. `public/logos/houses/procon.svg` → `/logos/houses/procon.svg`.
