import { Fragment } from "react";
import { houseBands } from "@/lib/data/houses";
import { SectionHead } from "@/components/ui/SectionHead";
import { MaisonCard } from "@/components/ui/MaisonCard";

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
              Seven houses.
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
                <MaisonCard house={h} key={h.id} />
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
