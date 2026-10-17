# Personal website foundation

Next.js App Router, TypeScript, and Tailwind CSS. This repository was empty at inspection. The homepage includes the hero, About Me, exactly two Featured Projects (FireSight and Yooni), and an Amazon internship timeline. Content comes from the owner's brief and existing personal media. Community, Certifications, Beyond Code, and Contact sections remain outside the current sprint.

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
- `src/components/`: hero, About, reusable project showcases, section headings, informational tags, scroll reveals, theme switcher, and tactical passing graphic.
- `src/content/assets.ts`: the complete typed image/video library with verified paths and visual alt text.
- `src/content/portfolio.ts`: the selected homepage portrait from that library.
- `src/content/about.ts`: the supplied biography and interests.
- `src/content/experience.ts`: latest-first internship descriptions, approved technologies, and scoped impact metrics.
- `src/components/experience.tsx` and `experience-entry.tsx`: a static, reusable timeline and lazily loaded Amazon photo.
- `src/content/projects.ts`: typed project descriptions, events, tags, image selections, and highlights. Add future projects here; no speculative demo or repository URLs are present.
- `public/images/`: profile, experience, hackathons, community, highlights, certifications, and soccer.
- `public/videos/`: the original soccer MOV, reserved for a future player.
- [Asset guide](public/ASSETS.md): exact filenames, sizes, image selections, and photo context still needing confirmation.

## Visual foundation

Warm neutral backgrounds, forest green accents, editorial system serif headings, and system sans-serif body text. All fonts are local system fonts; no external font requests. Edit CSS variables in `src/app/globals.css` to refine the identity.

The theme button cycles System → Light → Dark. The default follows the operating system; explicit choices persist when local storage is available, synchronize between tabs, and apply before paint. Theme controls remain usable if storage is blocked.

The decorative SVG uses a single CSS transform animation, no animation dependency, timer, or animation loop in JavaScript. Pause it with the adjacent button. `prefers-reduced-motion: reduce` renders a static graphic and hides the animation control. The SVG is hidden from screen readers; keyboard navigation includes visible focus styles and a skip link.

Scroll reveals use IntersectionObserver without an animation library. Server-rendered content stays visible without JavaScript or observer support. Elements below the viewport reveal once, and reduced motion disables entrance and hover transforms. Informational tags and project cards have no click actions or artificial tab stops; the theme and animation controls remain keyboard accessible.

Project images use `object-contain` in reserved-size frames to preserve complete photographs, including orientation metadata. Only the hero portrait is preloaded; other photos are lazy-loaded. FireSight uses the owner-confirmed YC hackathon photo; the Talk to Users photo remains preserved in the asset library.

## Manual browser checks

- Check 320px, 390px, 768px, and 1440px widths for overflow, complete photos, stacked mobile sections, and alternating desktop projects.
- Cycle all themes, reload, and change the system appearance while System is selected.
- Pause/resume the passing graphic, then enable the OS/browser reduced-motion preference and verify it stays static.
- Navigate with the keyboard and verify focus visibility, skip link, theme button, and pause control.
- Scroll through both projects; then enable reduced motion or disable JavaScript and verify all project content remains visible.
- Verify the full portrait stays visible at mobile and desktop widths, with alternative text, blur placeholder, and responsive loading. The soccer group photo appears in About Me and two hackathon photos appear in Projects; the 2026 Amazon photo appears in Experience; remaining media stays reserved.

Development and production scripts use Next.js’s Webpack option because Turbopack’s PostCSS worker could not bind its process port in this environment.
