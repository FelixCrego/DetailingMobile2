import Link from "next/link";
import { siteConfig } from "../../site.config";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="min-w-fit">
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight">
            {siteConfig.business.name}
          </p>
          <p className="text-xs uppercase tracking-[0.22em] text-amber-300/90">
            Mobile Detailing Atelier
          </p>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-amber-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`tel:${siteConfig.contact.phone}`}
          className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:border-amber-300 hover:text-amber-200"
        >
          {siteConfig.contact.cta}
        </a>
      </div>
    </header>
  );
}
