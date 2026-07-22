import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-dark-950">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
}
