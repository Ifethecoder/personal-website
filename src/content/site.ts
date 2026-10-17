export const site = {
  name: "Ifeoluwa",
  title: "Ifeoluwa — Software Engineering, AI & Community",
  description: "Ifeoluwa is a Minerva University Computer Science and Business student, two-time Amazon SDE intern, and builder of FireSight and Yooni.",
};

export function getSiteOrigin(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return undefined;
  const url = new URL(configured);
  if (!["https:", "http:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL must be a public HTTP(S) origin without credentials.");
  }
  return new URL(url.origin);
}
