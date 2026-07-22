"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) setVisible(true);
  }, []);

  const accept = () => { localStorage.setItem("cookies-accepted", "true"); setVisible(false); };
  const reject = () => { localStorage.setItem("cookies-accepted", "false"); setVisible(false); };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4">
      <div className="max-w-5xl mx-auto card p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border border-dark-600">
        <p className="text-sm text-gray-400 flex-1 leading-relaxed">
          Bu site, size daha iyi bir deneyim sunmak için çerezler kullanmaktadır.
          Siteyi kullanmaya devam ederek çerez kullanımını kabul etmiş olursunuz.
        </p>
        <div className="flex gap-2.5 flex-shrink-0">
          <button onClick={reject} className="px-4 py-2 text-xs font-semibold text-gray-400 bg-dark-800 rounded-xl hover:bg-dark-700 transition-all">Reddet</button>
          <button onClick={accept} className="px-5 py-2 text-xs font-semibold text-white bg-green-600 rounded-xl hover:bg-green-500 transition-all">Kabul Et</button>
        </div>
      </div>
    </div>
  );
}
