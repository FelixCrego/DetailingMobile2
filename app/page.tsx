"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HomePage() {
  const [position, setPosition] = useState(50);

  return (
    <main className="bg-black">
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

        <button className="absolute bottom-12 right-12 w-32 h-32 bg-white text-black flex flex-col justify-center items-center text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors z-10">
          <span>Book</span>
          <span>Now</span>
        </button>
      </section>

      <section className="bg-black border-t border-white/10">
        <div className="flex justify-between text-[10px] tracking-[0.2em] uppercase text-zinc-400 p-8 border-b border-white/10">
          <span>Instant Transformation</span>
          <span>Drag to Reveal</span>
        </div>

        <div className="relative w-full h-[70vh] cursor-ew-resize overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=3840"
            alt="After professional detailing"
            fill
            className="object-cover"
          />

          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${position}%` }}
          >
            <Image
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=3840"
              alt="Before professional detailing"
              fill
              className="w-screen h-full object-cover max-w-none"
            />
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 z-20 w-full h-full opacity-0 cursor-ew-resize"
          />

          <div
            className="absolute top-0 bottom-0 w-[1px] bg-white z-10"
            style={{ left: `${position}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center text-sm font-semibold">
              ↔
            </div>
          </div>
        </div>
      </section>

      <motion.div
        className="bg-black"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <section className="border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <article className="p-16 relative overflow-hidden group min-h-[500px] flex flex-col justify-end border-b border-white/10 md:border-r border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1610448161081-3444fc27236d"
                alt="Ceramic coating service"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-[10px] tracking-widest text-zinc-400 uppercase mb-4">
                  Exterior Protection
                </p>
                <h2 className="text-5xl font-bold text-white tracking-tight mb-4">
                  Ceramic Coating
                </h2>
                <p className="text-sm text-zinc-400 max-w-sm">
                  Aerospace-grade nano layers lock in gloss and defend against UV,
                  fallout, and chemical etching.
                </p>
              </div>
              <button className="absolute top-8 right-8 z-10 border border-white/30 px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors">
                Explore
              </button>
            </article>

            <article className="p-16 relative overflow-hidden group min-h-[500px] flex flex-col justify-end border-b border-white/10 md:border-r border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1600661653561-629509216228"
                alt="Paint correction service"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="relative z-10">
                <p className="text-[10px] tracking-widest text-zinc-400 uppercase mb-4">
                  Surface Restoration
                </p>
                <h2 className="text-5xl font-bold text-white tracking-tight mb-4">
                  Paint Correction
                </h2>
                <p className="text-sm text-zinc-400 max-w-sm">
                  Multi-stage machine refinement removes haze, swirls, and micro
                  defects for mirror-level depth.
                </p>
              </div>
              <button className="absolute top-8 right-8 z-10 border border-white/30 px-4 py-3 text-[10px] tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-colors">
                Explore
              </button>
            </article>
          </div>
        </section>

        <motion.section
          className="min-h-[60vh] flex flex-col justify-center items-center text-center p-8 bg-black border-b border-white/10"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter max-w-5xl leading-[0.9]">
            WE DON&apos;T WASH CARS. WE ENGINEER SURFACES.
          </h2>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Image
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=512"
              alt="Javier Morales headshot"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover"
            />
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-mono">
              JAVIER MORALES — MASTER DETAILER
            </p>
          </div>
        </motion.section>
      </motion.div>
    </main>
  );
}
