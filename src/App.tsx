import Header from "./ComponentsPage/Header";
import Hero from "./ComponentsPage/Hero";
import Services from "./ComponentsPage/Services";
import About from "./ComponentsPage/About";
import Testimonials from "./ComponentsPage/Testimonials";
import Contact from "./ComponentsPage/Contact";
import Footer from "./ComponentsPage/Footer";
import NumbersCounter from "./ComponentsPage/NumbersCounter";
import "./App.css"

export default function TaxConsultoriaLanding() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <NumbersCounter />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
