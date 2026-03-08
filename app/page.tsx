"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
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
  );
}
