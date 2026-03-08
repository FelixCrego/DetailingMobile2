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

const siteUrl = "https://precisionautospa.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.business.name} | Mobile Auto Detailing in Florida`,
    template: `%s | ${siteConfig.business.name}`,
  },
  description: siteConfig.business.description,
  keywords: [
    "mobile detailing florida",
    "luxury car detailing",
    "ceramic coating florida",
    "paint correction near me",
    "auto detailing miami",
    "concierge car detailing",
    ...siteConfig.serviceAreas.map((city) => `auto detailing ${city.toLowerCase()}`),
  ],
  alternates: {
    canonical: "/",
  },
  category: "Automotive Services",
  openGraph: {
    title: `${siteConfig.business.name} | Luxury Mobile Detailing`,
    description: siteConfig.business.description,
    url: siteUrl,
    siteName: siteConfig.business.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600",
        width: 1600,
        height: 900,
        alt: "Precision Auto Spa luxury detailing showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business.name} | Perfection. Delivered.`,
    description: siteConfig.business.description,
    images: ["https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1600"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-zinc-950 font-[family-name:var(--font-inter)] text-white antialiased selection:bg-amber-300 selection:text-zinc-900">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/60 backdrop-blur-md">
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
