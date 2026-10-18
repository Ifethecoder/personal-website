"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function SiteHeader({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let frame: number | null = null;
    function measure() {
      document.documentElement.style.setProperty("--site-header-height", `${element!.getBoundingClientRect().height}px`);
    }
    function update() {
      frame = null;
      element!.dataset.scrolled = String(window.scrollY > 8);
    }
    function onScroll() {
      if (frame === null) frame = requestAnimationFrame(update);
    }
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.removeProperty("--site-header-height");
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return <header ref={header} className="site-header flex flex-wrap items-center justify-between gap-4 py-6 sm:py-8" data-scrolled="false">{children}</header>;
}
