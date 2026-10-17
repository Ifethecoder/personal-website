# Personal media inventory

The retained inventory contains 10 original images, a generated video poster, and one compact web video. The unused community-call screenshot and original MOV were removed; displayed photographs are unchanged. `src/content/assets.ts` is the central asset map. Images use static imports, so Next.js checks paths at build time and supplies dimensions. The portrait also includes a tiny blur thumbnail derived from its original, since automatic blur generation skips uppercase JPG extensions. Components should select media from this map rather than duplicate paths.

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
| `images/highlights/photoWithSamAltman.jpeg` | 5712 × 4284 | 4.20 MB | Beyond: OpenAI Student Collective Builder Party |
| `images/certifications/aws-certified-ai-practitioner.png` | 600 × 600 | 0.05 MB | Beyond: certifications |
| `images/soccer/soccer_image.jpeg` | 5712 × 4284 | 5.59 MB | About Me and Beyond: soccer |
| `videos/soccer-web.mp4` | 1280 × 720 | 0.32 MB | User-controlled silent soccer clip |
| `images/soccer/soccer-poster.jpg` | 1280 × 720 | 0.08 MB | Poster extracted from the web clip |

Pixel sizes above are stored dimensions; several photos carry orientation metadata. Next.js optimizes images with that metadata. Raw video frames are upright; the original’s -90° display metadata incorrectly turns them sideways. The web derivative overrides this rotation. Retained photographs were not altered or recompressed.

## Current selection and loading

The homepage selects the portrait for the hero, the soccer group photo for About Me, two hackathon photos for Featured Projects, and both Amazon internship photos beside their respective Experience entries. The tactical SVG remains secondary to the hero portrait. Beyond the Code adds the ColorStack presentation, Talk to Users hackathon, OpenAI event, and soccer photos. The AWS badge appears in the certifications panel. The unused community-call screenshot and original MOV have been removed from the files and asset mapping. The soccer card includes the silent web MP4 in a native disclosure with manual playback. About, project, experience, and Beyond images load lazily.

FireSight now uses `yc_hackathon.jpeg`, supplied by the owner as the actual YC event photo. The Talk to Users image now appears in Beyond the Code as a general hackathon photo; the Featured Projects event photos are not repeated there.

The hero uses `next/image`, a responsive `sizes` value, preload for the primary image, a static-import blur placeholder, and its natural portrait proportions, capped at 360 pixels wide without cropping. Next.js serves optimized responsive image variants; it does not require downloading the full original photo for the hero.

For future photos, use `next/image` with intrinsic dimensions or a sized `fill` container, the mapped alt text, and an accurate `sizes` value. Leave secondary photos lazy-loaded. Use `object-contain` for the certification badge and screenshots so text is not cropped.

## Certification assets

The AWS badge is displayed using its existing asset. Udacity AI Programming Nanodegree is shown as owner-supplied text with a decorative typographic mark; no Udacity certificate image or verification URL was present, and none is fabricated. Supply an actual certificate image if you want to add one later. No credential verification links are invented.

## Larger photo views

Beyond photos use responsive editorial crops. Each thumbnail links to its actual image, preserving a no-JavaScript fallback. With JavaScript, a native modal dialog shows the complete image via `next/image` with `object-contain`. Larger variants load only while a viewer is open. Escape and Close return focus to the initiating photo. No original files are altered.

## Video policy and next steps

Sprint 5A verified orientation by comparing raw frames with metadata-rotated frames: the pitch, goalposts, and player are upright in the unrotated landscape frames. FFmpeg overrides the incorrect display rotation, scales to 1280 × 720, encodes H.264/yuv420p at CRF 26 with faststart, strips metadata, and omits audio. The 7.6-second MP4 is 318,960 bytes (about 97.5% smaller than the original); the extracted JPEG poster is about 83 KB. The unused original MOV is no longer retained.

The web copy is intentionally silent and has a visible description of the action. Native controls, inline playback, `preload="none"`, and no autoplay keep playback user-controlled under all motion preferences. Opening the disclosure does not start playback. The MP4 is the only video retained.

To regenerate the poster:

```sh
ffmpeg -ss 3 -i public/videos/soccer-web.mp4 -frames:v 1 -q:v 4 public/images/soccer/soccer-poster.jpg
```


Provide captions and context for future photo sections. Several large originals contain location metadata; consider metadata-cleaned web derivatives before public use. Files under `public/` remain directly accessible even when no component renders them.
