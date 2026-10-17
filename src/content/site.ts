export const site = {
  name: "Ifeoluwa Oyetimehin",
  title: "Ifeoluwa Oyetimehin — Software Engineering, AI & Community",
  description: "Ifeoluwa Oyetimehin is a Minerva University Computer Science and Business student, two-time Amazon SDE intern, and builder of FireSight and Yooni.",
};

export function getSiteOrigin(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return undefined;
  const invalid = () => new Error("NEXT_PUBLIC_SITE_URL must be an absolute HTTPS origin with no credentials, path, query, or fragment (HTTP is allowed for localhost).");
  let url: URL;
  try { url = new URL(configured); } catch { throw invalid(); }
  const local = ["localhost", "127.0.0.1", "[::1]"].includes(url.hostname);
  if ((url.protocol !== "https:" && !(url.protocol === "http:" && local)) ||
      url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw invalid();
  }
  return new URL(url.origin);
}
