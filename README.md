# Personal website foundation

Next.js App Router, TypeScript, and Tailwind CSS. This repository was empty at inspection. The homepage includes the hero and About Me, using supplied biographical content and personal media. Additional sections are developed incrementally.

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
- `src/components/`: hero, theme switcher, and decorative tactical passing graphic.
- `src/content/assets.ts`: the complete typed image/video library with verified paths and visual alt text.
- `src/content/portfolio.ts`: the selected homepage portrait from that library.
- `src/content/about.ts`: the supplied biography and interests.
- `public/images/`: profile, experience, hackathons, community, highlights, certifications, and soccer.
- `public/videos/`: the original soccer MOV, reserved for a future player.
- [Asset guide](public/ASSETS.md): audit, missing images, and integration instructions.

## Visual foundation

Warm neutral backgrounds, forest green accents, editorial system serif headings, and system sans-serif body text. All fonts are local system fonts; no external font requests. Edit CSS variables in `src/app/globals.css` to refine the identity.

The theme button cycles System → Light → Dark. The default follows the operating system; explicit choices persist when local storage is available, synchronize between tabs, and apply before paint. Theme controls remain usable if storage is blocked.

The decorative SVG uses a single CSS transform animation, no animation dependency, timer, or animation loop in JavaScript. Pause it with the adjacent button. `prefers-reduced-motion: reduce` renders a static graphic and hides the animation control. The SVG is hidden from screen readers; keyboard navigation includes visible focus styles and a skip link.

## Manual browser checks

- Check 320px, 768px, and 1440px widths for overflow and balanced portrait placement.
- Cycle all themes, reload, and change the system appearance while System is selected.
- Pause/resume the passing graphic, then enable the OS/browser reduced-motion preference and verify it stays static.
- Navigate with the keyboard and verify focus visibility, skip link, theme button, and pause control.
- Verify the full portrait stays visible at mobile and desktop widths, with alternative text, blur placeholder, and responsive loading. The soccer group photo appears in About Me; other media stays reserved.

Development and production scripts use Next.js’s Webpack option because Turbopack’s PostCSS worker could not bind its process port in this environment.
