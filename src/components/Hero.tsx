import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Shirt, Award, Gauge, Factory } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-2d.png";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      >
        <div 
          className="w-full h-full bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 max-w-7xl mx-auto py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-white rounded-2xl p-6 mx-auto mb-6">
            <img 
              src={logo} 
              alt="2D Creation Logo" 
              className="h-32 md:h-48"
            />
          </div>
          <p className="text-3xl md:text-4xl lg:text-5xl text-primary font-semibold">
            Global Apparel Sourcing
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <StatCard
            icon={Shirt}
            value="3M+"
            label="Pieces Monthly"
            delay={0.4}
            inView={inView}
          />
          <StatCard
            icon={Factory}
            value="20+"
            label="Factories"
            delay={0.5}
            inView={inView}
          />
          <StatCard
            icon={Gauge}
            value="20+"
            label="Years Excellence"
            delay={0.6}
            inView={inView}
          />
          <StatCard
            icon={Award}
            value="100%"
            label="Quality Certified"
            delay={0.7}
            inView={inView}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-primary text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label, delay, inView }: any) => {
  const [count, setCount] = useState(0);
  const isNumber = value.includes("+") && !value.includes("M");
  const targetNumber = isNumber ? parseInt(value) : 100;

  useEffect(() => {
    if (inView && isNumber) {
      let current = 1;
      const end = targetNumber;
      const stepDuration = 100;

      const timer = setInterval(() => {
        setCount(current);
        current += 1;
        if (current > end) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber, isNumber]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-4 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-4 bg-accent/20 rounded-xl flex items-center justify-center mx-auto">
        <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent" />
      </div>
      <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent mb-1 md:mb-2">
        {isNumber ? `${count}+` : value}
      </h3>
      <p className="text-sm md:text-lg font-semibold text-primary">{label}</p>
    </motion.div>
  );
};

export default Hero;
