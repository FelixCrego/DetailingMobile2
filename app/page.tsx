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
    <main id="home" className="relative overflow-hidden bg-slate-50 text-zinc-900">
      <section className="min-h-screen relative flex flex-col justify-center items-center text-center overflow-hidden px-6">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=3840"
          alt="Luxury sports car used as the hero background"
          fill
          priority
          className="object-cover -z-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-zinc-950/80 to-slate-50 -z-10" />

        <div className="relative z-10 max-w-5xl">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-200 md:text-sm">
            {siteConfig.business.eyebrow}
          </p>
          <h1 className="text-7xl md:text-[9rem] font-black tracking-tighter leading-none text-white drop-shadow-2xl">
            {siteConfig.business.tagline}
          </h1>
          <p className="mt-8 max-w-2xl text-base text-zinc-200 md:mx-auto md:text-xl">
            {siteConfig.business.description}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black hover:scale-105 transition-transform rounded-full px-8 py-4 font-bold">
              Book a Transformation
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-8 py-4">
              View Signature Packages
            </button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.section id="services" {...reveal} className="py-32">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-500">
              Signature Services
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              Futuristic finish. Obsessive precision.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 max-w-7xl mx-auto px-4">
            <article className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-zinc-200/50 border border-zinc-100 group min-h-[400px] flex flex-col justify-end p-8 md:col-span-2">
              <div className="absolute inset-0">
                <Image src={ceramic.image} alt={ceramic.name} fill className="object-cover -z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent -z-10" />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-200">
                  Premium Shield
                </p>
                <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  {ceramic.name}
                </h3>
                <p className="mt-4 max-w-xl text-base text-zinc-200">{ceramic.summary}</p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-zinc-200/50 border border-zinc-100 group min-h-[400px] flex flex-col justify-end p-8">
              <div className="absolute inset-0">
                <Image src={correction.image} alt={correction.name} fill className="object-cover -z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent -z-10" />
              </div>
              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-200">
                  Optical Clarity
                </p>
                <h3 className="mt-4 text-2xl font-bold text-white md:text-3xl">
                  {correction.name}
                </h3>
                <p className="mt-3 text-zinc-200">{correction.summary}</p>
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-zinc-200/50 border border-zinc-100 group min-h-[400px] flex flex-col justify-end p-8 md:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
                Weekly Precision
              </p>
              <h3 className="mt-4 text-3xl font-bold text-zinc-900 md:text-4xl">
                {maintenance.name}
              </h3>
              <p className="mt-3 max-w-3xl text-zinc-600">{maintenance.summary}</p>
            </article>
          </div>
        </motion.section>

        <motion.section
          id="about"
          {...reveal}
          className="grid items-center gap-12 py-32 md:grid-cols-2"
        >
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50">
            <Image
              src={siteConfig.business.owner.image}
              alt={siteConfig.business.owner.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-zinc-500">
              Meet the Detailer
            </p>
            <h2 className="mt-5 text-4xl font-bold leading-tight text-zinc-900 md:text-6xl">
              {siteConfig.business.owner.name}
            </h2>
            <p className="mt-2 text-lg font-medium text-zinc-600">{siteConfig.business.owner.title}</p>
            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
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
