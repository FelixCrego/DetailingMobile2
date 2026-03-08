import Image from "next/image";
import { siteConfig } from "../../site.config";

export default function ServicesPage() {
  return (
    <main className="bg-slate-50 text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Services</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl">
          Concierge Detailing Services
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-700">
          Every appointment is tailored to your vehicle condition, finish goals, and use-case.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {siteConfig.services.map((service) => (
            <article key={service.name} className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg">
              <div className="relative h-52">
                <Image src={service.image} alt={service.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">{service.name}</h2>
                <p className="mt-3 text-zinc-700">{service.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
