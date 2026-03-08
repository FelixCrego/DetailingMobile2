import { siteConfig } from "../../site.config";

export default function ContactPage() {
  return (
    <main className="bg-slate-50 text-zinc-900">
      <section className="mx-auto max-w-4xl px-6 py-20 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Contact</p>
        <h1 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl">
          Book Your Consultation
        </h1>
        <p className="mt-6 text-lg text-zinc-700">
          Reach out and we&apos;ll tailor a detailing plan around your vehicle, priorities, and schedule.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg">
          <ul className="space-y-4 text-lg text-zinc-800">
            <li>
              Phone: <a className="text-amber-700" href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
            </li>
            <li>
              Email: <a className="text-amber-700" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
            </li>
            <li>Service Type: Mobile + Studio</li>
            <li>Location: {siteConfig.contact.address}</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
