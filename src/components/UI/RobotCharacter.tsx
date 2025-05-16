import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const RobotCharacter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.5 }}
      className="absolute -right-12 top-1/2 transform -translate-y-1/2"
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="relative"
      >
        <div className="bg-blue-500/20 p-3 rounded-full backdrop-blur-sm">
          <Bot className="text-blue-400 w-6 h-6" />
        </div>
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-400/20 rounded-full"
          animate={{
            scaleX: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default RobotCharacter;