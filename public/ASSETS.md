# Personal media inventory

Inspected all 11 images and sampled the single video. The existing folders are already logical; all originals and filenames are preserved. `src/content/assets.ts` is the central asset map. Images use static imports, so Next.js checks paths at build time and supplies dimensions. The portrait also includes a tiny blur thumbnail derived from its original, since automatic blur generation skips uppercase JPG extensions. Components should select media from this map rather than duplicate paths.

Alt text describes visible content only. Asset-level captions remain `null`; the About, project, and experience descriptions use the owner's approved sprint briefs, including the confirmed OpenAI event context in Sprint 4. Figure notes use the owner-confirmed event context or visible hackathon signage. Other dates, roles, identities, and stories still need confirmation. Keys derived from filenames are organizational identifiers, not verified biographical claims.

| Original path under `public/` | Stored pixels | Approx. size | Selection |
| --- | --- | --- | --- |
| `images/profile/profilePic.JPG` | 2432 × 3648 | 1.23 MB | Hero portrait |
| `images/experience/Amazon'25.jpeg` | 5712 × 4284 | 8.03 MB | Summer 2025 Experience entry |
| `images/experience/Amazon'26.jpeg` | 5712 × 4284 | 3.36 MB | Summer 2026 Experience entry |
| `images/hackathons/talkToUsersHackathon.JPG` | 1200 × 1600 | 0.26 MB | Beyond: hackathons & tech events |
| `images/hackathons/yc_hackathon.jpeg` | 5712 × 4284 | 5.90 MB | FireSight showcase |
| `images/hackathons/treehacks.jpeg` | 5712 × 4284 | 4.01 MB | Yooni showcase |
| `images/community/colorstack_minerva.JPG` | 6000 × 4000 | 13.24 MB | Beyond: ColorStack Minerva |
| `images/community/colorstack_minerva2.jpeg` | 1920 × 1000 | 0.14 MB | Reserved |
| `images/highlights/photoWithSamAltman.jpeg` | 5712 × 4284 | 4.20 MB | Beyond: OpenAI Student Collective Builder Party |
| `images/certifications/aws-certified-ai-practitioner.png` | 600 × 600 | 0.05 MB | Reserved |
| `images/soccer/soccer_image.jpeg` | 5712 × 4284 | 5.59 MB | About Me and Beyond: soccer |
| `videos/soccer_video.mov` | 1920 × 1080 | 12.61 MB | Reserved; 7.6 seconds, H.264 with audio |

Pixel sizes above are stored dimensions; several photos carry orientation metadata. Next.js optimizes images with that metadata. The sampled video appears sideways; correct orientation in a browser-ready derivative before displaying it. No original was overwritten, renamed, or recompressed.

## Current selection and loading

The homepage selects the portrait for the hero, the soccer group photo for About Me, two hackathon photos for Featured Projects, and both Amazon internship photos beside their respective Experience entries. The tactical SVG remains secondary to the hero portrait. Beyond the Code adds the ColorStack presentation, Talk to Users hackathon, OpenAI event, and soccer photos. The community call screenshot, AWS badge, and soccer video remain reserved. About, project, and experience photos load lazily.

FireSight now uses `yc_hackathon.jpeg`, supplied by the owner as the actual YC event photo. The Talk to Users image now appears in Beyond the Code as a general hackathon photo; the Featured Projects event photos are not repeated there.

The hero uses `next/image`, a responsive `sizes` value, preload for the primary image, a static-import blur placeholder, and its natural portrait proportions, capped at 360 pixels wide without cropping. Next.js serves optimized responsive image variants; it does not require downloading the full original photo for the hero.

For future photos, use `next/image` with intrinsic dimensions or a sized `fill` container, the mapped alt text, and an accurate `sizes` value. Leave secondary photos lazy-loaded. Use `object-contain` for the certification badge and screenshots so text is not cropped.

## Larger photo views

Beyond photos use responsive editorial crops. Each thumbnail links to its actual image, preserving a no-JavaScript fallback. With JavaScript, a native modal dialog shows the complete image via `next/image` with `object-contain`. Larger variants load only while a viewer is open. Escape and Close return focus to the initiating photo. No original files are altered.

## Video policy and next steps

There is no video player or video preload on the current homepage. Sprint 4 rechecked the original: it remains a 12.61 MB MOV with audio and -90° rotation metadata; no web-ready derivative or poster is present. Before using the MOV, create an orientation-corrected, compressed MP4/WebM derivative and a real poster frame while retaining the original. A future player should use controls, `playsInline`, `preload="none"`, and no autoplay. If a later design calls for autoplay, it must be muted and disabled for reduced motion. Add captions/transcription if the chosen audio contains meaningful speech.

Provide captions and context for future photo sections. The community call screenshot includes participant details; review those before selecting it for display. Several large originals contain location metadata; consider metadata-cleaned web derivatives before public use. Files under `public/` remain directly accessible even when no component renders them.
