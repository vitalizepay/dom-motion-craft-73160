import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Factory, Users, Gauge, Award } from "lucide-react";

const ProductionCapacity = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="production" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Production Capacity
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-card to-muted/30 rounded-3xl p-10 md:p-16 border-2 border-accent/20 shadow-card mb-16"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-6">
            Our facilities are equipped with <span className="font-bold text-accent">imported machines</span>, offering a production capacity of <span className="text-3xl font-bold text-accent">5 million pieces per month</span>.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            With efficient workflow design and advanced vacuum table finishing, we ensure every garment meets top global standards.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={Factory}
            value="5M+"
            label="Pieces per Month"
            delay={0.3}
            inView={inView}
          />
          <StatCard
            icon={Users}
            value="Expert"
            label="Production Teams"
            delay={0.4}
            inView={inView}
          />
          <StatCard
            icon={Gauge}
            value="Premium"
            label="Imported Machinery"
            delay={0.5}
            inView={inView}
          />
          <StatCard
            icon={Award}
            value="Global"
            label="Quality Standards"
            delay={0.6}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon: Icon, value, label, delay, inView }: any) => {
  const [count, setCount] = useState(0);
  const targetNumber = value === "5M+" ? 5 : 100;

  useEffect(() => {
    if (inView && value === "5M+") {
      let start = 0;
      const end = targetNumber;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, targetNumber, value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group relative p-8 bg-card rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        whileHover={{ scale: 1.5 }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors mx-auto"
        >
          <Icon className="w-8 h-8 text-accent" />
        </motion.div>

        {/* Value */}
        <div className="text-center mb-2">
          {value === "5M+" ? (
            <motion.h3 className="text-4xl md:text-5xl font-bold text-accent group-hover:glow-gold transition-all">
              {count}M+
            </motion.h3>
          ) : (
            <h3 className="text-3xl md:text-4xl font-bold text-accent group-hover:glow-gold transition-all">
              {value}
            </h3>
          )}
        </div>

        {/* Label */}
        <p className="text-sm md:text-base font-semibold text-center text-foreground/80 group-hover:text-foreground transition-colors">
          {label}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-accent"
        initial={{ width: 0 }}
        animate={inView ? { width: "100%" } : {}}
        transition={{ duration: 1, delay: delay + 0.3 }}
      />
    </motion.div>
  );
};

export default ProductionCapacity;
