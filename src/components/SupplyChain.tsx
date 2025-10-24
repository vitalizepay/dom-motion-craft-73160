import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Palette, 
  PackageSearch, 
  Factory, 
  ClipboardCheck,
  Shirt,
  Award,
  TrendingUp,
  Ship
} from "lucide-react";

const SupplyChain = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stages = [
    { icon: Palette, title: "Product design & development", delay: 0.1 },
    { icon: PackageSearch, title: "Raw material management", delay: 0.2 },
    { icon: Factory, title: "Production planning & QA", delay: 0.3 },
    { icon: Ship, title: "Shipping & logistics", delay: 0.4 },
  ];

  return (
    <section id="supply-chain" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Supply Chain Excellence
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed">
            2D Creation manages every critical stage of the supply chain with professionalism, 
            transparency, and integrity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: stage.delay }}
              whileHover={{ x: 10, scale: 1.02 }}
              className="group relative p-8 bg-card rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 cursor-pointer overflow-hidden"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mb-6 bg-accent/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors"
                >
                  <stage.icon className="w-8 h-8 text-accent" />
                </motion.div>
                
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                  {stage.title}
                </h3>
              </div>

              {/* Animated Border */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-accent"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 0.8, delay: stage.delay + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground italic">
            Our product specialists handle every detail with precision and care
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplyChain;
