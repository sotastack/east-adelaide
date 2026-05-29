import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { legalDocs, legalSlugs, getLegalDoc, COUNSEL_NOTE } from "@/lib/data/legal";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return legalSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};
  return { title: doc.title, description: doc.intro.slice(0, 155) };
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  return (
    <section className="legal" data-section="—" data-title={doc.title}>
      <div className="container">
        <div className="legal-doc">
          <div className="eyebrow">
            <span className="roman">§</span>Legal <span className="dot"></span>{" "}
            Last updated {doc.updated}
          </div>
          <h1 className="h2" style={{ margin: "18px 0 20px" }}>
            {doc.title}
          </h1>
          <p className="lede">{doc.intro}</p>

          {doc.sections.map((s) => (
            <div className="legal-block" key={s.heading}>
              <h2 className="h3">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          ))}

          <p className="legal-note">{COUNSEL_NOTE}</p>
        </div>
      </div>
    </section>
  );
}
