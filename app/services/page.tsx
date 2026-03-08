export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <section className="min-h-[60vh] flex flex-col justify-end p-8 md:p-16 border-b border-white/10 bg-zinc-950">
        <p className="text-red-600 font-mono tracking-widest uppercase text-xs mb-6">
          Divisions of Expertise
        </p>
        <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter text-white leading-[0.85]">
          Engineered
          <br />
          Surfaces.
        </h1>
      </section>

      <section className="border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          <div className="lg:col-span-7 relative border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden min-h-[50vh]">
            <img
              src="https://images.unsplash.com/photo-1620050843518-7090858e7ce6"
              alt="Marine gelcoat restoration in progress"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center p-12 lg:p-20 bg-black">
            <h2 className="text-5xl font-black text-white tracking-tight mb-8">Marine &amp; Gelcoat.</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 text-zinc-200 border-b border-white/10 pb-4">
                <span className="text-red-600 mt-1">◆</span>
                <span>Multi-Stage Gelcoat Correction (From $40/ft)</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-200 border-b border-white/10 pb-4">
                <span className="text-red-600 mt-1">◆</span>
                <span>Fiberglass &amp; Bottom Painting ($65/ft)</span>
              </li>
              <li className="flex items-start gap-3 text-zinc-200 pb-1">
                <span className="text-red-600 mt-1">◆</span>
                <span>Jet Ski Restoration (From $250)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="relative min-h-[80vh] w-full flex items-center p-8 md:p-16 border-b border-white/10">
        <img
          src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7"
          alt="RV fleet exterior preservation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-6xl font-black text-white tracking-tighter mb-6">
            Heavy-Duty Preservation.
          </h2>
          <p className="text-zinc-200 leading-relaxed text-lg">
            Florida&apos;s environment destroys large-scale clear coats. We execute intensive pressure
            washing, bug removal, oxidation buffing, and polish restoration.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-white font-bold uppercase tracking-widest text-xs">
            <span>10% Off First RV Detail</span>
          </div>
        </div>
      </section>

      <section className="py-32 bg-black px-4 md:px-16">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Exotic &amp; Automotive</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-5xl mx-auto">
          <div className="bg-zinc-950 p-16">
            <h3 className="text-3xl font-bold text-white tracking-tight mb-5">Paint Correction</h3>
            <p className="text-zinc-300 leading-relaxed">
              Sub-micron leveling and swirl removal to restore optical clarity across the clear coat.
            </p>
          </div>

          <div className="bg-zinc-950 p-16">
            <h3 className="text-3xl font-bold text-white tracking-tight mb-5">Ceramic Defense</h3>
            <p className="text-zinc-300 leading-relaxed">
              Long-term hydrophobic silica coatings engineered to shield paint from UV and fallout.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
