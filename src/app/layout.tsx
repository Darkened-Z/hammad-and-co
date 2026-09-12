import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/lib/site";
import "./globals.css";

const display = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-madefor-display",
  display: "swap",
});

const text = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-madefor-text",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.descriptor}`,
    template: `%s — ${site.name}`,
  },
  description: site.metaDescription,
  openGraph: {
    title: `${site.name} — ${site.descriptor}`,
    description: site.metaDescription,
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${text.variable}`}>
      <head>
        {/* Without JS the observer never runs, so undo the hidden state. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-bone"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
