"use client";

const projects = [
  {
    name: "Çırpankanat İHA",
    tag: "Prototip Aşaması",
    badge: "YAKINDA",
    specs: [
      ["Durum", "Geliştirme Aşaması"],
      ["Tür", "Sabit / Döner Kanat"],
      ["Otonomi", "Geliştiriliyor"],
      ["Yapay Zeka", "Entegre Edilecek"],
    ],
    desc: "Tamamen özgün tasarımımız olan Çırpankanat İHA. Prototip aşamasında olup yakında daha da gelişecek.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/30 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(115,173,1,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-title">Araçlarımız</span>
          <h2 className="heading">İHA Modellerimiz</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Geliştirdiğimiz İHA modellerini ve prototip aşamasındaki projelerimizi keşfedin.
          </p>
          <div className="divider mx-auto mt-4" />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {projects.map((project) => (
              <div key={project.name} className="card card-hover overflow-hidden group">
                <div className="relative h-48 bg-gradient-to-br from-dark-800 to-dark-950 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent z-10" />
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-7xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">🪶</div>
                  </div>
                  <div className="absolute top-3 left-3 z-20 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-dark-950/80 backdrop-blur-sm text-[10px] font-semibold text-green-400 border border-green-500/20">{project.tag}</span>
                    {project.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-green-500/15 text-[10px] font-bold text-green-400 border border-green-500/30 animate-pulse">{project.badge}</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-green-400 transition-colors">{project.name}</h3>
                  <div className="space-y-1.5 mb-4">
                    {project.specs.map(([key, val]) => (
                      <div key={key} className="flex justify-between text-xs">
                        <span className="text-gray-500">{key}</span>
                        <span className="text-gray-300 font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-5 line-clamp-2">{project.desc}</p>
                  <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 hover:text-green-300 transition-colors group/link">
                    Detaylı İncele
                    <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
