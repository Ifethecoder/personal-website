const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
] as const;

export function SiteNavigation() {
  return (
    <nav className="site-nav order-3 basis-full lg:order-none lg:ml-auto lg:basis-auto" aria-label="Main navigation">
      <ul>
        {sectionLinks.map((link) => (
          <li key={link.href}><a href={link.href}>{link.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}
