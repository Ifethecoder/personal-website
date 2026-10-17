"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !("IntersectionObserver" in window)) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // SSR/no-JS content stays visible. Only animate elements below the viewport
    // at hydration, avoiding a flash for content already on screen.
    if (motion.matches || element.getBoundingClientRect().top < window.innerHeight) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) show();
    }, { threshold: 0.08 });

    function show() {
      element!.dataset.reveal = "visible";
      observer.disconnect();
    }
    function onMotionChange() {
      if (motion.matches) show();
    }

    element.dataset.reveal = "pending";
    observer.observe(element);
    // A keyboard user must never focus hidden content inside a future card.
    element.addEventListener("focusin", show);
    motion.addEventListener("change", onMotionChange);
    return () => {
      observer.disconnect();
      element.removeEventListener("focusin", show);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return <div ref={ref} className="reveal" data-reveal="visible">{children}</div>;
}
