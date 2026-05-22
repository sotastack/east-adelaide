# Atmospheric Hero Loops

The homepage hero has a full-bleed atmospheric backdrop. By default the page renders a **procedural** atmospheric layer in pure CSS/SVG — one of three variants (drift, mist, glimmer) chosen at random per page load. Drop MP4 files into this directory and they will layer on top of the procedural backdrop, replacing it with real footage. If any MP4 fails to load (404, codec, autoplay block) the procedural variant stays visible.

## Why procedural by default

Stock-video sites (Pexels, Pixabay, Coverr) prohibit hotlinking, and we don't want the repo growing every time the team wants to try a new mood. The procedural layer:

- Ships at ~6 KB inline (versus 1-3 MB per MP4)
- Matches the existing copper/bone palette automatically
- Animates smoothly on every device, no codec concerns
- Gives a usable preview of the effect placement before real footage is sourced

## Adding real MP4 loops

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
