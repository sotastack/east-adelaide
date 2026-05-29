import { Fragment } from "react";
import { houseBands } from "@/lib/data/houses";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arrow } from "@/components/ui/Arrow";

function Mark({ mark }: { mark: string }) {
  if (mark === "leaf") {
    return (
      <div className="nb-leaf" aria-hidden="true">
        <svg viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="14" cy="20" rx="10" ry="18" fill="#CFE6D6" />
          <ellipse cx="32" cy="20" rx="10" ry="18" fill="#3FB078" />
          <ellipse cx="50" cy="20" rx="10" ry="18" fill="#1F7A4A" />
        </svg>
      </div>
    );
  }
  return (
    <div className="mark">
      <div className="letters">{mark}</div>
      <div className="rule"></div>
    </div>
  );
}

export function Houses() {
  return (
    <section
      className="maisons"
      data-section="III"
      data-title="Our Houses"
      data-rail-theme="dark"
    >
      <div className="container">
        <SectionHead
          roman="III."
          eyebrow="Our Houses"
          title={
            <>
              Ten houses.
              <br />
              <span style={{ fontStyle: "italic", color: "var(--copper)" }}>
                Three operating pillars.
              </span>
            </>
          }
          meta="Each business retains its own brand, leadership and customer relationships. The group provides capital, governance, technical infrastructure and shared services — and in time, the platform to take this portfolio to public markets."
        />

        <div className="maisons-grid">
          {houseBands.map((band) => (
            <Fragment key={band.roman}>
              <div className="maisons-pillar-band">
                <span className="pb-roman">{band.roman}</span>
                <span className="pb-name">
                  {band.name} <em>{band.em}</em>
                </span>
                <span className="pb-meta">{band.meta}</span>
              </div>
              {band.houses.map((h) => (
                <div className="maison" data-link data-label="Open House" key={h.id}>
                  <div className="mark-row">
                    <Mark mark={h.mark} />
                    <div className="idx-text">
                      House {h.id} · <span className="div-text">{h.division}</span>
                    </div>
                  </div>
                  <div className="name">
                    {h.name} <em>{h.em}</em>
                  </div>
                  <div className="desc">{h.desc}</div>
                  <div className="brands">{h.brands}</div>
                  <div className="arrow-wrap">
                    <Arrow />
                  </div>
                </div>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
