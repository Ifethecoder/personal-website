# Launch readiness

The site is live and the homepage features are complete. Sprint 6 does not authorize a push, deployment, or Git history rewrite. Before an authorized update, confirm the existing production-origin setting and complete the manual checks below. No production domain is assumed in this repository.

## Verified identity and contact

`src/content/site.ts` and `src/content/contact.ts` use the owner-confirmed details:

- Name: Ifeoluwa Oyetimehin.
- Email: `ifeoluwa@uni.minerva.edu` (`mailto:` links in Contact and the footer).
- GitHub: https://github.com/Ifethecoder
- LinkedIn: https://www.linkedin.com/in/ifeoluwa-oyetimehin

The résumé is intentionally omitted; there is no missing résumé link to fix. Contact offers a copy-email button, live confirmation, and manual-copy fallback. Email links depend on the visitor having a mail handler configured. No backend form or credential verification links are present. The HTTPS profile links open in the same tab; no new-tab security attributes are needed.

## Current implementation

- Homepage order: Hero, About Me, Experience, Featured Projects, Beyond the Code, Contact. All five section links retain anchor URLs, visible keyboard focus, and an active-section indicator. The sticky header uses a translucent background and blur after scrolling. Its measured height provides responsive anchor spacing; enhanced link activation separates focus from scrolling to avoid competing browser scrolls. Native direct links and no-JavaScript navigation remain available.
- The hero and footer retain “Building things. Making moves.” The requested social preview reads “Making things.” and “Making moves.” on two lines, with a deep charcoal-green background, off-white primary text, soft green accents, and “Software Engineer · Builder · Curious Human” supporting text. The full-name title and description accurately describe the Minerva student, two Amazon internships, FireSight, and Yooni.
- Dark is the default, including without JavaScript or storage access. Saved Light, Dark, and System preferences remain supported and persist when storage is available.
- Beyond has four horizontal carousel slides: the OpenAI event first, ColorStack Minerva, hackathons, and certifications. It starts on the first slide, with prominent arrow controls, a visible count, a “Swipe or use arrows to explore” hint, and a partial next-slide preview from 360px wide. Native scrolling supports touch and no-JavaScript access; hydrated controls provide counts, Previous/Next, and keyboard Left/Right/Home/End. Photo lightboxes retain Escape handling, focus containment, and focus restoration.
- The soccer bonus round sits below the carousel. “Want to see me in action?”, “Score a goal to unlock my soccer highlights.”, and “Take a shot to unlock” explain the reward before interaction. A locked preview reuses the existing poster through Next.js Image. Its continuous 650 ms SVG/CSS shot reveals the native video player and announces the goal without moving focus. Replay resets the ball, pauses/rewinds the video, closes highlights, and returns focus to the shot button. The native “Skip to highlights” disclosure also works without JavaScript. Reserved player space prevents a reveal layout jump.
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

## Pre-launch validation baseline

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


## Sprint 6 validation and deployment considerations

- ESLint, TypeScript, and the production build pass. No dependencies or media files were added. Contact email, GitHub, LinkedIn, and résumé omission are preserved.
- Chrome checks at 320, 390, 768, and 1440 px verify sticky positioning, scrolling blur, active-section updates, keyboard activation, direct section anchors, and visible headings below the header.
- The OpenAI-first carousel starts at Slide 1 of 4. Checks cover prominent controls, next-slide previews where practical, keyboard arrows/Home/End, touch swipes, independent vertical scrolling, responsive resizing, and no-JavaScript browsing. Native modal photo viewers remain above the header and retain focus containment, Escape, and restoration. The current slide survives desktop/tablet/mobile resizing; navigation back through fragment history and the header’s return-to-top state also pass.
- The dark 1200 × 630 Open Graph PNG returned HTTP 200 and was visually inspected. The existing `NEXT_PUBLIC_SITE_URL` validation and metadata configuration are unchanged; no production domain was added or replaced. An additional build with a loopback test origin verified canonical, Open Graph, and Twitter image URLs and successful image responses. The configured-origin build has no metadata-base warning.
- Soccer checks cover exact reward copy, loaded locked poster, shot/replay/skip, stable reveal height in both themes, native playback without autoplay, pause/rewind, mid-shot cancellation, reduced motion, and no-JavaScript highlight access. Axe reported zero violations in both themes (45 rules passed each); no runtime exceptions were observed. Touch shot/replay/skip, offscreen pause, saved-theme persistence, blocked storage, and no-JavaScript dark defaults also pass.
- The unresolved media/history notes above are preserved. This sprint does not clean metadata or rewrite history.
- After an approved deployment, verify the live canonical and social URLs still use the configured production origin. Existing social-preview caches may need a re-scrape. Physical iOS/Safari and Android testing, screen-reader testing, mail-handler checks, and manual LinkedIn verification remain as listed above.
