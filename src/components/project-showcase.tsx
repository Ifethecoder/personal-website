import Image from "next/image";
import type { Project } from "@/content/projects";
import { Tags } from "./tags";

export function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  return (
    <article
      id={project.id}
      className={`project-showcase${index % 2 === 1 ? " project-reversed" : ""}`}
      aria-labelledby={`${project.id}-heading`}
    >
      <div className="project-copy">
        <div className="project-event">
          <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <p>{project.event.name} <span aria-hidden="true">/</span> <time dateTime={project.event.date}>{project.event.dateLabel}</time></p>
        </div>
        <h3 id={`${project.id}-heading`} className="project-title">{project.name}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        {project.highlight && (
          <p className="project-highlight"><span aria-hidden="true">✧</span> {project.highlight}</p>
        )}
        <div className="project-description">
          {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Tags items={project.tags} label={`${project.name} topics`} />
      </div>
      <figure className="project-photo">
        <div className="project-image">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1280px) 544px, (min-width: 1024px) calc(50vw - 96px), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="object-contain"
          />
        </div>
        <figcaption>{project.imageNote}</figcaption>
      </figure>
    </article>
  );
}
