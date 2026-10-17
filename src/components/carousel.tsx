"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

type Slide = { id: string; label: string; content: ReactNode };

export function Carousel({ slides, label }: { slides: readonly Slide[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const current = useRef(0);
  const frame = useRef<number | null>(null);
  const sync = useRef<() => void>(() => {});
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const id = useId();

  function goTo(index: number, instant = false) {
    const viewport = track.current;
    if (!viewport) return;
    const target = Math.max(0, Math.min(slides.length - 1, index));
    const item = viewport.children[target] as HTMLElement;
    const first = viewport.children[0] as HTMLElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({ left: item.offsetLeft - first.offsetLeft, behavior: instant || reduce ? "instant" : "smooth" });
  }

  function scheduleSync() {
    if (frame.current !== null) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = null;
      sync.current();
    });
  }

  useEffect(() => {
    const viewport = track.current;
    if (!viewport) return;
    const items = Array.from(viewport.children) as HTMLElement[];
    sync.current = () => {
      const origin = items[0].offsetLeft;
      let nearest = 0;
      for (let index = 1; index < items.length; index++) {
        if (Math.abs(items[index].offsetLeft - origin - viewport.scrollLeft) <
            Math.abs(items[nearest].offsetLeft - origin - viewport.scrollLeft)) nearest = index;
      }
      current.current = nearest;
      setActive(nearest);
      // A manually started clip must not keep playing on another slide.
      items.forEach((item, index) => { if (index !== nearest) item.querySelector("video")?.pause(); });
    };
    function resize() {
      const left = items[current.current].offsetLeft - items[0].offsetLeft;
      viewport!.scrollTo({ left, behavior: "instant" });
    }
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
    observer?.observe(viewport);
    window.addEventListener("resize", resize);
    setReady(true);
    sync.current();
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", resize);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    // Leave the lightbox and native video keyboard controls alone.
    if (event.target !== event.currentTarget) return;
    let target: number;
    switch (event.key) {
      case "ArrowLeft": target = current.current - 1; break;
      case "ArrowRight": target = current.current + 1; break;
      case "Home": target = 0; break;
      case "End": target = slides.length - 1; break;
      default: return;
    }
    event.preventDefault();
    goTo(target);
  }

  return (
    <div className="beyond-carousel" role="region" aria-roledescription="carousel" aria-label={label} data-ready={ready}>
      <div className="carousel-toolbar">
        <p className="carousel-count" role="status" aria-live="polite" aria-atomic="true">
          Slide {active + 1} of {slides.length}
          <span className="carousel-current-title"><span className="sr-only">: </span>{slides[active].label}</span>
        </p>
        <div className="carousel-buttons">
          <button type="button" aria-label="Previous slide" aria-controls={id} aria-disabled={active === 0} onClick={() => goTo(current.current - 1)}><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Next slide" aria-controls={id} aria-disabled={active === slides.length - 1} onClick={() => goTo(current.current + 1)}><span aria-hidden="true">→</span></button>
        </div>
      </div>
      <p id={`${id}-instructions`} className="carousel-hint">Scroll horizontally to explore.{ready && <span className="sr-only"> Focus the slides to use Left and Right arrow keys, Home, or End. You can also use the Previous and Next buttons.</span>}</p>
      <div
        ref={track}
        id={id}
        className="carousel-track"
        tabIndex={0}
        role="group"
        aria-label="Slides"
        aria-describedby={`${id}-instructions`}
        onScroll={scheduleSync}
        onKeyDown={onKeyDown}
        onFocusCapture={(event) => {
          const item = (event.target as HTMLElement).closest(".carousel-slide");
          const index = Array.from(event.currentTarget.children).findIndex((child) => child === item);
          if (index >= 0) goTo(index, true);
        }}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="carousel-slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}>
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
}
