import type { ReactNode } from "react";

interface Metric {
  idx: string;
  label: string;
  value: ReactNode;
  meta: string;
}

const metrics: Metric[] = [
  {
    idx: "01",
    label: "Combined Annual Revenue",
    value: (
      <>
        $90<span className="unit">M</span>
      </>
    ),
    meta: "Across three essential operating divisions in Australia.",
  },
  {
    idx: "02",
    label: "Operating Businesses",
    value: "10",
    meta: "Materials, fabrication, biotech, food supply chain.",
  },
  {
    idx: "03",
    label: "Academic Partners",
    value: "04",
    meta: "USyd · UMelb · RMIT · UAdelaide.",
  },
  {
    idx: "04",
    label: "Operating Divisions",
    value: "03",
    meta: "Shelter · Natural Biotech · Food.",
  },
];

export function Hero() {
  return (
    <section className="hero" data-section="I" data-title="Investment Overview">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <div className="eyebrow">
              <span className="roman">I.</span>Investment Overview{" "}
              <span className="dot"></span> Headquartered in Victoria
            </div>
            <h1 className="display">
              Three essentials.
              <br />
              <span className="italic">One platform.</span>
            </h1>
            <div className="hero-rule"></div>
            <p className="lede">
              Shelter, biotech and food — the foundations of Australian daily
              life, operated as a single diversified industrial group across
              building materials and sustainable construction, natural
              bioscience, and integrated food supply chains.
            </p>
          </div>
          <div className="hero-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1800&q=80"
              alt="Material study"
            />
            <div className="frame-caption">
              <span className="meta">
                Frame 01.3 · Aluminium extrusion line, Procon Material ·
                Dandenong, Victoria
              </span>
              <span className="frame-no num">MAR 2026</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="metrics">
          <div className="metrics-grid">
            {metrics.map((m) => (
              <div className="metric" key={m.idx}>
                <span className="label">
                  <span className="idx num">{m.idx}</span>
                  {m.label}
                </span>
                <span className="value">{m.value}</span>
                <span className="meta">{m.meta}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
