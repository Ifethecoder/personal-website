# Launch readiness

No push or deployment is authorized by Sprint 5A. This document records missing publication inputs without inventing them.

## Contact content still needed

Set the owner-confirmed values in `src/content/contact.ts`:

- Public email address.
- Public GitHub profile URL. The Git remote identifies a repository owner, but no explicit profile contact record is stored in the app.
- Public LinkedIn profile URL.
- Optional résumé: add the actual file under `public/` and use its exact public URL, or provide a real hosted résumé URL. Local files get a download link.

Contact uses the verified email and profile links; email also provides a clipboard button and manual-copy fallback. Unset values produce no links, buttons, invented addresses, or empty `href` attributes. The section should have at least one real contact method before launch. No backend form is implemented.

## Media

The hero passing animation was removed at the owner’s request. The soccer group photo appears once in About Me; Beyond the Code uses the user-controlled soccer video as its primary visual.

- Displayed photographs remain untouched. The unused community-call screenshot and original MOV were removed; the optimized MP4 and poster are retained.
- The soccer web derivative is upright, silent, about 319 KB, and user-controlled; its poster is about 83 KB. The visible player does not request the MP4 before Play and offers native play/pause controls.
- Udacity AI Programming Nanodegree uses the owner-supplied Udacity logo beside its title; no verification URL is invented.

## Production origin and metadata

Set `NEXT_PUBLIC_SITE_URL` to the actual HTTPS origin in the deployment environment, using `.env.example` as the configuration reference. No production domain is assumed. Local builds succeed without it; Next.js then uses its development fallback for absolute social-image URLs, so those URLs are not production-ready until this value is supplied.

With a real origin configured, the app emits a root canonical URL, Open Graph URL, and absolute social image URLs. Without it, no canonical or Open Graph page URL is invented. The generated 1200 × 630 social preview uses only the supplied first name, approved interests, and Minerva course of study; no social handle is fabricated. The SVG favicon reuses the existing circle-and-arrow header mark.

Do not publish while the origin or public contact method is missing. A résumé remains an optional content addition.


## Sprint 5A validation

- ESLint, TypeScript, and the production build pass. The build's missing `metadataBase` warning is expected until the real origin is configured.
- Headless Chrome checked 1440, 768, 390, and 320 px viewports: no horizontal overflow, complete image loading, preserved portrait proportions, alternating projects, responsive timeline, photo journal, and Contact layout.
- Keyboard checks pass for all five section links, skip link, theme switch and persistence, photo viewer focus containment/Escape/restoration, and native soccer playback. Smooth scrolling is disabled with reduced motion; reveal content remains visible without JavaScript.
- Axe reported zero violations in light and dark themes (44 rules passed each). Its manual contrast-review results cover a decorative symbol and the two timeline dates; the dates use accent on background with 5.96:1 light and 9.97:1 dark contrast.
- All 12 distinct published navigation/asset links resolve. Social preview and favicon routes return HTTP 200. There are no public external contact links to validate yet.
- Video requests begin only on user playback; the visible player has native controls and no autoplay. Full photo viewer images mount only when opened. Portfolio photos use responsive Next.js image optimization; originals remain preserved.
- No additional runtime dependencies were introduced. Chrome checks do not replace testing on physical mobile devices or with a screen reader.
