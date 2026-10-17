import { Contact } from "@/components/contact";
import { BeyondCode } from "@/components/beyond-code";
import { SiteNavigation } from "@/components/site-navigation";
import { Experience } from "@/components/experience";
import { FeaturedProjects } from "@/components/featured-projects";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { contactDetails } from "@/content/contact";
import { site } from "@/content/site";

export default function Home() {
  return (
    <div className="page-shell mx-auto flex min-h-svh max-w-7xl flex-col px-6 sm:px-10 lg:px-16">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header flex flex-wrap items-center justify-between gap-4 py-6 sm:py-8">
        <a href="/" aria-label="Personal portfolio home" className="wordmark inline-flex items-center gap-3 text-sm font-semibold">
          <span className="brand-symbol" aria-hidden="true">↗</span> A personal space
        </a>
        <SiteNavigation />
        <ThemeSwitcher />
      </header>
      <main id="main" className="flex-1" tabIndex={-1}>
        <Hero />
        <About />
        <FeaturedProjects />
        <Experience />
        <BeyondCode />
        <Contact />
      </main>
      <footer className="site-footer flex flex-wrap items-center justify-between gap-3 py-6 text-xs muted">
        <p>{site.name} · Curiosity in motion.</p>
        <nav aria-label="Footer contact links" className="footer-links">
          {contactDetails.email && <a href={`mailto:${contactDetails.email}`}>Email</a>}
          {contactDetails.github && <a href={contactDetails.github}>GitHub</a>}
          {contactDetails.linkedin && <a href={contactDetails.linkedin}>LinkedIn</a>}
        </nav>
      </footer>
    </div>
  );
}
