"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../site.config";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const processSteps = [
  {
    title: "Concierge Discovery",
    description:
      "We map vehicle usage, finish condition, and owner expectations to prescribe the right process instead of generic packages.",
  },
  {
    title: "Paint Science & Correction",
    description:
      "Lighting diagnostics and multi-stage correction remove defects while preserving clear coat health and long-term gloss stability.",
  },
  {
    title: "Protection & Maintenance",
    description:
      "Ceramic, trim, and interior protection systems are calibrated for Florida heat, humidity, UV, and coastal contaminants.",
  },
];

const faqs = [
  {
    question: "Do you offer fully mobile detailing across South Florida?",
    answer:
      "Yes. Precision Auto Spa provides mobile concierge detailing throughout South Florida with studio-level tools, lighting, and process control.",
  },
  {
    question: "Which vehicles do you specialize in?",
    answer:
      "We regularly detail exotic, luxury, collector, and daily performance vehicles, including multi-car household fleets.",
  },
  {
    question: "How long does paint correction or ceramic coating take?",
    answer:
      "Timeline depends on paint condition, correction depth, and coating system selected. We provide exact scheduling after the consultation and inspection.",
  },
];

export default function HomePage() {
  const [maintenance, correction, ceramic] = siteConfig.services;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoDetailing",
        name: siteConfig.business.name,
        description: siteConfig.business.description,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        areaServed: siteConfig.serviceAreas,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.contact.address,
          addressRegion: "FL",
          addressCountry: "US",
        },
        founder: {
          "@type": "Person",
          name: siteConfig.business.owner.name,
          jobTitle: siteConfig.business.owner.title,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Auto Detailing Services",
          itemListElement: siteConfig.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.summary,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <motion.section
        {...reveal}
        className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-36 text-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=3840"
          alt="Luxury performance car in cinematic studio lighting"
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/90 via-zinc-950/70 to-zinc-950/85" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent to-slate-50" />

        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300 md:text-sm">
          {siteConfig.business.eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-black leading-[0.9] text-white md:text-8xl lg:text-9xl">
          {siteConfig.business.tagline}
        </h1>
        <p className="mt-8 max-w-3xl text-base text-zinc-200 md:text-xl">
          Concierge detailing and ceramic protection for luxury and performance vehicles across {" "}
          <span className="font-semibold text-white">{siteConfig.serviceAreas.slice(0, 4).join(", ")}</span>.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-zinc-950 transition hover:bg-amber-200"
          >
            Book a Consultation
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white"
          >
            Explore Services
          </a>
        </div>
      </motion.section>

      <div className="bg-slate-50 text-zinc-900">
        <motion.section
          {...reveal}
          className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4 md:px-10"
        >
          {[
            ["+1,500", "Luxury Vehicles Detailed"],
            ["7 Days", "Concierge Availability"],
            ["100%", "Paint-Safe Methodology"],
            ["Florida", "Climate-Specific Protection"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-zinc-200 bg-white px-6 py-7 shadow-sm">
              <p className="text-3xl font-black text-zinc-900">{value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.14em] text-zinc-600">{label}</p>
            </div>
          ))}
        </motion.section>

        <motion.section id="services" {...reveal} className="mx-auto max-w-7xl px-6 py-24 md:px-10">
          <div className="mb-12 max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-600">Signature Services</p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight md:text-6xl">
              Elite detailing services engineered for finish perfection.
            </h2>
            <p className="mt-5 text-lg text-zinc-700">
              Every service is customized around paint thickness, defect density, driving habits, and storage environment.
            </p>
          </div>

          <div className="grid auto-rows-[260px] gap-6 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-7 md:row-span-2">
              <div className="absolute inset-0">
                <Image src={ceramic.image} alt={ceramic.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/75" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Premium Shield</p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">{ceramic.name}</h3>
                <p className="mt-4 max-w-xl text-base text-zinc-700">{ceramic.summary}</p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-5">
              <div className="absolute inset-0">
                <Image src={correction.image} alt={correction.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/80" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Optical Clarity</p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">{correction.name}</h3>
                <p className="mt-3 text-zinc-700">{correction.summary}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Weekly Precision</p>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">{maintenance.name}</h3>
              <p className="mt-3 text-zinc-700">{maintenance.summary}</p>
            </article>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto grid max-w-7xl items-start gap-12 px-6 py-20 md:grid-cols-2 md:px-10"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">The Precision Method</p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight md:text-5xl">
              Luxury detailing with systems thinking.
            </h2>
            <div className="mt-8 space-y-6">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-zinc-900">{step.title}</h3>
                  <p className="mt-2 text-zinc-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">Service Areas</p>
            <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-zinc-900">Florida Coverage, Studio Standards.</h3>
            <p className="mt-4 text-zinc-700">
              We deliver on-location detailing across South and Central Florida for clients who expect privacy, precision, and reliability.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium text-zinc-700">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area} className="rounded-xl border border-zinc-200 px-3 py-2 text-center">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:px-10"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white bg-white shadow-xl">
            <Image src={siteConfig.business.owner.image} alt={siteConfig.business.owner.name} fill className="object-cover" />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">Meet the Detailer</p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              {siteConfig.business.owner.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-zinc-700">{siteConfig.business.owner.title}</p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">{siteConfig.business.owner.bio}</p>
            <ul className="mt-8 space-y-2 text-sm uppercase tracking-[0.2em] text-zinc-600">
              {siteConfig.business.owner.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section {...reveal} className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <div className="rounded-3xl bg-zinc-950 p-10 text-white shadow-2xl md:p-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">FAQ</p>
            <h2 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-5xl">
              Questions from discerning owners.
            </h2>
            <div className="mt-8 space-y-5">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-2xl border border-white/20 bg-white/5 p-5">
                  <summary className="cursor-pointer text-lg font-semibold">{faq.question}</summary>
                  <p className="mt-3 text-zinc-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
