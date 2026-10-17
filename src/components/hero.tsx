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
          {portrait ? (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              fill
              sizes="(min-width: 1280px) 480px, (min-width: 1024px) 42vw, (min-width: 512px) 448px, calc(100vw - 48px)"
              preload
              className="object-cover"
            />
          ) : (
            <div className="portrait-empty absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="portrait-corner corner-top" aria-hidden="true" />
              <span className="portrait-corner corner-bottom" aria-hidden="true" />
              <span className="eyebrow">The person behind the work</span>
              <span className="portrait-label">Portrait to come.</span>
            </div>
          )}
          <figcaption className="portrait-caption absolute bottom-5 left-6 right-6 flex justify-between gap-4 text-xs">
            <span>Beyond the screen</span><span aria-hidden="true">01 / 01</span>
          </figcaption>
        </figure>
        <PassingGraphic />
      </div>
    </section>
  );
}
