import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../site.config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.business.name} | ${siteConfig.business.tagline}`,
  description: siteConfig.business.description,
  openGraph: {
    title: `${siteConfig.business.name} | Luxury Mobile Detailing`,
    description: siteConfig.business.description,
    siteName: siteConfig.business.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[family-name:var(--font-inter)] bg-zinc-950 text-white antialiased">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/50 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <div>
              <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight">
                {siteConfig.business.name}
              </p>
              <p className="text-xs uppercase tracking-[0.22em] text-amber-300/90">
                Mobile Detailing Atelier
              </p>
            </div>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-200"
            >
              {siteConfig.contact.cta}
            </a>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
