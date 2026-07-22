import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Çırpankanat İHA Firnas | İnsansız Hava Teknolojileri",
  description:
    "Lise öğrencilerinden oluşan dinamik bir teknoloji takımı. Otonom hava ve kara sistemleri geliştiriyor, çevresel sorunlara akıllı çözümler üretiyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.variable} min-h-screen`}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
