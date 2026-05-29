import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import { projectSlugs } from "@/lib/data/projectSlugs";
import { projectDetails } from "@/lib/data/projectDetails";

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
  const detail = projectDetails[slug];

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
        <h1 className="h2" style={{ margin: "18px 0 12px" }}>
          {p.titlePre}
          <em style={{ fontStyle: "italic", color: "var(--ember)" }}>
            {p.titleEm}
          </em>
          {p.titlePost}
        </h1>

        {detail ? (
          <>
            {detail.status && <div className="pd-status num">{detail.status}</div>}
            <div className="pd-overview">
              {detail.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pd-block">
              <h2 className="h3">Key activities</h2>
              <ul className="pd-list">
                {detail.activities.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="pd-block">
              <h2 className="h3">Outcomes &amp; targets</h2>
              <ul className="pd-list">
                {detail.outcomes.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
            </div>

            <div className="pd-block">
              <h2 className="h3">Industry context</h2>
              <p>{detail.context}</p>
            </div>
          </>
        ) : (
          <p className="pc-desc">{p.desc}</p>
        )}

        <div className="pd-block">
          <h2 className="h3">Partners</h2>
          <div className="pc-tags">
            {p.tags.map((t, idx) => (
              <span key={idx} className={t.partner ? "partner" : undefined}>
                {t.label}
              </span>
            ))}
          </div>
        </div>

        <div className="pd-block">
          <Link href="/contact?topic=Partnership" className="explore-link" data-link data-label="Enquire">
            Enquire about this project
            <span className="arrow">
              <svg viewBox="0 0 28 8" preserveAspectRatio="none">
                <line x1="0" y1="4" x2="24" y2="4" />
                <polyline points="20,1 27,4 20,7" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
