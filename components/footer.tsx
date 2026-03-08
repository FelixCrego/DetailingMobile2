import Link from "next/link";
import { siteConfig } from "../site.config";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">{siteConfig.business.name}</p>
          <p className="mt-2 max-w-xs text-sm text-zinc-300">{siteConfig.business.description}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Quick Links</p>
          <div className="mt-4 grid gap-2 text-sm text-zinc-300">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">Contact</p>
          <div className="mt-4 space-y-2 text-sm text-zinc-300">
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.phone}</p>
            <p>{siteConfig.contact.email}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
