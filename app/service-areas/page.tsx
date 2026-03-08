import { siteConfig } from "../../site.config";

export default function ServiceAreasPage() {
  return (
    <main className="bg-slate-50 text-zinc-900">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Service Areas</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl">
          We Come to You Across Florida
        </h1>
        <p className="mt-6 max-w-3xl text-lg text-zinc-700">
          Studio-level results with mobile convenience for luxury, exotic, and performance vehicles.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.serviceAreas.map((area) => (
            <li
              key={area}
              className="rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-medium text-zinc-800 shadow-sm"
            >
              {area}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
