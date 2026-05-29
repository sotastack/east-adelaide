import { projects } from "@/lib/data/projects";
import { SectionHead } from "@/components/ui/SectionHead";

export function Projects() {
  return (
    <section className="projects" data-section="V" data-title="Active Projects">
      <div className="container">
        <SectionHead
          roman="V."
          eyebrow="Active Projects"
          title={
            <>
              From the lab to{" "}
              <span style={{ fontStyle: "italic", color: "var(--ember)" }}>
                commercial-ready
              </span>
              .
            </>
          }
          meta="A working portfolio of translational projects — co-developed with Australian universities, Chinese research groups, and industry partners. Each is structured to move from research validation through pilot manufacturing to compliant product."
        />

        <div className="projects-grid">
          {projects.map((p) => (
            <article className="project-card" data-link data-label="Open Project" key={p.id}>
              <div className="pc-head">
                <span className="pc-id">
                  <span className="pc-num">{p.id}</span>
                  {p.eyebrow}
                </span>
                <span className="pc-pillar">{p.pillar}</span>
              </div>
              <h3 className="pc-title">
                {p.titlePre}
                <em>{p.titleEm}</em>
                {p.titlePost}
              </h3>
              <p className="pc-desc">{p.desc}</p>
              <div className="pc-tags">
                {p.tags.map((t, i) => (
                  <span key={i} className={t.partner ? "partner" : undefined}>
                    {t.label}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
