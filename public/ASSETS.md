# Personal media inventory

Inspected all 10 images and sampled the single video. The existing folders are already logical; all originals and filenames are preserved. `src/content/assets.ts` is the central asset map. Images use static imports, so Next.js checks paths at build time and supplies dimensions. The portrait also includes a tiny blur thumbnail derived from its original, since automatic blur generation skips uppercase JPG extensions. Components should select media from this map rather than duplicate paths.

Alt text describes visible content only. Captions are `null` throughout; event dates, roles, outcomes, names, and stories still need the owner's confirmation. Keys derived from filenames are organizational identifiers, not verified biographical claims.

| Original path under `public/` | Stored pixels | Approx. size | Selection |
| --- | --- | --- | --- |
| `images/profile/profilePic.JPG` | 2432 × 3648 | 1.23 MB | Hero portrait |
| `images/experience/Amazon'25.jpeg` | 5712 × 4284 | 8.03 MB | Reserved |
| `images/experience/Amazon'26.jpeg` | 5712 × 4284 | 3.36 MB | Reserved |
| `images/hackathons/talkToUsersHackathon.JPG` | 1200 × 1600 | 0.26 MB | Reserved |
| `images/hackathons/treehacks.jpeg` | 5712 × 4284 | 4.01 MB | Reserved |
| `images/community/colorstack_minerva.JPG` | 6000 × 4000 | 13.24 MB | Reserved |
| `images/community/colorstack_minerva2.jpeg` | 1920 × 1000 | 0.14 MB | Reserved |
| `images/highlights/photoWithSamAltman.jpeg` | 5712 × 4284 | 4.20 MB | Reserved |
| `images/certifications/aws-certified-ai-practitioner.png` | 600 × 600 | 0.05 MB | Reserved |
| `images/soccer/soccer_image.jpeg` | 5712 × 4284 | 5.59 MB | About Me |
| `videos/soccer_video.mov` | 1920 × 1080 | 12.61 MB | Reserved; 7.6 seconds, H.264 with audio |

Pixel sizes above are stored dimensions; several photos carry orientation metadata. Next.js optimizes images with that metadata. The sampled video appears sideways; correct orientation in a browser-ready derivative before displaying it. No original was overwritten, renamed, or recompressed.

## Current selection and loading

The homepage selects the portrait for the hero and the soccer group photo for About Me. The tactical SVG remains secondary to the hero portrait. All other photos, the badge, and the video remain reserved; the page does not request them.

The hero uses `next/image`, a responsive `sizes` value, preload for the primary image, a static-import blur placeholder, and its natural portrait proportions, capped at 360 pixels wide without cropping. Next.js serves optimized responsive image variants; it does not require downloading the full original photo for the hero.

For future photos, use `next/image` with intrinsic dimensions or a sized `fill` container, the mapped alt text, and an accurate `sizes` value. Leave secondary photos lazy-loaded. Use `object-contain` for the certification badge and screenshots so text is not cropped.

## Video policy and next steps

There is no video player or video preload on the current homepage. Before using the MOV, create an orientation-corrected, compressed MP4/WebM derivative and a real poster frame while retaining the original. A future player should use controls, `playsInline`, `preload="none"`, and no autoplay. If a later design calls for autoplay, it must be muted and disabled for reduced motion. Add captions/transcription if the chosen audio contains meaningful speech.

Provide captions and context for future photo sections. The community call screenshot includes participant details; review those before selecting it for display. Several large originals contain location metadata; consider metadata-cleaned web derivatives before public use. Files under `public/` remain directly accessible even when no component renders them.
