import { motion } from "framer-motion";
import logo from "@/assets/2d-creation-logo.png";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1" />
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-background/80 backdrop-blur-md rounded-xl px-6 py-3 shadow-lg border border-accent/20"
        >
          <img 
            src={logo} 
            alt="2D Creation Logo" 
            className="h-16 w-auto"
          />
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
