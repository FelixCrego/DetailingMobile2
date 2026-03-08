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
    <main>
      <motion.section
        {...reveal}
        className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-36 text-center"
      >
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=3840"
          alt="Luxury performance car in cinematic studio lighting"
          fill
          priority
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-zinc-950/90 via-zinc-950/80 to-slate-50" />

        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300 md:text-sm">
          {siteConfig.business.eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-7xl font-black leading-[0.88] text-white md:text-9xl">
          {siteConfig.business.tagline}
        </h1>
        <p className="mt-10 max-w-2xl text-base text-zinc-200 md:text-xl">
          {siteConfig.business.description}
        </p>
      </motion.section>

      <div className="bg-slate-50 text-zinc-900">
        <motion.section {...reveal} className="mx-auto max-w-7xl px-6 py-32 md:px-10">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-amber-600">
              Signature Services
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight md:text-6xl">
              Apple-clean structure. Porsche-grade execution.
            </h2>
          </div>

          <div className="grid auto-rows-[260px] gap-6 md:grid-cols-12">
            <article className="relative overflow-hidden rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-7 md:row-span-2">
              <div className="absolute inset-0">
                <Image
                  src={ceramic.image}
                  alt={ceramic.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/65 to-white/75" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                  Premium Shield
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">
                  {ceramic.name}
                </h3>
                <p className="mt-4 max-w-xl text-base text-zinc-700">
                  {ceramic.summary}
                </p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-5">
              <div className="absolute inset-0">
                <Image
                  src={correction.image}
                  alt={correction.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white/80" />
              </div>
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                  Optical Clarity
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">
                  {correction.name}
                </h3>
                <p className="mt-3 text-zinc-700">{correction.summary}</p>
              </div>
            </article>

            <article className="rounded-3xl border border-white bg-white/60 p-8 shadow-xl backdrop-blur-xl md:col-span-5">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
                Weekly Precision
              </p>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold md:text-3xl">
                {maintenance.name}
              </h3>
              <p className="mt-3 text-zinc-700">{maintenance.summary}</p>
            </article>
          </div>
        </motion.section>

        <motion.section
          {...reveal}
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-32 md:grid-cols-2 md:px-10"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white bg-white shadow-xl">
            <Image
              src={siteConfig.business.owner.image}
              alt={siteConfig.business.owner.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-700">
              Meet the Detailer
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              {siteConfig.business.owner.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-zinc-700">
              {siteConfig.business.owner.title}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-700">
              {siteConfig.business.owner.bio}
            </p>
            <ul className="mt-8 space-y-2 text-sm uppercase tracking-[0.2em] text-zinc-600">
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
