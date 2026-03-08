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
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=3840"
            alt="Luxury automotive hero background"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0 pointer-events-none" />

        <nav className="absolute top-0 w-full p-8 flex justify-between items-center text-white text-xs tracking-widest uppercase font-mono border-b border-white/10 z-10">
          <span>Detailing Mobile</span>
          <span>Los Angeles</span>
        </nav>

        <h1 className="absolute bottom-12 left-12 text-[10vw] leading-[0.8] tracking-tighter font-black text-white mix-blend-overlay opacity-90 z-10">
          OBSESSIVE
          <br />
          PRECISION.
        </h1>

        <a
          href="#booking"
          className="absolute bottom-12 right-8 md:right-16 group flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer"
        >
          <span className="text-white text-xs font-semibold uppercase tracking-[0.2em]">Book Now</span>
          <svg
            className="w-4 h-4 text-white transform group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </section>

      <section className="border-y border-white/10 bg-black py-6">
        <div className="text-xs tracking-[0.2em] text-zinc-500 uppercase flex justify-around items-center max-w-7xl mx-auto px-4 gap-4 flex-wrap">
          <span>Ceramic Pro Certified</span>
          <span>Fully Insured & Licensed</span>
          <span>10+ Years Master Experience</span>
          <span>Florida&apos;s Exotic Specialists</span>
        </div>
      </section>

      <motion.div {...fadeUp} className="bg-black">
        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-white/10">
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1610448161081-3444fc27236d"
              alt="Ceramic coating specialist applying protection"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-black relative">
            <span className="absolute top-10 right-10 text-[10rem] font-black text-white/5 leading-none">
              01
            </span>
            <p className="text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4 relative z-10">
              Liquid Glass Defense
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              Ceramic Coating.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Our silica-carbide matrix chemically bonds to your clear coat, forming a hardened,
              sacrificial shell that rejects Florida&apos;s punishing UV exposure, salt-laden humidity,
              and airborne chemical fallout while amplifying gloss with a deep, editorial-grade finish.
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
            <p className="text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4 relative z-10">
              Optical Refinement Protocol
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              Paint Correction.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Through calibrated multi-stage machine correction, we level micro-marring, oxidation,
              and holograms at a sub-micron scale to recover clarity, restore depth, and reveal a
              mirror-flat surface engineered for high-contrast reflections under direct sun.
            </p>
            <button className="self-start border border-white/30 text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-colors relative z-10">
              Explore
            </button>
          </div>
          <div className="relative min-h-[40vh] lg:min-h-full order-1 lg:order-2">
            <Image
              src="https://images.unsplash.com/photo-1600661653561-629509216228"
              alt="Detailer correcting paint defects"
              fill
              className="object-cover opacity-80"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh] border-b border-white/10">
          <div className="relative min-h-[40vh] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
              alt="Concierge maintenance for exotic vehicles"
              fill
              className="object-cover opacity-80"
            />
          </div>
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-black relative">
            <span className="absolute top-10 right-10 text-[10rem] font-black text-white/5 leading-none">
              03
            </span>
            <p className="text-xs text-zinc-500 tracking-[0.2em] uppercase mb-4 relative z-10">
              White-Glove Preservation
            </p>
            <h2 className="text-5xl font-bold text-white tracking-tighter mb-6 relative z-10">
              Concierge Maintenance.
            </h2>
            <p className="text-zinc-300 leading-relaxed max-w-xl mb-10 relative z-10">
              Built for collectors and daily-driven exotics alike, our concierge maintenance cadence
              preserves coating performance, eliminates bonded contamination, and keeps every panel,
              wheel, and interior surface presentation-ready year-round.
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
