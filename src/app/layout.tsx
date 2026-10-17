import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal portfolio — Curiosity in motion",
  description: "A space for projects, people, and the moments in between.",
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:'system';}catch(e){document.documentElement.dataset.theme='system';}})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
