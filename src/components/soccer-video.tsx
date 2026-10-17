"use client";

type SoccerVideoProps = {
  video: { src: string; mimeType: string; description: string };
  poster: string;
};

export function SoccerVideo({ video, poster }: SoccerVideoProps) {
  return (
    <details className="soccer-video" onToggle={(event) => {
      if (!event.currentTarget.open) event.currentTarget.querySelector("video")?.pause();
    }}>
      <summary>Watch a moment on the pitch</summary>
      <video
        controls
        playsInline
        muted
        preload="none"
        poster={poster}
        aria-label="Soccer on an outdoor pitch"
        aria-describedby="soccer-video-description"
      >
        <source src={video.src} type={video.mimeType} />
        Your browser does not support this video. <a href={video.src}>Download the silent soccer clip</a>.
      </video>
      <p id="soccer-video-description">{video.description}</p>
    </details>
  );
}
