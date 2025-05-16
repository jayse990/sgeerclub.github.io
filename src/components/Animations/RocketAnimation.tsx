import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const RocketAnimation: React.FC = () => {
  return (
    <motion.div
      initial={{ y: "100vh" }}
      animate={{ 
        y: "-100vh",
        rotate: -45,
      }}
      transition={{ 
        duration: 2,
        ease: "easeOut",
        delay: 0.5
      }}
      className="fixed right-20 bottom-0 text-blue-400 z-10"
    >
      <Rocket size={48} className="filter drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 0.8, 0],
        }}
        transition={{ 
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-4 h-12 bg-gradient-to-t from-blue-500 to-transparent rounded-full"
      />
    </motion.div>
  );
};

export default RocketAnimation;