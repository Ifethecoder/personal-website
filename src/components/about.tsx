import Image from "next/image";
import { about } from "@/content/about";
import { assets } from "@/content/assets";
import { SectionHeading } from "./section-heading";
import { Tags } from "./tags";

export function About() {
  const photo = assets.images.soccer.team;

  return (
    <section id="about" className="content-section" aria-labelledby="about-heading" tabIndex={-1}>
      <SectionHeading id="about-heading" number="01" label="About" title={about.heading} />
      <div className="about-layout">
        <div>
          <div className="about-copy">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <Tags items={about.interests} label="Interests" />
        </div>
        <figure className="about-photo">
          <Image
            src={photo.src}
            alt={photo.alt}
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 44vw, (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
