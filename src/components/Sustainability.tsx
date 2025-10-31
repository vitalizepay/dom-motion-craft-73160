import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import { Leaf, Heart, Globe2, Recycle } from "lucide-react";
import sustainabilityBg from "@/assets/sustainability-bg.jpg";

const Sustainability = () => {
  const containerRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const features = [
    { icon: Leaf, text: "Sustainable practices" },
    { icon: Heart, text: "Social responsibility" },
    { icon: Globe2, text: "Environmental care" },
    { icon: Recycle, text: "Resource preservation" },
  ];

  return (
    <section 
      id="sustainability" 
      ref={containerRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainabilityBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary/90" />
      </motion.div>

      {/* Overlay Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(30deg, hsl(var(--accent)) 12%, transparent 12.5%, transparent 87%, hsl(var(--accent)) 87.5%, hsl(var(--accent)))',
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--accent)) 0%, hsl(var(--gold-glow)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Sustainability
          </motion.h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8 shadow-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-card/95 backdrop-blur-sm rounded-3xl p-10 md:p-16 border-2 border-accent/30 shadow-card mb-12"
        >
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
            <span className="font-bold">2D creations <span className="text-accent">Sourcing</span></span> is committed to sustainability — maintaining a balance between progress and preserving natural resources.
          </p>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            We aim to build a purpose-driven business that positively impacts society and the environment.
          </p>
        </motion.div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group text-center"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 mx-auto mb-4 bg-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-accent/40 group-hover:border-accent group-hover:shadow-gold transition-all duration-300"
              >
                <feature.icon className="w-10 h-10 text-accent group-hover:scale-110 transition-transform" />
              </motion.div>
              <p className="text-primary-foreground font-semibold group-hover:text-accent transition-colors">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
