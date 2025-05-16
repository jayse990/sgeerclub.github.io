import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-br from-black to-blue-900/40 rounded-lg overflow-hidden shadow-lg backdrop-blur-sm border border-blue-900/30 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex items-center gap-2 text-sm font-medium text-blue-400 mb-2">
            <span>{project.statusEmoji}</span>
            <span>{project.status}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-300 text-sm">{project.description}</p>
        {project.team && (
          <div className="mt-4 text-sm text-blue-400">{project.team}</div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;