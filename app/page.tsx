"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../site.config";

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
};

export default function HomePage() {
  const [maintenance, correction, ceramic] = siteConfig.services;

  return (
    <main id="home" className="relative overflow-hidden bg-[#030712] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.24),transparent_42%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.2),transparent_38%),radial-gradient(circle_at_50%_75%,rgba(6,182,212,0.14),transparent_52%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.35),rgba(2,6,23,0.92))]" />

      <motion.section
        {...reveal}
        className="relative flex min-h-[94vh] flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-36 text-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=3840"
          alt="Luxury sports car used as the hero background"
          fill
          priority
          className="-z-20 object-cover object-center brightness-[0.9]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.38),rgba(2,6,23,0.62),rgba(3,7,18,0.86)),linear-gradient(to_right,rgba(8,47,73,0.35),rgba(15,23,42,0.08),rgba(2,6,23,0.5))]" />

        <p className="mb-8 rounded-full border border-cyan-300/35 bg-cyan-400/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 md:text-sm">
          {siteConfig.business.eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-6xl font-black leading-[0.88] text-white drop-shadow-[0_0_30px_rgba(34,211,238,0.25)] md:text-9xl">
          {siteConfig.business.tagline}
        </h1>
        <p className="mt-8 max-w-2xl text-base text-slate-200 md:text-xl">
          {siteConfig.business.description}
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="rounded-full border border-cyan-300/45 bg-cyan-400/20 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.35)] backdrop-blur-md transition hover:bg-cyan-300/35">
            Book a Transformation
          </button>
          <button className="rounded-full border border-slate-300/30 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 backdrop-blur-md transition hover:border-cyan-200/50 hover:bg-white/10">
            View Signature Packages
          </button>
        </div>

      </motion.section>

      <div className="mx-auto max-w-7xl space-y-24 px-6 pb-28 md:px-10">
        <motion.section id="services" {...reveal}>
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300">
              Signature Services
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-slate-50 md:text-6xl">
              Futuristic finish. Obsessive precision.
            </h2>
          </div>

          <div className="grid auto-rows-[260px] gap-6 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-3xl border border-cyan-200/20 bg-white/[0.06] p-8 shadow-[0_20px_60px_rgba(8,47,73,0.45)] backdrop-blur-2xl md:col-span-7 md:row-span-2">
              <div className="absolute inset-0">
                <Image src={ceramic.image} alt={ceramic.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/75 to-slate-950/90" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                  Premium Shield
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">
                  {ceramic.name}
                </h3>
                <p className="mt-4 max-w-xl text-base text-slate-200">{ceramic.summary}</p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-blue-200/20 bg-white/[0.06] p-8 shadow-[0_16px_50px_rgba(2,6,23,0.5)] backdrop-blur-2xl md:col-span-5">
              <div className="absolute inset-0">
                <Image src={correction.image} alt={correction.name} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-950/35 via-slate-950/70 to-slate-950/90" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                  Optical Clarity
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">
                  {correction.name}
                </h3>
                <p className="mt-3 text-slate-200">{correction.summary}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-blue-100/20 bg-gradient-to-br from-slate-900/75 to-blue-950/40 p-8 shadow-[0_16px_50px_rgba(2,6,23,0.55)] backdrop-blur-xl md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
                Weekly Precision
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">
                {maintenance.name}
              </h3>
              <p className="mt-3 text-slate-200">{maintenance.summary}</p>
            </article>
          </div>
        </motion.section>

        <motion.section
          id="about"
          {...reveal}
          className="grid items-center gap-12 rounded-3xl border border-cyan-100/15 bg-gradient-to-r from-slate-900/65 via-slate-900/55 to-blue-950/35 p-8 shadow-[0_20px_60px_rgba(14,116,144,0.2)] backdrop-blur-2xl md:grid-cols-2 md:p-12"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-cyan-100/25 bg-slate-900/60 shadow-[0_10px_30px_rgba(34,211,238,0.25)]">
            <Image
              src={siteConfig.business.owner.image}
              alt={siteConfig.business.owner.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">
              Meet the Detailer
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-slate-50 md:text-6xl">
              {siteConfig.business.owner.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-cyan-100">{siteConfig.business.owner.title}</p>
            <p className="mt-6 text-lg leading-relaxed text-slate-200">
              {siteConfig.business.owner.bio}
            </p>
            <ul className="mt-8 space-y-2 text-sm uppercase tracking-[0.2em] text-slate-300">
              {siteConfig.business.owner.certifications.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
