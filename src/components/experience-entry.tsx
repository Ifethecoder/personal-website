import Image from "next/image";
import type { ExperienceRole } from "@/content/experience";
import { Tags } from "./tags";

export function ExperienceEntry({ experience }: { experience: ExperienceRole }) {
  return (
    <article className="experience-entry" aria-labelledby={`${experience.id}-heading`}>
      <div className="experience-copy">
        <p className="experience-period">{experience.season} <time dateTime={String(experience.year)}>{experience.year}</time></p>
        <h3 id={`${experience.id}-heading`} className="experience-company">{experience.company}</h3>
        <p className="experience-role">{experience.role}</p>
        {(experience.team || experience.location) && (
          <ul className="experience-context" aria-label="Team and location">
            {experience.team && <li>{experience.team}</li>}
            {experience.location && <li>{experience.location}</li>}
          </ul>
        )}
        <dl className="experience-metrics" aria-label={`${experience.year} engineering impact`}>
          {experience.metrics.map((metric) => (
            <div key={metric.label}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
        <ul className="experience-contributions">
          {experience.contributions.map((contribution) => <li key={contribution}>{contribution}</li>)}
        </ul>
        <Tags items={experience.technologies} label={`${experience.year} technologies used`} />
      </div>
      <figure className="experience-photo">
        <div className="experience-image" style={{ aspectRatio: experience.photoAspectRatio }}>
          <Image
            src={experience.photo.src}
            alt={experience.photo.alt}
            fill
            sizes="(min-width: 439px) 360px, calc(100vw - 79px)"
            className="object-contain"
          />
        </div>
        <figcaption>{experience.company} · {experience.season} {experience.year}</figcaption>
      </figure>
    </article>
  );
}
