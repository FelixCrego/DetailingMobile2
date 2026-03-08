import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function AboutUsPage() {
  return (
    <main className="bg-slate-50 text-zinc-900">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
          <Image
            src={siteConfig.business.owner.image}
            alt={siteConfig.business.owner.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">About Us</p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl">
            {siteConfig.business.owner.name}
          </h1>
          <p className="mt-2 text-lg font-medium text-zinc-700">{siteConfig.business.owner.title}</p>
          <p className="mt-6 text-lg leading-relaxed text-zinc-700">{siteConfig.business.owner.bio}</p>
          <ul className="mt-8 space-y-2 text-sm uppercase tracking-[0.2em] text-zinc-600">
            {siteConfig.business.owner.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
