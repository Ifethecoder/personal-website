import Image from "next/image";
import { beyondStories, soccerStory } from "@/content/beyond";
import { Certifications } from "./certifications";
import { BeyondStory } from "./beyond-story";
import { SectionHeading } from "./section-heading";
import { Carousel } from "./carousel";
import { SoccerBonus } from "./soccer-bonus";
import { SoccerVideo } from "./soccer-video";

export function BeyondCode() {
  return (
    <section id="beyond" className="content-section beyond-section" aria-labelledby="beyond-heading" tabIndex={-1}>
      <SectionHeading id="beyond-heading" number="04" label="People, experiences & interests" title="Beyond the code." />
      <Carousel label="Beyond the Code" slides={[
        ...beyondStories.map((story) => ({ id: story.id, label: story.title, content: <BeyondStory story={story} /> })),
        { id: "certifications", label: "Certifications", content: <Certifications /> },
      ]} />
      <SoccerBonus
        story={{ category: soccerStory.category, title: soccerStory.title, description: soccerStory.description, caption: soccerStory.caption }}
        preview={<Image src={soccerStory.poster.src} alt="" fill sizes="(min-width: 1024px) 800px, calc(100vw - 96px)" className="object-cover" />}
      >
        <SoccerVideo video={soccerStory.video} poster={soccerStory.poster.src.src} />
      </SoccerBonus>
    </section>
  );
}
