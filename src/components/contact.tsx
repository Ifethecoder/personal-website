import { contactCopy, contactDetails } from "@/content/contact";
import { SectionHeading } from "./section-heading";

export function Contact() {
  const links = [
    ...(contactDetails.email ? [{ label: "Email me", href: `mailto:${contactDetails.email}`, detail: contactDetails.email, download: false }] : []),
    ...(contactDetails.github ? [{ label: "GitHub", href: contactDetails.github, detail: null, download: false }] : []),
    ...(contactDetails.linkedin ? [{ label: "LinkedIn", href: contactDetails.linkedin, detail: null, download: false }] : []),
    ...(contactDetails.resume ? [{ label: contactDetails.resume.startsWith("/") ? "Download résumé" : "View résumé", href: contactDetails.resume, detail: null, download: contactDetails.resume.startsWith("/") }] : []),
  ];

  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading" tabIndex={-1}>
      <div className="contact-panel">
        <div className="contact-intro">
          <SectionHeading id="contact-heading" number="05" label="Let's connect" title={contactCopy.heading} />
          <span className="contact-symbol" aria-hidden="true">↗</span>
        </div>
        <p className="contact-invitation">{contactCopy.invitation}</p>
        {links.length > 0 && (
          <ul className="contact-links" aria-label="Ways to connect">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} download={link.download || undefined}>
                  <span><span className="contact-link-label">{link.label}</span>{link.detail && <span className="contact-link-detail">{link.detail}</span>}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
