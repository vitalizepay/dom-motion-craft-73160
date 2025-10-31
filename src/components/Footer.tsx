import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:Karthick@2dcreation.in", label: "Email" },
  ];

  return (
    <footer className="relative bg-primary text-primary-foreground py-16 px-6 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
            2D Creation
          </h3>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Precision. Partnership. Performance.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.label}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.4 }}
              className="group w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors duration-300"
            >
              <social.icon className="w-6 h-6 text-primary-foreground group-hover:text-accent-foreground transition-colors" />
            </motion.a>
          ))}
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mb-12 text-sm"
        >
          {["About", "Services", "Supply Chain", "Sustainability", "Contact"].map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 font-semibold"
            >
              {link}
            </a>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="h-px bg-primary-foreground/20 mb-8"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} 2D Creation. All Rights Reserved.
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      />
    </footer>
  );
};

export default Footer;
