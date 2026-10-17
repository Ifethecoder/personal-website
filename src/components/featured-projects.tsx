import { featuredProjects } from "@/content/projects";
import { ProjectShowcase } from "./project-showcase";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function FeaturedProjects() {
  return (
    <section id="projects" className="content-section" aria-labelledby="projects-heading" tabIndex={-1}>
      <SectionHeading id="projects-heading" number="03" label="Featured projects" title="Things I've built." />
      <div className="project-list">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.id}>
            <ProjectShowcase project={project} index={index} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
