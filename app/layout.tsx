import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "../site.config";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

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
  keywords: [
    "mobile detailing",
    "ceramic coating",
    "paint correction",
    "luxury car detailing",
    "Florida auto detailing",
  ],
  metadataBase: new URL("https://precisionautospa.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${siteConfig.business.name} | Luxury Mobile Detailing`,
    description: siteConfig.business.description,
    siteName: siteConfig.business.name,
    locale: "en_US",
    type: "website",
    url: "https://precisionautospa.com",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.business.name} | Luxury Mobile Detailing`,
    description: siteConfig.business.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: siteConfig.business.name,
    description: siteConfig.business.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: siteConfig.serviceAreas,
    image: siteConfig.services[2].image,
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
      streetAddress: siteConfig.contact.address,
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
      siteConfig.socials.tiktok,
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-[family-name:var(--font-inter)] bg-zinc-950 text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <header className="sticky top-0 z-50 border-b border-cyan-100/15 bg-slate-950/65 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <a href="#home" className="group">
              <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight text-white">
                {siteConfig.business.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300 transition group-hover:text-cyan-200">
                Luxury Mobile Detailing
              </p>
            </a>

            <nav aria-label="Main navigation" className="hidden md:block">
              <ul className="flex items-center gap-7">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs font-medium uppercase tracking-[0.2em] text-slate-200 transition hover:text-cyan-200"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="rounded-full border border-cyan-200/35 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/25"
            >
              {siteConfig.contact.cta}
            </a>
          </div>
        </header>

        {children}

        <footer id="contact" className="border-t border-cyan-100/10 bg-slate-950/80">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
            <div>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
                {siteConfig.business.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Concierge-level mobile detailing for luxury, exotic, and performance vehicles.
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Quick links</p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-sm text-slate-300 transition hover:text-cyan-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <address className="not-italic text-sm text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
              <p className="mt-4">{siteConfig.contact.address}</p>
              <a className="mt-2 block hover:text-cyan-200" href={`tel:${siteConfig.contact.phone}`}>
                {siteConfig.contact.phone}
              </a>
              <a className="block hover:text-cyan-200" href={`mailto:${siteConfig.contact.email}`}>
                {siteConfig.contact.email}
              </a>
            </address>
          </div>

          <div className="border-t border-cyan-100/10 px-6 py-4 text-center text-xs uppercase tracking-[0.16em] text-slate-400 md:px-10">
            © {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
