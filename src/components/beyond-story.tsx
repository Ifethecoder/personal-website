import type { BeyondStory as Story } from "@/content/beyond";
import { PhotoViewer } from "./photo-viewer";
import { SoccerVideo } from "./soccer-video";
import { Tags } from "./tags";

export function BeyondStory({ story }: { story: Story }) {
  const sizes = "(min-width: 1280px) 599px, (min-width: 1024px) calc(52.38vw - 71.24px), (min-width: 640px) calc(100vw - 88px), calc(100vw - 56px)";

  return (
    <article className="beyond-card" aria-labelledby={`${story.id}-story-heading`}>
      <figure>
        {story.kind === "video" ? (
          <SoccerVideo video={story.video} poster={story.poster.src.src} />
        ) : (
          <PhotoViewer photo={story.photo} caption={story.caption} sizes={sizes} position={story.photoPosition} aspectRatio={story.photoAspectRatio} />
        )}
        <figcaption className="beyond-caption">{story.caption}</figcaption>
      </figure>
      <div className="beyond-card-copy">
        <p className="eyebrow">{story.category}</p>
        <h3 id={`${story.id}-story-heading`}>{story.title}</h3>
        <p className="beyond-description">{story.description}</p>
        {story.tags && <Tags items={story.tags} label="Community focus" />}
      </div>
    </article>
  );
}
