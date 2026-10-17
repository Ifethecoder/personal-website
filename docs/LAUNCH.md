# Launch readiness

No push or deployment is authorized by Sprint 5A. This document records missing publication inputs without inventing them.

## Contact content still needed

Set the owner-confirmed values in `src/content/contact.ts`:

- Public email address.
- Public GitHub profile URL. The Git remote identifies a repository owner, but no explicit profile contact record is stored in the app.
- Public LinkedIn profile URL.
- Optional résumé: add the actual file under `public/` and use its exact public URL, or provide a real hosted résumé URL. Local files get a download link.

The Contact section currently displays a short “Contact details coming soon” message. Unset values produce no links, buttons, invented addresses, or empty `href` attributes. The section should have at least one real contact method before launch. No backend form is implemented.

## Media

- The original photos and MOV remain untouched.
- The soccer web derivative is upright, silent, about 319 KB, and user-controlled; its poster is about 83 KB. The player does not request the MP4 before Play and pauses on collapse.
- Udacity AI Programming Nanodegree currently uses text because no certificate image exists. Adding an image is optional.
