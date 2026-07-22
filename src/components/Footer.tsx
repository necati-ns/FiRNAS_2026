"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-700/50 bg-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src="/logo.jpg" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
              <span className="text-lg font-bold gradient-text">FİRNAS</span>
            </a>
            <p className="text-sm text-gray-500 leading-relaxed">
              Lise öğrencilerinden oluşan dinamik bir teknoloji takımıyız. Otonom hava ve kara sistemleri geliştiriyoruz.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Hızlı Erişim</h4>
            <ul className="space-y-2.5">
              {[
                ["Ana Sayfa", "#home"],
                ["Hakkımızda", "#about"],
                ["Araçlarımız", "#projects"],
                ["Takımımız", "#team"],
                ["İletişim", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-gray-500 hover:text-green-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Kaynaklar</h4>
            <ul className="space-y-2.5">
              {["Projeler"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-500 hover:text-green-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Bülten</h4>
            <p className="text-sm text-gray-500 mb-4">Gelişmelerden haberdar olmak için bültenimize abone olun.</p>
            <div className="flex gap-2">
              <input id="newsletter-email" type="email" placeholder="E-posta adresiniz"
                className="flex-1 px-3 py-2.5 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-600 text-xs focus:outline-none focus:border-green-500/50" />
              <button onClick={() => {
                const el = document.getElementById("newsletter-email") as HTMLInputElement;
                if (el?.value) window.location.href = `mailto:trfirnas@gmail.com?subject=Bülten Aboneliği&body=Bülteninize abone olmak istiyorum.%0AGönderen: ${encodeURIComponent(el.value)}`;
              }}
                className="px-4 py-2.5 btn-primary text-xs">
                Abone Ol
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Firnas. Tüm hakları saklıdır. | <a href="https://www.nscoding.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">NS CODİNG</a> Tarafından Geliştirilmiştir
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <a href="/cerezler" target="_blank" className="hover:text-green-400 transition-colors">Çerezler</a>
            <span>|</span>
            <a href="/kullanim-politikasi" target="_blank" className="hover:text-green-400 transition-colors">Kullanım Politikası</a>
            <span>|</span>
            <a href="/gizlilik-politikasi" target="_blank" className="hover:text-green-400 transition-colors">Gizlilik Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
