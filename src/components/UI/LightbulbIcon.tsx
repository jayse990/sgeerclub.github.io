import React, { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import RobotCharacter from './RobotCharacter';

const LightbulbIcon: React.FC = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const { t } = useLanguage();

  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };

  return (
    <div className="relative">
      <motion.div
        className="relative"
        animate={{
          scale: isLightOn ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: isLightOn ? Infinity : 0,
          repeatType: "reverse"
        }}
      >
        <motion.button
          className={`p-3 rounded-full transition-all duration-500 ${
            isLightOn ? 'bg-yellow-400/20' : 'bg-blue-900/30 hover:bg-blue-800/40'
          }`}
          onClick={toggleLight}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          aria-label="Toggle lightbulb"
        >
          <Lightbulb
            size={28}
            className={`transition-colors duration-500 ${isLightOn ? 'text-yellow-300' : 'text-gray-300'}`}
          />
        </motion.button>

        {/* Light rays */}
        <AnimatePresence>
          {isLightOn && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-1 bg-gradient-to-r from-yellow-400/50 to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `rotate(${i * 45}deg) translateX(1.5rem)`,
                    transformOrigin: '0 50%',
                  }}
                  animate={{
                    scaleX: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isLightOn && <RobotCharacter />}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {isLightOn && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="absolute top-full mt-3 right-0 bg-gradient-to-br from-yellow-400 to-yellow-600 p-4 rounded-lg shadow-lg w-64 z-50"
          >
            <p className="text-black font-medium">✨ Bienvenue à bord, toi ! Prêt(e) à innover avec nous ?</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LightbulbIcon;