import Image from "next/image";
import { certifications } from "@/content/certifications";

export function Certifications() {
  return (
    <div className="beyond-certifications" role="group" aria-labelledby="certifications-heading">
      <p className="eyebrow">Certifications</p>
      <h3 id="certifications-heading" className="certifications-title">Always learning.</h3>
      <ul className="credential-list">
        {certifications.map((certification) => (
          <li className="credential-card" key={certification.name}>
            {certification.image ? (
              <Image src={certification.image.src} alt={certification.image.alt} width={64} height={64} sizes="64px" className="credential-badge" />
            ) : (
              <span className="credential-monogram" aria-hidden="true">AI</span>
            )}
            <h4 className="credential-name">{certification.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
