"use client";

const sponsors = [
  "SolidWorks", "Otostech", "Sultanbeyli SUGEM",
  "Yıldırım Group", "Embiya", "Erhanlar", "Samsung",
  "Baykar", "ASELSAN", "TAI", "TEI", "TÜBİTAK",
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/30 to-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,229,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3">
            Destekçilerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Sponsorlar & Destekçiler
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Değerli sponsorlarımız ve kurumsal destekçilerimiz.
          </p>
          <div className="mt-4 w-20 h-1 bg-gradient-to-r from-cyan-500 to-cyan-700 rounded-full mx-auto" />
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sponsors.map((name) => (
            <div
              key={name}
              className="glass rounded-xl h-24 flex items-center justify-center p-4 glass-hover group cursor-default"
            >
              <span className="text-sm font-semibold text-gray-500 group-hover:text-cyan-400 transition-colors duration-300 text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>

        {/* Scrolling ticker */}
        <div className="mt-12 relative overflow-hidden">
          <div className="flex gap-8 animate-scroll" style={{ width: "max-content" }}>
            {[...sponsors, ...sponsors].map((name, i) => (
              <div
                key={i}
                className="flex-shrink-0 glass rounded-lg px-6 py-3 text-sm font-medium text-gray-500"
              >
                {name}
              </div>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-navy-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
