"use client";

import { useEffect, useState } from "react";

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteNavigation() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionLinks.map((link) => document.getElementById(link.href.slice(1))).filter((section) => section !== null);
    let frame: number | null = null;
    let previous: string | null = null;

    function update() {
      frame = null;
      const boundary = Math.min(window.innerHeight * .25, 200);
      let next: string | null = null;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= boundary) next = section.id;
      }
      // A short final section may not reach the boundary before the page ends.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        next = sections.at(-1)?.id ?? null;
      }
      if (next !== previous) {
        previous = next;
        setActive(next);
      }
    }

    function schedule() {
      if (frame === null) frame = requestAnimationFrame(update);
    }

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("pageshow", schedule);
    window.addEventListener("load", schedule);
    schedule();
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("pageshow", schedule);
      window.removeEventListener("load", schedule);
    };
  }, []);

  return (
    <nav className="site-nav order-3 basis-full lg:order-none lg:ml-auto lg:basis-auto" aria-label="Main navigation">
      <ul>
        {sectionLinks.map((link) => (
          <li key={link.href}><a href={link.href} aria-current={active === link.href.slice(1) ? "location" : undefined}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
