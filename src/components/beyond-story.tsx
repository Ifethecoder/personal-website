import type { BeyondStory as Story } from "@/content/beyond";
import { PhotoViewer } from "./photo-viewer";
import { SoccerVideo } from "./soccer-video";
import { Tags } from "./tags";

export function BeyondStory({ story }: { story: Story }) {
  const sizes = story.layout === "wide"
    ? "(min-width: 1280px) 662px, (min-width: 1024px) calc(58.333vw - 84.667px), (min-width: 768px) calc(50vw - 52px), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)"
    : "(min-width: 1280px) 466px, (min-width: 1024px) calc(41.667vw - 67.333px), (min-width: 768px) calc(50vw - 52px), (min-width: 640px) calc(100vw - 80px), calc(100vw - 48px)";

  return (
    <article className={`beyond-card beyond-card--${story.layout}`} aria-labelledby={`${story.id}-story-heading`}>
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
