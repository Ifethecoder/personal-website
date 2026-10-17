import { beyondStories } from "@/content/beyond";
import { Certifications } from "./certifications";
import { BeyondStory } from "./beyond-story";
import { SectionHeading } from "./section-heading";

export function BeyondCode() {
  return (
    <section id="beyond" className="content-section beyond-section" aria-labelledby="beyond-heading" tabIndex={-1}>
      <SectionHeading id="beyond-heading" number="04" label="People, experiences & interests" title="Beyond the code." />
      <div className="beyond-grid">
        {beyondStories.map((story) => <BeyondStory key={story.id} story={story} />)}
      </div>
      <Certifications />
    </section>
  );
}
