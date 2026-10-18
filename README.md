# Personal portfolio

Next.js App Router, TypeScript, and Tailwind CSS. The homepage includes the hero, About Me, exactly two Featured Projects (FireSight and Yooni), an Amazon internship timeline, and a Beyond the Code photo carousel with a soccer bonus round. Content comes from the owner's brief and existing personal media. Beyond covers ColorStack Minerva leadership, hackathons, the OpenAI event, soccer, and the two supplied certifications. Contact and the footer use the owner-verified email, GitHub, and LinkedIn profiles. No résumé link is displayed. See [launch readiness](docs/LAUNCH.md) for the final audit.

## Development

Use Node.js 22.13+ for the application and included lint tooling.

```sh
npm install
npm run dev
```

Open the local URL printed by Next.js.

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

## Structure

- `src/app/`: layout, metadata, page, shared color tokens, and responsive styles.
- `src/components/`: hero, About, reusable project showcases, experience timeline, section navigation, headings, tags, scroll reveals, and theme switcher.
- `src/content/assets.ts`: the complete typed image/video library with verified paths and visual alt text.
- `src/content/portfolio.ts`: the selected homepage portrait from that library.
- `src/content/about.ts`: the supplied biography and interests.
- `src/content/site.ts`: approved title/description and optional real production origin.
- `src/app/opengraph-image.tsx` and `icon.svg`: generated social preview and favicon using the green circle brand motif.
- `src/content/contact.ts`: contact copy and owner-confirmed email/profile/résumé values; unset values never render dead links.
- `src/content/beyond.ts`: owner-supplied personal stories and selections from the asset library.
- `src/content/soccer.ts`: bonus-round interface copy; `soccer-bonus.tsx` handles the small penalty interaction and `penalty-pitch.tsx` draws the SVG pitch.
- `src/content/certifications.ts`: supplied credential names and the existing AWS badge. The Udacity credential uses the owner-supplied Udacity logo. No verification links are invented.
- `src/components/photo-viewer.tsx`: native dialog with on-demand larger images, Escape handling, focus restoration, and a real-image link fallback.
- `src/content/experience.ts`: latest-first internship descriptions, approved technologies, and scoped impact metrics.
- `src/components/experience.tsx` and `experience-entry.tsx`: a static, reusable timeline with a lazily loaded photo for each internship. Each frame reserves the photo’s natural orientation.
- `src/content/projects.ts`: typed project descriptions, events, tags, image selections, and highlights. Add future projects here; no speculative demo or repository URLs are present.
- `public/images/`: profile, experience, hackathons, community, highlights, certifications, and soccer.
- `public/videos/`: the silent web MP4 used by the player.
- [Asset guide](public/ASSETS.md): exact filenames, sizes, image selections, and photo context still needing confirmation.

## Visual foundation

Warm neutral backgrounds, forest green accents, editorial system serif headings, and system sans-serif body text. All fonts are local system fonts; no external font requests. Edit CSS variables in `src/app/globals.css` to refine the identity.

The theme button cycles System → Light → Dark. The default is Dark, including without JavaScript or storage access. System follows the operating system when explicitly selected; saved choices persist when local storage is available, synchronize between tabs, and apply before paint. Theme controls remain usable if storage is blocked.

The hero pairs editorial text with the portrait. Keyboard navigation includes visible focus styles and a skip link.

Section headings and project showcases use the shared IntersectionObserver reveal without an animation library. Server-rendered content stays visible without JavaScript or observer support. Elements below the viewport reveal once, and reduced motion disables entrance and hover transforms. Informational tags and project cards have no click actions or artificial tab stops; the theme and native video controls remain keyboard accessible.

Project images use `object-contain` in reserved-size frames to preserve complete photographs, including orientation metadata. Only the hero portrait is preloaded; other photos are lazy-loaded. FireSight uses the owner-confirmed YC hackathon photo; the Talk to Users photo remains preserved in the asset library.

The soccer bonus round below the carousel reveals a silent, upright, 1280 × 720 MP4 with a poster and reserved 16:9 proportions. The soccer group photo appears only in About Me. Video uses native controls and `preload="none"`, with no autoplay. The unused original MOV and community-call screenshot have been removed; the 319 KB web video and its poster remain. The asset guide records the retained media.

The sticky header links to About, Experience, Projects, Beyond, and Contact using native anchors. A subtle translucent background and blur appear after scrolling. Its measured height sets the root scroll padding so desktop and wrapped mobile navigation leave section headings visible; a CSS fallback also covers no-JavaScript browsing. Photo dialogs stay in the browser’s top layer above the header, and the skip link remains above navigation. Every navigation target is programmatically focusable. Enhanced link activation focuses without scrolling first, then scrolls once to the section, preventing competing focus and anchor animations. Native anchor URLs remain available without JavaScript and for direct section links. A passive scroll listener, coalesced with animation frames, tracks the section in view and applies `aria-current="location"` with a subtle green underline. The underline and heading reveals respect reduced motion. Initial section fragments and browser hash changes retain native anchor behavior; no scrolling dependency is used.

