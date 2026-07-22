import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım Politikası | Firnas",
};

export default function KullanimPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-gray-300 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-6 inline-block">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-3xl font-bold text-white mb-6">Kullanım Politikası</h1>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>Firnas web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş sayılırsınız.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Hizmet Kullanımı</h2>
          <p>Web sitemizde yer alan tüm içerikler bilgilendirme amaçlıdır. İçeriklerdeki bilgilerin doğruluğu konusunda azami özen gösterilmekle birlikte, herhangi bir garanti verilmemektedir.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Fikri Mülkiyet</h2>
          <p>Sitede yer alan tüm metin, görsel, logo ve diğer materyaller Firnas ekibine aittir. İzinsiz kullanımı yasaktır.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Sorumluluk Reddi</h2>
          <p>Firnas, web sitesinin kullanımından doğabilecek herhangi bir doğrudan veya dolaylı zarardan sorumlu tutulamaz.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Değişiklikler</h2>
          <p>Bu kullanım politikası önceden bildirim yapılmaksızın değiştirilebilir. Güncel politikaya her zaman bu sayfadan ulaşabilirsiniz.</p>
        </div>
      </div>
    </main>
  );
}
