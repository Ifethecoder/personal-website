import { experiences } from "@/content/experience";
import { ExperienceEntry } from "./experience-entry";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="content-section" aria-labelledby="experience-heading" tabIndex={-1}>
      <SectionHeading id="experience-heading" number="02" label="Experience" title="Where I've worked." />
      <ol className="experience-timeline" aria-label="Amazon internships, latest first">
        {experiences.map((experience) => (
          <li key={experience.id}><ExperienceEntry experience={experience} /></li>
        ))}
      </ol>
    </section>
  );
}
