import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { 
  Pencil, 
  Lightbulb, 
  Shirt,
  FlaskConical,
  Factory,
  ShieldCheck,
  TrendingUp,
  Ship
} from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    { icon: Pencil, title: "Designing", color: "from-blue-500 to-blue-600" },
    { icon: Lightbulb, title: "Product Development", color: "from-purple-500 to-purple-600" },
    { icon: Shirt, title: "Fabric Sourcing & Development", color: "from-pink-500 to-pink-600" },
    { icon: FlaskConical, title: "Sampling", color: "from-orange-500 to-orange-600" },
    { icon: Factory, title: "Production", color: "from-green-500 to-green-600" },
    { icon: ShieldCheck, title: "Quality Control", color: "from-teal-500 to-teal-600" },
    { icon: TrendingUp, title: "Merchandising", color: "from-indigo-500 to-indigo-600" },
    { icon: Ship, title: "Shipping & Logistics", color: "from-cyan-500 to-cyan-600" },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--accent)) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Comprehensive solutions for every stage of your apparel journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index, inView }: { service: any, index: number, inView: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group perspective-1000"
    >
      <motion.div
        whileHover={{ 
          y: -10,
          rotateX: 5,
          rotateY: 5,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Container */}
        <div className="relative h-64 bg-card rounded-2xl border-2 border-border overflow-hidden shadow-lg group-hover:shadow-card transition-all duration-500">
          {/* Gradient Background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          />

          {/* Top Gradient Overlay */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Bottom Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
            {/* Icon */}
            <motion.div
              animate={isHovered ? { 
                scale: 1.1,
                rotate: 360,
              } : { 
                scale: 1,
                rotate: 0 
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="mb-6"
            >
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-10 h-10 text-accent" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h3
              animate={isHovered ? { 
                scale: 1.05,
              } : { 
                scale: 1 
              }}
              className="text-xl font-bold text-center text-foreground group-hover:text-accent transition-colors duration-300"
            >
              {service.title}
            </motion.h3>
          </div>

          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.15), transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>

        {/* 3D Shadow Effect */}
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-2xl -z-10"
          animate={isHovered ? {
            y: 15,
            x: 5,
            scale: 0.95,
          } : {
            y: 5,
            x: 2,
            scale: 0.98,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Services;
