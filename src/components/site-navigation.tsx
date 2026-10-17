const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
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
