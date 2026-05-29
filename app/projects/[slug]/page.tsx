import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { projectSlugs } from "@/lib/data/projectSlugs";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const i = projectSlugs.indexOf(slug);
  if (i === -1) return {};
  const p = projects[i];
  return { title: p.eyebrow, description: p.desc.slice(0, 155) };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const i = projectSlugs.indexOf(slug);
  if (i === -1) notFound();
  const p = projects[i];

  return (
    <section className="projects" data-section="V" data-title="Active Projects">
      <div className="container project-detail">
        <Link href="/projects" className="page-back" data-link data-label="Back">
          ← Projects
        </Link>
        <div className="pc-head">
          <span className="pc-id">
            <span className="pc-num">{p.id}</span>
            {p.eyebrow}
          </span>
          <span className="pc-pillar">{p.pillar}</span>
        </div>
        <h1 className="h2" style={{ margin: "18px 0 0" }}>
          {p.titlePre}
          <em style={{ fontStyle: "italic", color: "var(--ember)" }}>
            {p.titleEm}
          </em>
          {p.titlePost}
        </h1>
        <p className="pc-desc">{p.desc}</p>
        <div className="pc-tags">
          {p.tags.map((t, idx) => (
            <span key={idx} className={t.partner ? "partner" : undefined}>
              {t.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
