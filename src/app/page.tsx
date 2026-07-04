import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifest from "@/components/Manifest";
import Ecosystem from "@/components/Ecosystem";
import Thesis from "@/components/Thesis";
import Pillars from "@/components/Pillars";
import Founder from "@/components/Founder";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", padding: "0" }}>
      <Header />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Hero />
        <Manifest />
        <Ecosystem />
        <Thesis />
        <Pillars />
        <Founder />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
