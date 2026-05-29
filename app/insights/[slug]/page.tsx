import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { insightSlugs, getInsight } from "@/lib/data/insights";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = getInsight(slug);
  if (!p) return {};
  return { title: p.title, description: p.excerpt.slice(0, 155) };
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const p = getInsight(slug);
  if (!p) notFound();

  return (
    <section className="insight-detail" data-section="—" data-title="Insights">
      <div className="container">
        <Link href="/insights" className="page-back" data-link data-label="Back">
          ← Insights
        </Link>
        <div className="id-head">
          <div className="meta">
            <span className="cat">{p.category}</span>
            <span>{p.kind}</span>
            <span>{p.readTime}</span>
          </div>
          <h1 className="h2">{p.title}</h1>
          <div className="byline">
            Filed by <em>{p.author}</em> · {p.place} · {p.date}
          </div>
        </div>
        <div className="id-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={p.image} alt="" />
        </div>
        <div className="id-body">
          {p.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
