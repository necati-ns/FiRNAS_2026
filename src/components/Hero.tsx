"use client";

import { useEffect, useRef } from "react";

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = canvas.width = innerWidth;
    let h = canvas.height = innerHeight;
    const parts: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      parts.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5, a: Math.random() * 0.4 + 0.05,
      });
    }

    const resize = () => { w = canvas.width = innerWidth; h = canvas.height = innerHeight; };
    addEventListener("resize", resize);

    let id: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(115, 173, 1, ${p.a})`;
        ctx.fill();
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(115,173,1,0.04)_0%,_transparent_70%)]" />

      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <ParticleField />

      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-green-600/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="animate-fade-up anim-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
          Geleceğin{" "}
          <span className="gradient-text">İnsansız Hava</span>
          <br />
          Teknolojilerini Tasarlıyoruz
        </div>

        <p className="animate-fade-up anim-delay-2 max-w-2xl mx-auto text-base sm:text-lg text-gray-500 font-light leading-relaxed mb-10">
          Otonom uçuş sistemleri, yapay zeka destekli görüntü işleme ve ileri
          kompozit malzeme teknolojileriyle, geleceğin hava araçlarını bugünden inşa ediyoruz.
        </p>

        <div className="animate-fade-up anim-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="btn-primary text-base px-8 py-4 glow-hover">
            Projelerimizi İncele
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
          <a href="#contact" className="btn-secondary text-base px-8 py-4">
            Sponsor Ol
          </a>
        </div>

        <div className="animate-fade-up anim-delay-4 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            ["1", "İHA Modeli"],
            ["Yakında", "Yarışma"],
            ["5", "Takım Üyesi"],
            ["2", "Ödül & Derece"],
          ].map(([val, label]) => (
            <div key={label} className="card p-4">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{val}</div>
              <div className="text-xs text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
