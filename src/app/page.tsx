import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="page-shell mx-auto flex min-h-svh max-w-7xl flex-col px-6 sm:px-10 lg:px-16">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header flex items-center justify-between gap-4 py-6 sm:py-8">
        <a href="/" aria-label="Personal portfolio home" className="wordmark inline-flex items-center gap-3 text-sm font-semibold">
          <span className="brand-symbol" aria-hidden="true">↗</span> A personal space
        </a>
        <ThemeSwitcher />
      </header>
      <main id="main" className="flex-1" tabIndex={-1}>
        <Hero />
        <About />
      </main>
      <footer className="site-footer flex flex-wrap justify-between gap-3 py-6 text-xs muted">
        <p>A work in progress, with intention.</p>
        <p>Build · Connect · Play</p>
      </footer>
    </div>
  );
}
