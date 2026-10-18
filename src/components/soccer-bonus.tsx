"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { soccerBonusCopy as copy } from "@/content/soccer";
import { PenaltyPitch } from "./penalty-pitch";

type Phase = "ready" | "shooting" | "goal";
type Story = { category: string; title: string; description: string; caption: string };

function HighlightHeader({ story, unlocked }: { story: Story; unlocked: boolean }) {
  return (
    <div className="bonus-reel-header">
      <p className="eyebrow">{story.category}</p>
      <h4>{story.title}</h4>
      <p className="bonus-unlock-message">{unlocked ? copy.unlocked : copy.description}</p>
    </div>
  );
}

export function SoccerBonus({ story, preview, children }: { story: Story; preview: ReactNode; children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const shotButton = useRef<HTMLButtonElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phaseRef = useRef<Phase>("ready");
  const [phase, setPhase] = useState<Phase>("ready");
  const [unlocked, setUnlocked] = useState(false);
  const [enhanced, setEnhanced] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  function clearShot() {
    if (timer.current !== null) clearTimeout(timer.current);
    timer.current = null;
  }

  function pauseVideo(reset = false) {
    const video = root.current?.querySelector("video");
    if (!video) return;
    if (!video.paused) video.pause();
    if (reset && video.readyState > 0) video.currentTime = 0;
  }

  function finishShot() {
    if (phaseRef.current !== "shooting") return;
    clearShot();
    phaseRef.current = "goal";
    setPhase("goal");
    setUnlocked(true);
    setAnnouncement(`${copy.goal} ${copy.unlocked}`);
  }

  useEffect(() => {
    setEnhanced(true);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    function onMotionChange() { if (motion.matches) finishShot(); }
    motion.addEventListener("change", onMotionChange);
    function onVisibilityChange() { if (document.hidden) pauseVideo(); }
    document.addEventListener("visibilitychange", onVisibilityChange);
    const video = root.current?.querySelector("video");
    const observer = video && "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      if (entries.some((entry) => !entry.isIntersecting)) pauseVideo();
    }) : null;
    if (video) observer?.observe(video);
    return () => {
      clearShot();
      observer?.disconnect();
      motion.removeEventListener("change", onMotionChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  function shoot() {
    if (!enhanced || phaseRef.current !== "ready") return;
    phaseRef.current = "shooting";
    setPhase("shooting");
    setAnnouncement("");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishShot();
    } else {
      // Animation-end completes the shot; this also covers interrupted animations.
      timer.current = setTimeout(finishShot, 1100);
    }
  }

  function reset() {
    clearShot();
    pauseVideo(true);
    phaseRef.current = "ready";
    setPhase("ready");
    setUnlocked(false);
    setAnnouncement("Ready for another shot.");
    shotButton.current?.focus();
  }

  return (
    <section ref={root} className="soccer-bonus" aria-labelledby="soccer-bonus-heading" data-phase={phase} data-enhanced={enhanced}>
      <div className="bonus-top">
        <div className="bonus-intro">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h3 id="soccer-bonus-heading">{copy.heading}</h3>
          <p id="soccer-bonus-description" className="bonus-description">{copy.description}</p>
          <p className="bonus-note">{story.description}</p>
        </div>
        <div className="bonus-game">
          <PenaltyPitch onShotEnd={finishShot} />
          <div className="bonus-play-controls">
            <button ref={shotButton} type="button" className="bonus-shoot" aria-describedby="soccer-bonus-description" aria-disabled={!enhanced || phase !== "ready"} onClick={shoot}>{phase === "shooting" ? "On its way…" : copy.shoot}</button>
            <button type="button" className="bonus-replay" onClick={reset}>{copy.replay}</button>
          </div>
          <p className="bonus-celebration" aria-hidden="true">{phase === "goal" && <span>{copy.goal}</span>}</p>
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="bonus-highlight-slot">
        <details
          className="bonus-highlights"
          open={unlocked}
          onToggle={(event) => {
            const open = event.currentTarget.open;
            setUnlocked(open);
            if (!open) {
              pauseVideo();
            } else if (phaseRef.current !== "goal") {
              clearShot();
              phaseRef.current = "ready";
              setPhase("ready");
              setAnnouncement(copy.unlocked);
            }
          }}
        >
          <summary><span className="bonus-when-closed">{copy.skip}</span><span className="bonus-when-open">Hide highlights</span></summary>
          <div className="bonus-reel-panel">
            <HighlightHeader story={story} unlocked />
            <div className="bonus-video-frame">{children}</div>
            <p className="bonus-reel-caption">{story.caption}</p>
          </div>
        </details>
        <div className="bonus-locked-preview" aria-hidden="true">
          <HighlightHeader story={story} unlocked={false} />
          <div className="bonus-video-frame bonus-waiting">
            {preview}
            <div className="bonus-lock-overlay">
              <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V6a4 4 0 0 1 8 0v4" /></svg>
              <span className="bonus-lock-title">{copy.locked}</span>
              <span className="bonus-lock-hint">{copy.previewHint}</span>
            </div>
          </div>
          <p className="bonus-reel-caption">{story.caption}</p>
        </div>
      </div>
    </section>
  );
}
