import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { pillars } from "@/lib/data/pillars";
import { houseBands } from "@/lib/data/houses";
import { SectionHead } from "@/components/ui/SectionHead";
import { MaisonCard } from "@/components/ui/MaisonCard";
import { Arrow } from "@/components/ui/Arrow";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return pillars.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const pillar = pillars.find((p) => p.slug === slug);
  if (!pillar) return {};
  return { title: pillar.title, description: pillar.blurb.slice(0, 155) };
}

export default async function DivisionPage({ params }: Params) {
  const { slug } = await params;
  const idx = pillars.findIndex((p) => p.slug === slug);
  if (idx === -1) notFound();
  const pillar = pillars[idx];
  const band = houseBands[idx];

  return (
    <>
      <section
        className="pillars"
        data-section={pillar.roman}
        data-title={pillar.title}
      >
        <div className="container">
          <Link href="/divisions" className="page-back" data-link data-label="Back">
            ← Divisions
          </Link>
          <SectionHead
            roman={`${pillar.roman}.`}
            eyebrow={`${pillar.short} Division`}
            title={pillar.title}
            meta={pillar.blurb}
          />

          <div className="division-detail">
            <div className="pillar">
              <div className="img-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={pillar.image} alt={pillar.imageAlt} />
                <div className="corner">{pillar.corner}</div>
              </div>
            </div>
            <div>
              <ul className="subsidiary-list">
                {pillar.subsidiaries.map((s) => (
                  <li key={s.name} data-link data-label="Open">
                    {s.name} <span className="tag">{s.tag}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="explore-link"
                data-link
                data-label="Contact"
              >
                Enquire about {pillar.short}
                <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="maisons"
        data-section={pillar.roman}
        data-title={`${pillar.short} Houses`}
        data-rail-theme="dark"
      >
        <div className="container">
          <SectionHead
            roman={`${pillar.roman}.`}
            eyebrow="Houses"
            title={
              <>
                {band.name}{" "}
                <em style={{ fontStyle: "italic", color: "var(--copper)" }}>
                  {band.em}
                </em>
              </>
            }
            meta={band.meta}
          />
          <div className="maisons-grid">
            {band.houses.map((h) => (
              <MaisonCard house={h} key={h.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
