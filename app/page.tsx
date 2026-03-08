import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../site.config";

export default function HomePage() {
  const featuredServices = siteConfig.services.slice(0, 3);

  return (
    <main>
      <section className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=3000"
          alt="High-end black sports car after paint correction"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/85 via-zinc-950/85 to-zinc-950" />

        <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 pb-20 pt-28 md:px-10">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-amber-300 md:text-sm">
            {siteConfig.business.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-space-grotesk)] text-5xl font-bold leading-[1.02] md:text-7xl">
            {siteConfig.business.tagline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg text-zinc-200">{siteConfig.business.description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/services" className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-amber-200">
              Explore Services
            </Link>
            <Link href="/contact" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-200 hover:text-amber-100">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Premium Services</p>
            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-white md:text-5xl">
              Designed for owners who expect flawless results.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredServices.map((service) => (
              <article key={service.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">{service.duration}</p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">{service.name}</h3>
                <p className="mt-4 text-zinc-300">{service.summary}</p>
                <p className="mt-6 text-sm font-semibold text-white">Starting at {service.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
