# Launch readiness

The homepage features are complete. This cleanup does not authorize a push, deployment, or Git history rewrite. The repository can be built for deployment; production-origin configuration and the manual checks below remain before public launch.

## Verified identity and contact

`src/content/site.ts` and `src/content/contact.ts` use the owner-confirmed details:

- Name: Ifeoluwa Oyetimehin.
- Email: `ifeoluwa@uni.minerva.edu` (`mailto:` links in Contact and the footer).
- GitHub: https://github.com/Ifethecoder
- LinkedIn: https://www.linkedin.com/in/ifeoluwa-oyetimehin

The résumé is intentionally omitted; there is no missing résumé link to fix. Contact offers a copy-email button, live confirmation, and manual-copy fallback. Email links depend on the visitor having a mail handler configured. No backend form or credential verification links are present. The HTTPS profile links open in the same tab; no new-tab security attributes are needed.

## Current implementation

- Homepage order: Hero, About Me, Experience, Featured Projects, Beyond the Code, Contact. All five section navigation links use native anchors, visible keyboard focus, and an active-section indicator.
- The hero and footer retain “Building things. Making moves.” The requested social preview reads “Making things.” and “Making moves.” on two lines, with the existing typography and palette. The full-name title and description accurately describe the Minerva student, two Amazon internships, FireSight, and Yooni.
- Dark is the default, including without JavaScript or storage access. Saved Light, Dark, and System preferences remain supported and persist when storage is available.
- Beyond has four horizontal carousel slides: ColorStack Minerva, hackathons, the OpenAI event, and certifications. Native scrolling supports touch and no-JavaScript access; hydrated controls provide counts, Previous/Next, and keyboard Left/Right/Home/End. Photo lightboxes retain Escape handling, focus containment, and focus restoration.
- The soccer bonus round sits below the carousel. Its continuous 650 ms SVG/CSS shot reveals the native video player and announces the goal without moving focus. Replay resets the ball, pauses/rewinds the video, closes highlights, and returns focus to the shot button. The native “Skip to highlights” disclosure also works without JavaScript. Reserved player space prevents a reveal layout jump.
- Reduced motion completes the shot immediately and disables entrance/hover transforms. Hiding highlights, scrolling the player out of view, or hiding the browser tab pauses playback. There is no automatic carousel rotation or video autoplay.
- Diagonal arrows remain only on Email me, GitHub, and LinkedIn. The favicon and social preview use a green circle motif.

## Media and unresolved privacy/history findings

- The asset mapping is `src/content/assets.ts`; the inventory is [public/ASSETS.md](../public/ASSETS.md). Photos use responsive Next.js image optimization; the hero is preloaded, other photos are lazy-loaded, and lightbox images mount only when opened. The soccer group photo appears once in About Me.
- The silent, upright H.264 web video is `public/videos/soccer-web.mp4` (1280 × 720, about 319 KB, 7.6 seconds); its poster is `public/images/soccer/soccer-poster.jpg` (about 83 KB). Native controls, inline playback, `preload="none"`, and reserved 16:9 proportions remain. The MP4 is not requested before user playback.
- Displayed original photographs remain unchanged, consistent with the owner's earlier decision. The asset inventory still records location metadata in several originals. This sprint does not strip metadata or mark that finding resolved. Files under `public/` are directly accessible even when components use optimized variants.
- The unused participant screenshot `public/images/community/colorstack_minerva2.jpeg` and original `public/videos/soccer_video.mov` are absent from the current tree. Read-only history inspection confirms both files exist in commit `89609d2` (Add personal photos and soccer video), and normal commit `28ea9e0` removed them from the current tree. Deletion did not erase the historical files or their embedded metadata/participant details.
- No history rewrite or exhaustive privacy audit was performed. These historical-media findings remain open for the owner's publication decision. Publishing the Git history would make reachable originals available; deployment serves the current tree. Any future history cleanup requires separate approval.
- The AWS badge and owner-supplied Udacity logo remain beside their verified credential titles. No media was added, recompressed, or removed in this cleanup.

## Production origin and deployment configuration

No production domain is assumed. `NEXT_PUBLIC_SITE_URL` accepts an absolute HTTPS origin without credentials, a path, query, or fragment; HTTP is accepted only for local loopback testing. Invalid configured values fail clearly. `.env.example` documents the variable; actual `.env` files remain untracked.

1. After push/deployment approval, import the repository into Vercel using the Next.js preset, repository root, Node.js 22.x, `npm ci`, and `npm run build`.
2. If the stable production domain is not yet known, the first deployment can leave `NEXT_PUBLIC_SITE_URL` unset. Builds pass, but Next.js warns about the localhost social-image fallback; canonical and page Open Graph URLs are omitted. Treat that deployment as a configuration check before sharing.
3. Once Vercel assigns the stable `.vercel.app` domain, set `NEXT_PUBLIC_SITE_URL` to its exact HTTPS origin in the Production environment and redeploy so metadata is rebuilt.
4. Verify the canonical URL, `og:url`, absolute Open Graph/Twitter image URLs, `/opengraph-image` (1200 × 630 PNG), `/icon.svg`, contact links, navigation, and video on the live deployment.

## Final validation

- ESLint, TypeScript, and the production build pass. The only observed build warning is the expected missing-production-origin fallback described above.
- The final audit passed exact contact URL and metadata consistency checks, found no outdated/placeholder page text, decoded displayed images, and received HTTP 200 for all 29 discovered local asset/link URLs and the favicon. The generated Open Graph PNG returned HTTP 200 at 1200 × 630 and was visually inspected for complete, unclipped text.
- Chrome checks cover 320, 390, 768, and 1440 px layouts, both color themes, section navigation/direct anchors, carousel counts/controls/touch swipes, independent vertical scrolling, and photo lightbox keyboard behavior.
- Soccer checks cover shot/replay/skip, native playback, pause/rewind, mid-shot cancellation, focus preservation, stable reveal height, reduced motion, and no-JavaScript highlight access. No runtime exceptions were observed.
- Axe reported zero violations in both themes (45 rules passed each); automated results complement the manual keyboard checks and do not replace assistive-technology testing.
- GitHub returned HTTP 200. LinkedIn returned HTTP 999 to the automated request; its owner-confirmed URL remains unchanged and needs a manual browser check. Email link syntax is verified; delivery and mail-handler setup cannot be established by an HTTP check.
- No new dependencies, functionality, media, or generated application artifacts are included in the commit.

## Physical-device and publication checks still needed

- Test iPhone/iPad Safari and Android Chrome: touch carousel swipes without blocking vertical scrolling, image crops, native inline/fullscreen video controls, orientation, shot/replay, and skip.
- Test a real mail handler, the LinkedIn profile in a normal browser, and VoiceOver or another screen reader for section navigation, photo dialogs, and the goal announcement.
- After authorized deployment and production-origin configuration, inspect the live social preview and all public links. Social networks may cache an earlier preview and require a re-scrape.
- Retain the unresolved original-metadata and historical-media findings above when deciding whether to publish the repository history.

No push, deployment, or history rewrite was performed.
