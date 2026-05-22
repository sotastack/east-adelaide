# Atmospheric Hero Loops

Drop short looping MP4 files here. On each page load, `index.html` will randomly select one and play it muted, autoplay, looped behind the hero image. If no file is present (or the user prefers reduced motion), the static hero image shows instead — no warning, no broken state.

## Filenames the page looks for

The randomiser in `index.html` references these five paths. Provide any subset — missing files fall back silently.

| File | Suggested theme | Pillar hint |
| --- | --- | --- |
| `atmos-01-dust.mp4` | Dust drifting in a sunbeam, slow particles | Neutral / connector |
| `atmos-02-rain.mp4` | Rain on a corrugated metal roof, water on raw concrete | Shelter |
| `atmos-03-leaves.mp4` | Light filtering through eucalypt leaves, slow leaf movement | Biotech |
| `atmos-04-seafoam.mp4` | Sea swell at dawn, steam rising off a steel surface | Food |
| `atmos-05-ink.mp4` | Ink bleeding into water, smoke curling, paper fluttering | Neutral / connector |

## Asset spec

- **Format**: H.264 MP4 (Safari needs this), muted. Add a WebM sibling later if you want better Chrome compression.
- **Aspect**: Portrait, ~4:5 or 3:4 (matches the hero frame). 1280×1600 is plenty; the frame is small.
- **Duration**: 8–15s, loopable (first and last frame should match).
- **Weight**: Aim for ≤2 MB each (CRF 28–30 in ffmpeg). Total page weight is precious — these are atmosphere, not content.
- **Treatment**: Slight grain and slightly desaturated to read as one set across refreshes. The page applies a subtle grayscale + multiply blend over the top, so don't pre-grade too aggressively.

## Quick ffmpeg recipe

```
ffmpeg -i source.mov -t 12 -an \
  -vf "scale=1280:-2,format=yuv420p" \
  -c:v libx264 -profile:v main -preset slow -crf 28 \
  -movflags +faststart \
  atmos-02-rain.mp4
```

## Adding or renaming entries

If you want a different set, edit the `loops` array near the top of the `<script>` block in `index.html` — search for `ATMOSPHERIC HERO VIDEO`.
