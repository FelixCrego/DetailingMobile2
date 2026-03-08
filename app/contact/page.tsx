import { siteConfig } from "../../site.config";

export default function ContactPage() {
  return (
    <main className="bg-zinc-950">
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">Contact Us</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-5xl font-bold">Book Your Detail</h1>
        <p className="mt-6 max-w-2xl text-zinc-300">
          Tell us about your vehicle, your goals, and your timeline. We'll recommend the ideal detailing package and
          provide transparent pricing.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Phone</p>
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="mt-3 block text-xl font-semibold hover:text-amber-100">
              {siteConfig.contact.phone}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Email</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="mt-3 block text-xl font-semibold hover:text-amber-100">
              {siteConfig.contact.email}
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-sm uppercase tracking-[0.22em] text-amber-200">Service Model</p>
            <p className="mt-3 text-xl font-semibold">{siteConfig.contact.address}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
