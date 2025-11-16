import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CorporateInfo from "./components/CorporateInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-16">
          <About />
        </section>

        <section id="services" className="py-16 bg-white">
          <Services />
        </section>

        <section id="corporate-info" className="py-16 bg-slate-100">
          <CorporateInfo />
        </section>

        <section id="contact" className="py-16 bg-white">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
