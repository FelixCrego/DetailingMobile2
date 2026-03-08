export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <section className="min-h-[70vh] flex flex-col justify-end p-8 md:p-16 border-b border-white/10 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=3840"
          alt="Luxury yacht in dark cinematic lighting"
          className="absolute inset-0 w-full h-full object-cover opacity-30 -z-10"
        />
        <p className="text-red-600 tracking-[0.3em] text-sm uppercase font-bold mb-4">
          SPECIALIZED DIVISIONS
        </p>
        <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.9] max-w-5xl">
          Land. Sea. Restored.
        </h1>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 max-w-[100vw] border-b border-white/10 bg-black">
        <div className="lg:sticky top-0 h-[50vh] lg:h-screen border-r border-white/10 overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1620050843518-7090858e7ce6?q=80&w=1000"
            alt="Boat restoration detail work"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <article className="p-12 lg:p-24 border-b border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Pro Boat Detailing.</h3>
            <p className="mt-6 text-zinc-300 max-w-xl leading-relaxed">
              Multi-stage gelcoat correction, heavy oxidation removal, sanding, and polishing to restore
              factory gloss.
            </p>
            <p className="font-mono text-red-600 text-xl mt-6">From $40 - $60 Per Foot.</p>
          </article>

          <article className="p-12 lg:p-24 border-b border-white/10">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Jet Ski Restoration.</h3>
            <p className="mt-6 text-zinc-300 max-w-xl leading-relaxed">
              Complete wash, shine, and gelcoat correction for personal watercraft.
            </p>
            <p className="font-mono text-red-600 text-xl mt-6">Starting at $250.</p>
          </article>

          <article className="p-12 lg:p-24">
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">Fiberglass &amp; Bottom Paint.</h3>
            <p className="mt-6 text-zinc-300 max-w-xl leading-relaxed">
              Advanced structural fiberglass repair, spot spray patching, non-skid repair, and
              comprehensive bottom painting.
            </p>
            <p className="font-mono text-red-600 text-xl mt-6">Bottom Painting: $65 Per Foot.</p>
          </article>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh] border-b border-white/10 bg-zinc-950">
        <div className="relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 min-h-[40vh] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000"
            alt="Airstream and RV exterior restoration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="p-12 lg:p-24 flex flex-col justify-center relative">
          <p className="text-red-600 tracking-[0.3em] text-sm uppercase font-bold mb-4">
            HEAVY-DUTY PRESERVATION
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8">
            RV, Trailer &amp; Fleet.
          </h2>

          <ul className="space-y-4 text-zinc-200">
            {[
              "Pressure Washing",
              "Bug Removal",
              "Heavy Oxidation Buffing",
              "Polish Restoration",
              "Water Spot Removal",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 border-b border-white/10 pb-3">
                <span className="text-red-600">●</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 self-start px-5 py-2 rounded-full border border-red-600/50 bg-red-600/10 text-red-500 text-xs font-bold tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(220,38,38,0.35)]">
            10% OFF FIRST RV DETAIL
          </div>
        </div>
      </section>

      <section className="py-32 px-4 max-w-7xl mx-auto border-b border-white/10">
        <h2 className="text-center text-4xl font-bold text-white mb-16">Exotic &amp; Automotive.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          <article className="bg-black p-12">
            <h3 className="text-3xl font-bold tracking-tighter mb-4">Paint Correction</h3>
            <p className="text-zinc-300 leading-relaxed">
              Sub-micron clear coat leveling, swirl removal, and multi-stage machine polishing.
            </p>
          </article>

          <article className="bg-black p-12">
            <h3 className="text-3xl font-bold tracking-tighter mb-4">Ceramic Defense</h3>
            <p className="text-zinc-300 leading-relaxed">
              Long-term hydrophobic coatings engineered to reject Florida&apos;s UV rays and chemical
              fallout.
            </p>
          </article>
        </div>
      </section>

      <section className="min-h-[50vh] flex flex-col justify-center items-center text-center p-8 bg-black">
        <h2 className="text-5xl md:text-8xl font-black text-white">Schedule Your Allocation.</h2>
        <button className="mt-8 px-8 py-4 bg-red-600 text-white font-bold tracking-widest uppercase hover:bg-red-700 transition-colors">
          TEXT (386) 340-5989
        </button>
      </section>
    </main>
  );
}
