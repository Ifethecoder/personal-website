import Image from "next/image";
import { portrait } from "@/content/portfolio";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="hero-grid grid items-center gap-14 py-14 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-x-20 lg:gap-y-0 lg:py-24">
      <div>
        <p className="eyebrow mb-7 flex items-center gap-3"><span className="accent-line" /> Personal portfolio</p>
        <h1 id="hero-heading" className="hero-title">Building things.<br /><span>Making moves.</span></h1>
        <p className="hero-description mt-7 max-w-md text-lg leading-relaxed sm:text-xl">
          A space for the things I build, the people I learn from, and the moments in between.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm muted">
          <span className="inline-flex items-center gap-2"><span className="status-dot" /> Always building</span>
          <span aria-hidden="true">/</span>
          <span>Never standing still</span>
        </div>
      </div>
      <div className="visual-column mx-auto w-full max-w-md lg:contents">
        <figure className="portrait-frame relative overflow-hidden lg:col-start-2 lg:row-start-1">
          <Image
            src={portrait.src}
            alt={portrait.alt}
            sizes="(min-width: 408px) 360px, calc(100vw - 48px)"
            preload
            placeholder="blur"
            className="block h-auto w-full"
          />
        </figure>
      </div>
    </section>
  );
}
