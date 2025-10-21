import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Building2, Users, Globe, Award } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const features = [
    { icon: Building2, text: "Knowledge-based costings" },
    { icon: Users, text: "Experienced teams" },
    { icon: Globe, text: "Global partnerships" },
    { icon: Award, text: "Quality assurance" },
  ];

  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                <span className="text-2xl font-semibold text-primary">2D creations Sourcing</span> is a leading apparel sourcing company providing knowledge-based costings, flexible volumes, shorter lead times, and real-time communication.
              </p>
              <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                Our experienced and dedicated teams ensure precise tracking and streamlined control from raw materials to finished garments.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                We collaborate closely with design and sales partners in the UK and Netherlands to deliver market-ready products.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 bg-card rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-card cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {feature.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
