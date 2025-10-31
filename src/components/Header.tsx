import { motion } from "framer-motion";
import logo from "@/assets/2d-creation-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 right-0 z-50 p-6"
    >
      <div className="bg-card/90 backdrop-blur-sm rounded-2xl border-2 border-accent/30 p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
        <img 
          src={logo} 
          alt="2D Creation Logo" 
          className="h-12 w-auto"
        />
      </div>
    </motion.header>
  );
};

export default Header;
