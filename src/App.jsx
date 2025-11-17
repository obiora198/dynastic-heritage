// Enhanced App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import CorporateInfo from "./components/CorporateInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-20 lg:py-28 bg-white">
          <About />
        </section>

        <section id="services" className="py-20 lg:py-28 bg-slate-50">
          <Services />
        </section>

        <section id="corporate-info" className="py-20 lg:py-28 bg-white">
          <CorporateInfo />
        </section>

        <section id="contact" className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-slate-100">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}