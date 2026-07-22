import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çerez Politikası | Firnas",
};

export default function CerezlerPage() {
  return (
    <main className="min-h-screen bg-dark-950 text-gray-300 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-green-400 hover:text-green-300 text-sm mb-6 inline-block">&larr; Ana Sayfaya Dön</Link>
        <h1 className="text-3xl font-bold text-white mb-6">Çerez Politikası</h1>
        <div className="space-y-4 text-sm leading-relaxed">
          <p>Bu çerez politikası, Firnas web sitesi tarafından kullanılan çerezler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Çerez Nedir?</h2>
          <p>Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Web sitesinin daha verimli çalışmasını sağlar ve ziyaretçilere kişiselleştirilmiş bir deneyim sunar.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Hangi Çerezleri Kullanıyoruz?</h2>
          <p>Web sitemizde yalnızca zorunlu teknik çerezler kullanılmaktadır. Bu çerezler, sitenin düzgün çalışması için gereklidir ve herhangi bir kişisel veri toplamaz.</p>
          <h2 className="text-xl font-semibold text-white mt-6">Çerezleri Nasıl Kontrol Edebilirsiniz?</h2>
          <p>Tarayıcı ayarlarınızdan çerezleri yönetebilir, silebilir veya tamamen engelleyebilirsiniz. Ancak, çerezleri devre dışı bırakmanız durumunda web sitemizin bazı özellikleri düzgün çalışmayabilir.</p>
        </div>
      </div>
    </main>
  );
}
