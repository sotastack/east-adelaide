import Link from "next/link";
import { pillars } from "@/lib/data/pillars";
import { SectionHead } from "@/components/ui/SectionHead";
import { Arrow } from "@/components/ui/Arrow";

const ember = { fontStyle: "italic", color: "var(--ember)" } as const;

export function Pillars() {
  return (
    <section className="pillars" data-section="II" data-title="Three Pillars">
      <div className="container">
        <SectionHead
          roman="II."
          eyebrow="Three Pillars"
          title={
            <>
              <span style={ember}>Shelter</span>, <span style={ember}>Biotech</span>{" "}
              and <span style={ember}>Food.</span>
              <br />
              Built as one.
            </>
          }
          meta="Inspired by the diversified industrial discipline of Wesfarmers, East Adelaide Capital Group is structured as a long-horizon operator across three categories essential to Australian households: shelter, food, and the natural sciences that extend healthy life."
        />

        <div className="pillar-trio">
          {pillars.map((p) => (
            <div className="pillar" key={p.slug}>
              <div className="img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.imageAlt} />
                <div className="corner">{p.corner}</div>
              </div>
              <h3 className="h3">{p.title}</h3>
              <p className="dropcap">{p.blurb}</p>
              <ul className="subsidiary-list">
                {p.subsidiaries.map((s) => (
                  <li key={s.name} data-link data-label="Open">
                    {s.name} <span className="tag">{s.tag}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/divisions/${p.slug}`}
                className="explore-link"
                data-link
                data-label="Enter"
              >
                {p.exploreLabel}
                <Arrow />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
