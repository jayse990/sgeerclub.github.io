import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EventCard from '../components/UI/EventCard';
import RocketAnimation from '../components/Animations/RocketAnimation';

const Events: React.FC = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: t('event1_title'),
      date: t('event1_date'),
      description: t('event1_desc'),
      delay: 0.2
    },
    {
      title: t('event2_title'),
      date: "Prochainement",
      description: t('event2_desc'),
      delay: 0.4
    }
  ];

  return (
    <div className="pt-20 md:pt-32 relative min-h-screen">
      <RocketAnimation />

      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>{t('back_home')}</span>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
            {t('events_title')}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl">
            {t('events_subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            {events.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                description={event.description}
                delay={event.delay}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center items-center"
          >
            <img
              src="/assets/images/evenement19mai.png"
              alt="Événement 19 Mai"
              className="w-full max-w-xl h-auto object-contain rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
