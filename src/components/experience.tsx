import Image from "next/image";
import { assets } from "@/content/assets";
import { experiences } from "@/content/experience";
import { ExperienceEntry } from "./experience-entry";
import { SectionHeading } from "./section-heading";

export function Experience() {
  const photo = assets.images.experience.amazon2026;

  return (
    <section id="experience" className="content-section" aria-labelledby="experience-heading" tabIndex={-1}>
      <SectionHeading id="experience-heading" number="03" label="Experience" title="Where I've worked." />
      <div className="experience-layout">
        <ol className="experience-timeline" aria-label="Amazon internships, latest first">
          {experiences.map((experience) => (
            <li key={experience.id}><ExperienceEntry experience={experience} /></li>
          ))}
        </ol>
        <figure className="experience-photo">
          <div className="experience-image">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 408px) 360px, calc(100vw - 48px)"
              className="object-contain"
            />
          </div>
          <figcaption>Amazon · Summer 2026</figcaption>
        </figure>
      </div>
    </section>
  );
}
