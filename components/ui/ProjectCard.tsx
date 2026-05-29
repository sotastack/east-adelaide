import Link from "next/link";
import type { Project } from "@/lib/data/projects";

export function ProjectCard({
  project,
  href,
}: {
  project: Project;
  href?: string;
}) {
  const inner = (
    <>
      <div className="pc-head">
        <span className="pc-id">
          <span className="pc-num">{project.id}</span>
          {project.eyebrow}
        </span>
        <span className="pc-pillar">{project.pillar}</span>
      </div>
      <h3 className="pc-title">
        {project.titlePre}
        <em>{project.titleEm}</em>
        {project.titlePost}
      </h3>
      <p className="pc-desc">{project.desc}</p>
      <div className="pc-tags">
        {project.tags.map((t, i) => (
          <span key={i} className={t.partner ? "partner" : undefined}>
            {t.label}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <Link className="project-card" href={href} data-link data-label="Open Project">
        {inner}
      </Link>
    );
  }
  return (
    <article className="project-card" data-link data-label="Open Project">
      {inner}
    </article>
  );
}
