import { universities } from "@/lib/data/partners";

const stats = [
  {
    v: (
      <>
        07<sup>+</sup>
      </>
    ),
    k: "Active R&D programs across sustainable building, modular energy, and bioactive ingredients.",
  },
  {
    v: "12",
    k: "Technical specifications and pre-clinical protocols under validation.",
  },
  {
    v: "04",
    k: "Australian university research collaborations spanning materials, AI and biotech.",
  },
];

export function Research() {
  // Duplicate the logo set so the marquee can loop seamlessly.
  const loop = [...universities, ...universities];

  return (
    <section className="research" data-section="IV" data-title="Research">
      <div className="container">
        <div className="research-grid">
          <div className="research-text">
            <div className="eyebrow">
              <span className="roman">IV.</span>Research &amp; Innovation
            </div>
            <h2 className="h2">
              Science that{" "}
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                changes
              </span>{" "}
              how Australia builds, eats and ages.
            </h2>
            <p className="body-copy dropcap">
              The group operates two research-led functions: Promod for
              construction materials and sustainable building systems, and
              Natural Biotech for plant-, marine- and microbe-derived bioactive
              ingredients. Both function as translation pathways — from
              laboratory to compliant, commercial product.
            </p>
            <p className="body-copy">
              Our work is undertaken with four Australian research universities
              and through standing collaborations with leading Chinese research
              groups in functional phospholipid synthesis and marine peptide
              chemistry.
            </p>
          </div>
          <div className="research-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
              alt="Research lab"
            />
            <div className="label">
              <strong>Promod / Materials Lab</strong>Frame 04.7 · Sustainable
              panel composite under flex-fatigue testing, Q2 2026.
            </div>
          </div>
        </div>

        <div className="uni-band">
          <div className="partner-label">Research Partners</div>
          <div className="uni-carousel" aria-label="University research partners">
            <div className="uni-track">
              {loop.map((u, i) => (
                <div className="uni-item" key={i} aria-hidden={i >= universities.length || undefined}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={u.logo} alt={i < universities.length ? `${u.lead} ${u.em}` : ""} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="research-stats">
          {stats.map((s, i) => (
            <div className="research-stat" key={i}>
              <div className="v">{s.v}</div>
              <div className="k">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
