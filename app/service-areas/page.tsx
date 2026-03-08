import { siteConfig } from "../../site.config";

export default function ServiceAreasPage() {
  return (
    <main className="bg-zinc-950">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Service Areas</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold">Where We Detail</h1>
        <p className="mt-6 max-w-3xl text-zinc-300">
          We offer studio appointments and mobile concierge detailing throughout South and Central Florida.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {siteConfig.serviceAreas.map((area) => (
            <div key={area} className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-zinc-200">
              {area}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
