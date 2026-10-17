# Personal media

Asset audit: this repository contained no app files or personal photos/videos at setup. No stock images or invented media paths have been added. The empty portrait frame is layout, not an image request.

## Directories and missing media

| Directory | Media still needed | Status |
| --- | --- | --- |
| `images/profile/` | Your primary portrait for the hero | Required to complete the portrait |
| `images/experience/` | Work, project, or team photos you choose to share | Optional; future section |
| `images/hackathons/` | Event, team, or demo photos | Optional; future section |
| `images/community/` | Community and volunteering photos | Optional; future section |
| `images/highlights/` | Selected personal moments | Optional; future section |
| `images/certifications/` | Certificate images, if you want to display them | Optional; future section |
| `images/soccer/` | Your soccer photos | Optional; future section |
| `videos/` | Short personal clips and poster images | Optional; no video player yet |

Keep the original filenames or choose your own meaningful names. No filename is prescribed here. `.gitkeep` files track otherwise empty folders.

## Connect the portrait

1. Add a real portrait under `public/images/profile/`. A portrait or square crop with room around the face works best; aim for at least 1000 pixels on the long edge and a compressed WebP, AVIF, or JPEG.
2. In `src/content/portfolio.ts`, replace `null` with an object whose `src` is the actual public URL of that file and whose `alt` describes your portrait. Public URLs omit the `public` prefix. Use only the file's exact existing name, including capitalization.
3. The hero already renders configured media through `next/image` with responsive sizes, an aspect-ratio frame, and preload. Adjust `object-position` in the hero if your portrait needs different framing.
4. Update the generic hero wording and metadata with your preferred name, introduction, and visual identity when ready.

Images in later sections should also use `next/image`, with intrinsic dimensions or a sized `fill` container, meaningful alt text (empty for purely decorative images), and accurate `sizes`. Only the hero portrait should be preloaded.

Before committing personal media, remove location metadata and confirm that you want it publicly accessible: all files in `public/` are served directly. For future clips, use compact MP4/WebM files, a real poster image, controls, and `preload="none"` or `"metadata"`; avoid autoplaying large videos. Reduced-motion preferences should also disable any future autoplay.