Before deployment, set the real `NEXT_PUBLIC_SITE_URL` so canonical and social-image URLs use the correct origin. No production domain is assumed; local builds without it use Next.js’s development fallback for the social image. See [launch readiness](docs/LAUNCH.md) for the publication checklist.

Email uses a standard `mailto:` link, which requires a configured mail application or browser handler. Contact also offers a copy-email button with a live confirmation and a selectable-address fallback if clipboard access is blocked.

Beyond the Code has four slides: the OpenAI event first, ColorStack Minerva, hackathons, and certifications. The soccer video sits in the bonus round below the carousel. Native horizontal overflow and scroll snap support touch swipes and no-JavaScript browsing without intercepting vertical scrolling. A visible “Swipe or use arrows to explore” hint and partial next-slide preview from 360px wide make horizontal browsing apparent. Below that width, full-width slides keep text readable. Hydrated controls show the current slide/total and provide prominent Previous/Next buttons; the focusable track supports Left/Right and Home/End. Tabbing to a photo reveals its slide and lightboxes retain their existing focus behavior. No automatic rotation or dependency is added. Reduced motion makes button navigation immediate.

The bonus round uses a short CSS penalty animation, a polite goal announcement, and a native highlights disclosure. “Skip to highlights” works without JavaScript. Reduced motion completes the shot immediately; replay resets the ball and pauses/rewinds the clip. Hiding the highlights, leaving the video viewport, or hiding the browser tab pauses playback. The reveal reserves the player’s space and never starts playback automatically.

## Manual browser checks

- Check 320px, 390px, 768px, and 1440px widths for overflow, complete photos, stacked mobile sections, and alternating desktop projects.
- Cycle all themes, reload, and change the system appearance while System is selected.
- Navigate with the keyboard and verify focus visibility, skip link, theme button and section navigation. Open a direct section URL, scroll between sections, and verify the active underline follows the viewport. Activate Experience and check the URL fragment, scroll position, and section focus.
- Move through all four Beyond slides using arrows, Home/End, touch swipes, and the native scrollbar. Check vertical page scrolling remains available and the slide count updates.
- Take a shot, replay, and skip directly to highlights with keyboard and touch. Confirm the goal announcement, stable layout, immediate reduced-motion result, and no automatic video playback. Play the clip, then hide it or replay and verify it pauses; replay also rewinds. With JavaScript disabled, open the native highlights disclosure.
- Open Beyond photos with the keyboard; verify full images, focus containment, Escape/Close, and focus restoration. Disable JavaScript and verify the image links still work.
- Scroll through both projects; then enable reduced motion or disable JavaScript and verify all project content remains visible.
- Verify the full portrait stays visible at mobile and desktop widths, with alternative text, blur placeholder, and responsive loading. The soccer group photo appears in About Me and two hackathon photos appear in Projects; both Amazon photos appear beside their matching Experience entries; remaining media stays reserved.

Development and production scripts use Next.js’s Webpack option because Turbopack’s PostCSS worker could not bind its process port in this environment.

## Vercel deployment (when authorized)

1. Push the reviewed commits only when approved, then import the GitHub repository into Vercel. Use the Next.js framework preset, repository root, Node.js 22.x, `npm ci`, and `npm run build`; keep the default output directory. No backend services or secrets are required.
2. If the final domain is unknown, leave `NEXT_PUBLIC_SITE_URL` unset for the first deployment. It builds successfully, but social-image URLs use the localhost fallback and canonical/page Open Graph URLs are omitted. Treat this first deployment as a configuration check before sharing it.
3. After Vercel assigns the stable production `.vercel.app` domain, copy its full HTTPS origin from the project's Domains page. In **Settings → Environment Variables**, add `NEXT_PUBLIC_SITE_URL` for **Production** with that exact origin. Do not use a deployment-specific preview URL or include a path, query, or fragment.
4. Redeploy the production deployment so the build reads the new value. Environment changes do not update existing deployments. For Preview deployments, optionally use the same stable production origin so previews do not advertise temporary canonical URLs.
5. Verify the page's canonical and `og:url` match the assigned origin; `og:image` and `twitter:image` must use that origin and return the generated PNG. Check `/opengraph-image`, `/icon.svg`, contact links, navigation, and soccer playback on the live site.

`.env.example` documents the variable; local `.env.local` files stay untracked. A malformed configured value fails clearly rather than emitting incorrect metadata. No production domain is hardcoded. See [Vercel environment variable documentation](https://vercel.com/docs/environment-variables/managing-environment-variables) for configuration and redeployment behavior.
