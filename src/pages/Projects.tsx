import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projects, futureProjects } from '../data/projects';
import ProjectCard from '../components/UI/ProjectCard';
import { Puzzle, MessageSquare } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          Projets & Ambitions
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-br from-black to-blue-900/40 p-6 rounded-lg backdrop-blur-sm border border-blue-900/30 mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-blue-500/20 p-3 rounded-full">
            <Puzzle className="text-blue-400 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            Notre méthode de travail collaborative
          </h2>
        </div>
        <p className="text-gray-300">
          Au sein du club SGEER, notre force repose sur une méthode de travail basée sur la collaboration, 
          la liberté d'apprentissage et la planification collective. Chaque projet est pensé, discuté, 
          attribué en équipe avec des rôles définis, dans une atmosphère d'entraide et de créativité.
        </p>
        <p className="text-gray-300 mt-4">
          📅 Des réunions régulières sont organisées pour faire le point, brainstormer et construire ensemble.
        </p>
      </motion.div>

      <h2 className="text-2xl font-semibold text-white mb-8">Nos projets en cours</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-lg backdrop-blur-sm border border-yellow-500/30 mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-yellow-500/20 p-3 rounded-full">
            <MessageSquare className="text-yellow-400 w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-white">
            Rejoins un projet
          </h2>
        </div>
        <p className="text-gray-300 mb-4">
          Envie de contribuer à un projet ? Que tu sois débutant ou expert, une place t'attend !
          💬 Contacte un responsable ou rejoins la réunion du jeudi soir.
        </p>
        <Link 
          to="/contact"
          className="bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 px-6 py-2 rounded-full transition-colors inline-block"
        >
          En savoir plus
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-8">
          Ce que nous rêvons de construire demain
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {futureProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 p-4 rounded-lg backdrop-blur-sm border border-blue-900/30 text-center"
            >
              <div className="text-4xl mb-2">{project.emoji}</div>
              <h3 className="text-white font-medium mb-1">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;