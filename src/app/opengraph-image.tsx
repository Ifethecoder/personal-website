import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Ifeoluwa Oyetimehin — Making things. Making moves. Software Engineer · Builder · Curious Human";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 72px", background: "#151d19", color: "#edf0e5", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28 }}>
        <svg width="48" height="48" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#b3ce96" />
        </svg>
        <span>{site.name} · Portfolio</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 36, fontSize: 86, lineHeight: 1.1, fontWeight: 700, letterSpacing: "-4px" }}>
        <span>Making things.</span>
        <span style={{ color: "#b3ce96" }}>Making moves.</span>
      </div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#b3ce96" }}>Software Engineer · Builder · Curious Human</div>
      <div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #36453a", paddingTop: 28, fontSize: 23, color: "#adb9ac" }}>Minerva University · Computer Science &amp; Business</div>
    </div>,
    size,
  );
}
