import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          {t('welcome')}
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-md">
          {t('subtitle')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-black to-blue-900/40 p-6 rounded-lg backdrop-blur-sm border border-blue-900/30"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">{t('about_title')}</h2>
          <p className="text-gray-300">{t('about_text')}</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-black to-purple-900/40 p-6 rounded-lg backdrop-blur-sm border border-purple-900/30"
        >
          <h2 className="text-2xl font-semibold text-purple-400 mb-4">{t('mission_title')}</h2>
          <p className="text-gray-300">{t('mission_text')}</p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-16 relative overflow-hidden rounded-xl"
      >
        <img 
          src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Technology" 
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white mb-2">
              {t('welcome')}
            </h3>
            <p className="text-blue-300">
              {t('motivational_message')}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;