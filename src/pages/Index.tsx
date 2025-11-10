import Hero from "@/components/Hero";
import About from "@/components/About";
import SupplyChain from "@/components/SupplyChain";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <SupplyChain />
      <Services />
      <Sustainability />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
