import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "Ifeoluwa — software engineering, voice AI, and community";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "64px 72px", background: "#f6f5ef", color: "#242d28", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 28 }}>
        <svg width="48" height="48" viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#426647" />
          <path d="M9 23 23 9M12 9h11v11" fill="none" stroke="#f6f5ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{site.name} · Portfolio</span>
      </div>
      <div style={{ display: "flex", marginTop: 74, fontSize: 86, lineHeight: 1.1, fontWeight: 700, letterSpacing: "-4px" }}>Curiosity in motion.</div>
      <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#426647" }}>Software engineering · Voice AI · Community</div>
      <div style={{ display: "flex", marginTop: "auto", borderTop: "1px solid #d6d9ce", paddingTop: 28, fontSize: 23, color: "#606b61" }}>Minerva University · Computer Science &amp; Business</div>
    </div>,
    size,
  );
}
