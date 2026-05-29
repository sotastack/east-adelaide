import { projects } from "@/lib/data/projects";
import { projectSlugs } from "@/lib/data/projectSlugs";
import { SectionHead } from "@/components/ui/SectionHead";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Projects({ linked = false }: { linked?: boolean }) {
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
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              project={p}
              href={linked ? `/projects/${projectSlugs[i]}` : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
