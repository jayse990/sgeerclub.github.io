import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const LanguageSwitcher: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center space-x-2 bg-blue-900/30 hover:bg-blue-800/50 rounded-full px-3 py-1 transition-colors"
      aria-label={language === 'fr' ? 'Switch to English' : 'Passer au Français'}
    >
      <span className="text-white text-sm">
        {language === 'fr' ? '🇫🇷' : '🇬🇧'}
      </span>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        key={language}
        className="text-white text-sm"
      >
        {language === 'fr' ? 'FR' : 'EN'}
      </motion.div>
    </button>
  );
};

export default LanguageSwitcher;