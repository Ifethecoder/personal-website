import type { PortfolioVideo } from "@/content/assets";

type SoccerVideoProps = {
  video: PortfolioVideo;
  poster: string;
};

export function SoccerVideo({ video, poster }: SoccerVideoProps) {
  return (
    <div className="soccer-video">
      <video
        controls
        playsInline
        muted
        preload="none"
        width={1280}
        height={720}
        poster={poster}
        aria-label="Soccer on an outdoor pitch"
        aria-describedby="soccer-video-description"
      >
        <source src={video.src} type={video.mimeType} />
        Your browser does not support this video. <a href={video.src}>Download the silent soccer clip</a>.
      </video>
      <p id="soccer-video-description">{video.description}</p>
    </div>
  );
}
