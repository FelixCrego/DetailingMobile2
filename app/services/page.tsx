import { siteConfig } from "../../site.config";

export default function ServicesPage() {
  return (
    <main className="bg-zinc-950">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Services</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold">Auto Detailing Services</h1>
        <p className="mt-6 max-w-3xl text-zinc-300">
          Every package is tailored to your vehicle condition and ownership goals. We specialize in exotic, luxury,
          and daily-driver protection with meticulous process control.
        </p>

        <div className="mt-12 grid gap-6">
          {siteConfig.services.map((service) => (
            <article key={service.name} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold">{service.name}</h2>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-200">{service.duration}</p>
              </div>
              <p className="mt-4 max-w-4xl text-zinc-300">{service.summary}</p>
              <p className="mt-4 text-sm font-semibold text-white">Starting at {service.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
