"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımızda" },
  { href: "#projects", label: "Araçlarımız" },
  { href: "#team", label: "Takımımız" },
  { href: "#contact", label: "İletişim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/95 backdrop-blur-md border-b border-dark-700/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="w-9 h-9 rounded-xl object-cover"
            />
            <span className="text-lg font-bold gradient-text">FİRNAS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-dark-800 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a href="#contact" className="btn-primary text-sm px-5 py-2.5">
              İletişime Geç
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-dark-800 transition-colors"
            aria-label="Menü"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-gray-400 rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block h-0.5 bg-gray-400 rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-gray-400 rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <nav className="bg-dark-900 border-t border-dark-700/50 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white rounded-lg hover:bg-dark-800 transition-all"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 btn-primary text-sm justify-center">
            İletişime Geç
          </a>
        </nav>
      </div>
    </header>
  );
}
