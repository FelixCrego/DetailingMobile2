import Link from "next/link";
import { siteConfig } from "../site.config";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link href="/" className="shrink-0">
          <p className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold tracking-tight">
            {siteConfig.business.name}
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/90 md:text-xs">
            Premium Mobile Detailing
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-amber-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="rounded-full border border-white/20 px-5 py-2 text-xs font-medium text-white transition hover:border-amber-300 hover:text-amber-200 md:text-sm"
        >
          {siteConfig.contact.cta}
        </a>
      </div>
    </header>
  );
}
