"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const ad = data.get("ad") as string;
    const eposta = data.get("eposta") as string;
    const mesaj = data.get("mesaj") as string;
    const body = `Gönderen: ${ad} (${eposta})%0A%0A${encodeURIComponent(mesaj)}`;
    window.location.href = `mailto:trfirnas@gmail.com?subject=İletişim Formu - ${encodeURIComponent(ad)}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900/50 to-dark-950" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-title">İletişim</span>
          <h2 className="heading">Bizimle İletişime Geçin</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Projelerimiz hakkında bilgi almak, iş birliği veya iletişim için bize ulaşın.
          </p>
          <div className="divider mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="card p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mesajınız Alındı!</h3>
                <p className="text-gray-400 text-sm">En kısa sürede size dönüş yapacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Adınız</label>
                  <input type="text" name="ad" required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm"
                    placeholder="Adınız ve soyadınız" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">E-posta</label>
                  <input type="email" name="eposta" required
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm"
                    placeholder="ornek@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Mesajınız</label>
                  <textarea name="mesaj" required rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-green-500/50 transition-all text-sm resize-none"
                    placeholder="Mesajınızı yazın..." />
                </div>
                <button type="submit" className="w-full py-3.5 btn-primary justify-center text-sm">
                  Mesajı Gönder
                </button>
              </form>
            )}
          </div>

          <div className="space-y-5">
            <div className="card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">E-posta</h4>
                  <a href="mailto:trfirnas@gmail.com" className="text-sm text-gray-400 hover:text-green-400 transition-colors">trfirnas@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Telefon</h4>
                  <a href="tel:+905510789071" className="text-sm text-gray-400 hover:text-green-400 transition-colors">+90 551 078 90 71</a>
                </div>
              </div>
            </div>

            <div className="card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Adres</h4>
                  <p className="text-sm text-gray-400">Necmettin Erbakan Anadolu İmam Hatip Lisesi<br />Karabağlar / İzmir</p>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h4 className="text-sm font-semibold text-white mb-4">Sosyal Medya</h4>
              <div className="flex gap-3">
                {[
                  { icon: "instagram", href: "https://instagram.com/firnas.tr" },
                  { icon: "linkedin", href: "https://www.linkedin.com/company/firnas" },
                  { icon: "youtube", href: "https://www.youtube.com/channel/UCCxARSMBygq6uSaVMboYgtQ" },
                ].map((s) => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center hover:border-green-500/40 hover:bg-dark-700 transition-all duration-200 group">
                    {s.icon === "instagram" && (
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <rect width="18" height="18" x="3" y="3" rx="4" strokeWidth="1.5" /><circle cx="12" cy="12" r="4.5" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    )}
                    {s.icon === "linkedin" && (
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )}
                    {s.icon === "youtube" && (
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.543 6.498c-.203-.782-.8-1.396-1.557-1.604C18.186 4.5 12 4.5 12 4.5s-6.186 0-7.986.394c-.757.208-1.354.822-1.557 1.604C2 8.344 2 12 2 12s0 3.656.457 5.502c.203.782.8 1.396 1.557 1.604C5.814 19.5 12 19.5 12 19.5s6.186 0 7.986-.394c.757-.208 1.354-.822 1.557-1.604C22 15.656 22 12 22 12s0-3.656-.457-5.502z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 15l5-3-5-3v6z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
