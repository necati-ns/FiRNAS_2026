"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const counted = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setVal(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl sm:text-5xl font-black gradient-text">{val}{suffix}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-title">Hakkımızda</span>
          <h2 className="heading">Biz Kimiz?</h2>
          <div className="divider mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="space-y-5">
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              <span className="text-green-400 font-semibold">Firnas</span> olarak;
              mühendisliğe, yazılıma ve doğa bilimlerine tutkuyla bağlı lise
              öğrencilerinden oluşan dinamik bir teknoloji takımıyız. Hedefimiz
              sadece yarışmak değil; tamamen otonom çalışan sistemler geliştirerek
              gerçek dünyadaki çevresel sorunlara akılcı ve yenilikçi çözümler üretmektir.
            </p>
            <h3 className="text-lg font-semibold text-green-400 mt-6">Ne Yapıyoruz?</h3>
            <p className="text-gray-400 leading-relaxed">
              Projemiz, insansız hava araçları (İHA) ile otonom kara robotlarını
              tek bir ekosistemde bir araya getiriyor. Geliştirdiğimiz özel
              algoritmalar ve yapay zeka mimarisi sayesinde sistemlerimiz,
              dışarıdan hiçbir insan müdahalesine ihtiyaç duymadan görev yapabiliyor.
            </p>
            <h3 className="text-lg font-semibold text-green-400 mt-6">Amacımız</h3>
            <p className="text-gray-400 leading-relaxed">
              Teknoloji ile doğa arasındaki dengeyi kurmak. Otonom hava ve kara
              araçlarımızı arama-kurtarma, çevre analizi ve sürdürülebilirlik
              odaklı görevlerde kullanarak hayatı kolaylaştıran, doğaya duyarlı
              ve geleceğe yön veren yerli teknolojiler geliştirmektir.
            </p>
          </div>

          <div className="card p-8 sm:p-10 glow">
            <div className="grid grid-cols-2 gap-8">
              {[
                { end: 1, suffix: "", label: "İHA Modeli" },
                { end: 2, suffix: "", label: "Kazanılan Derece" },
                { end: 5, suffix: "", label: "Ekip Üyesi" },
                { end: 2, suffix: "", label: "Yarışma Katılımı" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <Counter end={item.end} suffix={item.suffix} />
                  <div className="text-sm text-gray-500 mt-2">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
              title: "Otonom Sistemler",
              desc: "İnsansız hava araçları ve kara robotlarını tek ekosistemde birleştiren, tamamen otonom çalışan akıllı sistemler.",
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
              title: "Yapay Zeka",
              desc: "Makine öğrenmesi ile her görevden ders çıkaran, zamanla daha doğru ve güvenli kararlar alan otonom zeka.",
            },
            {
              icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />,
              title: "Sürdürülebilirlik",
              desc: "Arama-kurtarma, çevre analizi ve doğaya duyarlı görevler için geliştirilen yerli ve yenilikçi teknolojiler.",
            },
          ].map((item) => (
            <div key={item.title} className="card card-hover p-6 group">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 mb-4 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">{item.icon}</svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
