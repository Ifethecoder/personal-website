import type { Metadata } from "next";
import { getSiteOrigin, site } from "@/content/site";
import "./globals.css";

const origin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: origin,
  title: site.title,
  description: site.description,
  authors: [{ name: site.name }],
  ...(origin ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: `${site.name} — Portfolio`,
    type: "website",
    ...(origin ? { url: origin } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
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
