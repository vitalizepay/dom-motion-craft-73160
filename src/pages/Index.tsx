import Hero from "@/components/Hero";
import About from "@/components/About";
import SupplyChain from "@/components/SupplyChain";
import Services from "@/components/Services";
import Sustainability from "@/components/Sustainability";
import ProductionCapacity from "@/components/ProductionCapacity";
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
      <ProductionCapacity />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
