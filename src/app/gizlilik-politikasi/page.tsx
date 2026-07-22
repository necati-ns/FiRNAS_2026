import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Firnas",
};

export default function GizlilikPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-gray-300 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-6 inline-block">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-3xl font-bold text-white mb-6">Gizlilik Politikası</h1>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>Firnas olarak, gizliliğinize önem veriyor ve kişisel verilerinizin korunmasına azami hassasiyet gösteriyoruz.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Toplanan Veriler</h2>
          <p>İletişim formu aracılığıyla yalnızca sizin tarafınızdan sağlanan ad, e-posta adresi ve mesaj içeriği gibi bilgiler toplanmaktadır.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Verilerin Kullanımı</h2>
          <p>Toplanan kişisel veriler, yalnızca size yanıt vermek ve taleplerinizi işleme almak amacıyla kullanılır. Üçüncü taraflarla paylaşılmaz.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Veri Saklama</h2>
          <p>Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca saklanır ve yasal yükümlülükler sona erdikten sonra silinir.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Haklarınız</h2>
          <p>Verilerinize erişme, düzeltme, silme veya işlenmesine itiraz etme hakkına sahipsiniz. Bu haklarınızı kullanmak için trfirnas@gmail.com adresinden bize ulaşabilirsiniz.</p>
        </div>
      </div>
    </main>
  );
}
