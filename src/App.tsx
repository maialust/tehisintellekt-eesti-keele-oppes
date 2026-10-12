import { useReveal } from "./hooks/useReveal";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About, Activities, Critical, Takeaway } from "./components/Content";
import { Facilitator, Info, Faq, FinalCta, Footer } from "./components/Practical";
import { MobileCta } from "./components/MobileCta";

export default function App() {
  useReveal();

  return (
    <>
      <a
        href="#sisu"
        className="sr-only z-[60] rounded-full bg-sun-400 px-5 py-3 font-bold text-navy-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Liigu põhisisu juurde
      </a>
      <Header />
      <main id="sisu" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Activities />
        <Critical />
        <Takeaway />
        <Facilitator />
        <Info />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
