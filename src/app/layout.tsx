import type { Metadata } from "next";
import portfolio from "@/data/portfolio.json";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolio.meta.title,
  description: `${portfolio.meta.name} — ${portfolio.hero.role} portfolio`,
};

const themeInitScript = `
(function () {
  try {
    var r = document.documentElement;
    r.setAttribute('data-theme',  localStorage.getItem('pf-theme')  || 'dark');
    r.setAttribute('data-accent', localStorage.getItem('pf-accent') || 'lemon');
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-accent="lemon">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
