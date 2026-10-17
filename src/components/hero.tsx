import Image from "next/image";
import { portrait } from "@/content/portfolio";
import { PassingGraphic } from "./passing-graphic";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-grid grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-24">
      <div>
        <p className="eyebrow mb-7 flex items-center gap-3"><span className="accent-line" /> Personal portfolio</p>
        <h1 id="hero-heading" className="hero-title">Curiosity<br />in <span>motion.</span></h1>
        <p className="hero-description mt-7 max-w-md text-lg leading-relaxed sm:text-xl">
          A space for the things I build, the people I learn from, and the moments in between.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm muted">
          <span className="inline-flex items-center gap-2"><span className="status-dot" /> Taking shape</span>
          <span aria-hidden="true">/</span>
          <span>One connection at a time</span>
        </div>
      </div>
      <div className="visual-column mx-auto w-full max-w-md lg:max-w-none">
        <figure className="portrait-frame relative overflow-hidden">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            fill
            sizes="(min-width: 1280px) 511px, (min-width: 1024px) calc(47.62vw - 99.05px), (min-width: 496px) 448px, calc(100vw - 48px)"
            preload
            placeholder="blur"
            className="object-cover object-[50%_15%]"
          />
        </figure>
        <PassingGraphic />
      </div>
    </section>
  );
}
