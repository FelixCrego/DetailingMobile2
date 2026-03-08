import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function AboutPage() {
  const owner = siteConfig.business.owner;

  return (
    <main className="bg-zinc-950">
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
        <div className="relative min-h-[440px] overflow-hidden rounded-3xl border border-white/10">
          <Image src={owner.image} alt={owner.name} fill className="object-cover" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">About</p>
          <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold">{owner.name}</h1>
          <p className="mt-2 text-lg font-medium text-zinc-300">{owner.title}</p>
          <p className="mt-6 text-zinc-300">{owner.bio}</p>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">Certifications</h2>
          <ul className="mt-4 space-y-2 text-zinc-200">
            {owner.certifications.map((certification) => (
              <li key={certification}>• {certification}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
