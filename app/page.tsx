"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function HomePage() {
  return (
    <>
      <section className="h-screen w-full relative overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "mirror" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=3840"
            alt="Cinematic luxury yacht on dark water"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0 pointer-events-none" />

        <nav className="absolute top-0 w-full p-8 flex justify-between items-center text-white text-xs tracking-widest uppercase font-mono border-b border-white/10 z-10">
          <span className="flex items-center gap-3">
            <Image
              src="/elite-logo.svg"
              alt="Elite Detailing Mobile Repair logo"
              width={34}
              height={34}
              className="h-8 w-8 rounded-sm border border-red-600/50 bg-black"
            />
            Elite Detailing Mobile Repair
          </span>
          <span>(386) 340-5989</span>
        </nav>

        <p className="absolute top-28 left-12 text-xs tracking-[0.25em] uppercase text-red-600 font-semibold z-10">
          FLORIDA&apos;S HEAVY-DUTY RESTORATION EXPERTS
        </p>

        <h1 className="absolute bottom-12 left-12 text-[10vw] leading-[0.8] tracking-tighter font-black text-white mix-blend-overlay opacity-90 z-10">
          Command the Elements.
          <br />
          Land &amp; Sea.
        </h1>

        <p className="absolute bottom-44 left-12 max-w-2xl text-zinc-300 text-sm md:text-base leading-relaxed z-10">
          Master-level surface restoration for exotics, marine vessels, and luxury RVs. We engineer
          perfection wherever you are parked or docked.
        </p>

        <button className="absolute bottom-12 right-12 h-16 min-w-56 rounded-full border border-red-600/55 bg-black/45 backdrop-blur-sm px-8 text-red-600 text-sm font-bold uppercase tracking-[0.3em] hover:bg-red-600/15 transition-colors z-10 flex items-center justify-between">
          <span>Book Now</span>
          <span aria-hidden="true" className="text-2xl leading-none">→</span>
        </button>
      </section>

      <section className="border-y border-white/10 bg-black py-6">
        <div className="text-xs tracking-[0.2em] text-zinc-500 uppercase flex justify-around items-center max-w-7xl mx-auto px-4 gap-4 flex-wrap">
          <span>MOBILE REPAIR &amp; DETAILING</span>
          <span>MARINE GELCOAT SPECIALISTS</span>
          <span>RV OXIDATION REMOVAL</span>
          <span>EXOTIC CORRECTION EXPERTS</span>
        </div>
      </section>

      <motion.div {...fadeUp} className="bg-black">
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-white/10">
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1620050843518-7090858e7ce6?q=80&w=1000"
              alt="Marine gelcoat correction on a speedboat"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-black relative">
            <span className="absolute top-10 right-10 text-[10rem] font-black text-white/5 leading-none">
              01
            </span>
            <p className="text-xs text-red-600 tracking-[0.2em] uppercase mb-4 relative z-10">
              Nautical Perfection
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              Marine Gelcoat Correction.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Saltwater and UV rays destroy marine finishes. We execute multi-stage gelcoat correction,
              sanding, and heavy compounding to restore factory gloss. Starting at $60 per foot for boats
              and $250 for Jetskis.
            </p>
            <button className="self-start border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors relative z-10">
              Explore
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-white/10">
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-black relative order-2 lg:order-1">
            <span className="absolute top-10 right-10 text-[10rem] font-black text-white/5 leading-none">
              02
            </span>
            <p className="text-xs text-red-600 tracking-[0.2em] uppercase mb-4 relative z-10">
              Heavy-Duty Preservation
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              RV &amp; Fleet Rejuvenation.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Florida&apos;s environment poses unique challenges to large-scale clear coats. We provide
              intensive pressure washing, bug removal, oxidation buffing, and high-grade polish
              restoration for RVs, campers, and semi-trucks.
            </p>
            <button className="self-start border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors relative z-10">
              Explore
            </button>
          </div>
          <div className="relative min-h-[40vh] lg:min-h-full order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000"
              alt="Luxury RV restoration service"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-white/10">
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1600661653561-629509216228?q=80&w=1000"
              alt="Precision polishing for exotic auto restoration"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-black relative">
            <span className="absolute top-10 right-10 text-[10rem] font-black text-white/5 leading-none">
              03
            </span>
            <p className="text-xs text-red-600 tracking-[0.2em] uppercase mb-4 relative z-10">
              Precision Cut
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              Automotive Paint Correction.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Sub-micron leveling of your vehicle&apos;s clear coat to eliminate swirls, haze, and
              micro-marring, finished with long-term ceramic defense.
            </p>
            <button className="self-start border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors relative z-10">
              Explore
            </button>
          </div>
        </section>
      </motion.div>

      <motion.section {...fadeUp} className="py-32 bg-zinc-950 border-b border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-20 px-4">
          <h2 className="text-4xl text-white font-black tracking-tight">Engineered Perfection.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto px-4 gap-8">
          <article className="border-t border-white/20 pt-6">
            <h3 className="text-white text-sm tracking-[0.16em] uppercase mb-4">01 // Decontamination</h3>
            <p className="text-sm text-zinc-400 font-mono leading-relaxed">
              Chemical and mechanical iron removal strips embedded fallout and prepares the substrate
              for uncompromised correction work.
            </p>
          </article>
          <article className="border-t border-white/20 pt-6">
            <h3 className="text-white text-sm tracking-[0.16em] uppercase mb-4">02 // Measurement</h3>
            <p className="text-sm text-zinc-400 font-mono leading-relaxed">
              Precision clear coat depth gauging and controlled lighting analysis define the safest,
              most effective correction pathway.
            </p>
          </article>
          <article className="border-t border-white/20 pt-6">
            <h3 className="text-white text-sm tracking-[0.16em] uppercase mb-4">03 // Correction</h3>
            <p className="text-sm text-zinc-400 font-mono leading-relaxed">
              Targeted compounding and polishing execute sub-micron leveling to erase defects and
              restore high-definition optical clarity.
            </p>
          </article>
          <article className="border-t border-white/20 pt-6">
            <h3 className="text-white text-sm tracking-[0.16em] uppercase mb-4">04 // Protection</h3>
            <p className="text-sm text-zinc-400 font-mono leading-relaxed">
              A sacrificial ceramic barrier is installed with controlled cure conditions to lock in
              gloss and shield the finish from daily abuse.
            </p>
          </article>
        </div>
      </motion.section>

      <motion.section
        {...fadeUp}
        className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-black p-4"
      >
        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
          SECURE YOUR ALLOCATION.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-10 py-5 bg-white text-black text-xs tracking-[0.2em] uppercase font-semibold hover:bg-zinc-200 transition-colors">
            Book Consultation
          </button>
          <button className="px-10 py-5 bg-black text-white border border-white/30 text-xs tracking-[0.2em] uppercase font-semibold hover:bg-white hover:text-black transition-colors">
            View Pricing
          </button>
        </div>
      </motion.section>
    </>
  );
}
