"use client";

const team = [
  { name: "Mücahit Taha Şimşek", role: "Kaptan - Tasarım - Mekanik", initials: "MT" },
  { name: "Necati Adıyaman", role: "Kaptan Yrd. - Yazılım - Elektronik", initials: "NA" },
  { name: "Muhammed Emin Kaya", role: "Elektronik - Sosyal Medya", initials: "ME" },
  { name: "Berkay", role: "Yazılım - Haberleşme", initials: "B" },
  { name: "İlker Somer Çuhalı", role: "Tasarım - Haberleşme", initials: "İÇ" },
];

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-title">Takımımız</span>
          <h2 className="heading">Ekibimiz</h2>
          <div className="divider mx-auto mt-4" />
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-4xl">
            {team.map((member) => (
              <div key={member.name} className="card card-hover p-5 text-center group">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-gradient-to-br from-green-500/15 to-dark-700/30 border border-dark-600 flex items-center justify-center mb-3 group-hover:border-green-500/30 transition-colors">
                  <span className="text-lg sm:text-xl font-bold gradient-text">{member.initials}</span>
                </div>
                <h3 className="text-sm font-semibold text-white leading-tight mb-0.5">{member.name}</h3>
                <p className="text-[11px] text-green-400/70 font-medium leading-relaxed">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
