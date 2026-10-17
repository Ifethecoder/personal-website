# Launch readiness

No push or deployment is authorized by Sprint 5A. This document records missing publication inputs without inventing them.

## Contact content still needed

Set the owner-confirmed values in `src/content/contact.ts`:

- Public email address.
- Public GitHub profile URL. The Git remote identifies a repository owner, but no explicit profile contact record is stored in the app.
- Public LinkedIn profile URL.
- Optional résumé: add the actual file under `public/` and use its exact public URL, or provide a real hosted résumé URL. Local files get a download link.

The Contact section currently displays a short “Contact details coming soon” message. Unset values produce no links, buttons, invented addresses, or empty `href` attributes. The section should have at least one real contact method before launch. No backend form is implemented.

## Media

- The original photos and MOV remain untouched.
- The soccer web derivative is upright, silent, about 319 KB, and user-controlled; its poster is about 83 KB. The player does not request the MP4 before Play and pauses on collapse.
- Udacity AI Programming Nanodegree currently uses text because no certificate image exists. Adding an image is optional.

## Production origin and metadata

Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS origin in the deployment environment, using `.env.example` as the configuration reference. No production domain is assumed. Local builds succeed without it; Next.js then uses its development fallback for absolute social-image URLs, so those URLs are not production-ready until this value is supplied.

With a real origin configured, the app emits a root canonical URL, Open Graph URL, and absolute social image URLs. Without it, no canonical or Open Graph page URL is invented. The generated 1200 × 630 social preview uses only the supplied first name, approved interests, and Minerva course of study; no social handle is fabricated. The SVG favicon reuses the existing circle-and-arrow header mark.

Do not publish while the origin or public contact method is missing. A résumé and Udacity certificate image remain optional content additions.
