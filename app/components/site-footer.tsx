import Link from "next/link";
import { siteConfig } from "../../site.config";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about-us", label: "About Us" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm text-zinc-300 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-white">
            {siteConfig.business.name}
          </p>
          <p className="mt-3 max-w-sm text-zinc-400">{siteConfig.business.description}</p>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-300">Quick Links</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-amber-200">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-semibold uppercase tracking-[0.2em] text-amber-300">Contact</p>
          <ul className="mt-4 space-y-2">
            <li>{siteConfig.contact.address}</li>
            <li>
              <a href={`tel:${siteConfig.contact.phone}`} className="transition hover:text-amber-200">
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.contact.email}`} className="transition hover:text-amber-200">
                {siteConfig.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
