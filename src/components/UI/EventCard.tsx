import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  delay: number;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-900/30 hover:border-blue-500/50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="bg-blue-500/20 p-3 rounded-lg">
          <Calendar className="text-blue-400 w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-blue-400 mb-2">{date}</p>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;