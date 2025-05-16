import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import * as Tabs from '@radix-ui/react-tabs';
import { Timer, PieChart, LayoutGrid, Bot, Link as LinkIcon, BookOpen, Globe, Archive, School, Brain, Search, MessageSquare, Sparkles } from 'lucide-react';
import PomodoroTimer from '../components/UI/PomodoroTimer';
import IrisChat from '../components/UI/IrisChat';
import { cn } from '../lib/utils';

const Library: React.FC = () => {
  const { t } = useLanguage();

  const usefulLinks = [
    // AI Tools
    { 
      name: 'ChatGPT',
      url: 'https://chat.openai.com',
      icon: MessageSquare,
      description: 'Assistant IA polyvalent pour questions, génération de contenu et code',
      isAI: true
    },
    { 
      name: 'Claude',
      url: 'https://claude.ai',
      icon: Brain,
      description: 'Assistant IA performant pour l\'analyse de documents',
      isAI: true
    },
    { 
      name: 'Perplexity AI',
      url: 'https://www.perplexity.ai',
      icon: Search,
      description: 'Moteur de recherche IA avec réponses sourcées',
      isAI: true
    },
    { 
      name: 'Google Gemini',
      url: 'https://gemini.google.com',
      icon: Sparkles,
      description: 'Assistant Google IA intégré aux outils de productivité',
      isAI: true
    },
    { 
      name: 'You.com',
      url: 'https://you.com',
      icon: Search,
      description: 'Moteur de recherche IA avec fonctionnalités de rédaction',
      isAI: true
    },
    { 
      name: 'Poe',
      url: 'https://poe.com',
      icon: MessageSquare,
      description: 'Agrégateur de plusieurs IA en un seul endroit',
      isAI: true
    },
    { 
      name: 'Hugging Face',
      url: 'https://huggingface.co',
      icon: Brain,
      description: 'Bibliothèque IA libre et plateforme de modèles',
      isAI: true
    },
    { 
      name: 'Microsoft Copilot',
      url: 'https://copilot.microsoft.com',
      icon: Sparkles,
      description: 'Assistant IA intégré à Windows 11 et Microsoft 365',
      isAI: true
    },
    // Educational Resources
    { name: 'Khan Academy', url: 'https://www.khanacademy.org', icon: School },
    { name: 'OpenClassrooms', url: 'https://openclassrooms.com', icon: BookOpen },
    { name: 'Coursera', url: 'https://www.coursera.org', icon: Globe },
    { name: 'edX', url: 'https://www.edx.org', icon: School },
    { name: 'FutureLearn', url: 'https://www.futurelearn.com', icon: Globe },
    { name: 'TED', url: 'https://www.ted.com', icon: Globe },
    { name: 'Science.org', url: 'https://www.science.org', icon: BookOpen },
    { name: 'World Digital Library', url: 'https://www.wdl.org', icon: Globe },
    { name: 'Internet Archive', url: 'https://archive.org', icon: Archive },
    { name: 'Wikipedia', url: 'https://www.wikipedia.org', icon: Globe },
    { 
      name: 'Université de Béjaïa - eLearning',
      url: 'https://elearning.univ-bejaia.dz',
      icon: School,
      description: 'Plateforme d\'apprentissage en ligne de l\'Université de Béjaïa'
    }
  ];

  return (
    <div className="pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          {t('library_title')}
        </h1>
      </motion.div>

      <Tabs.Root defaultValue="productivity" className="outline-none">
        <Tabs.List className="flex space-x-2 mb-8 border-b border-blue-900/30">
          {[
            { id: 'productivity', icon: Timer, label: t('productivity_title') },
            { id: 'iris', icon: Bot, label: 'Iris Quiz' },
            { id: 'links', icon: LinkIcon, label: t('useful_links') },
          ].map(({ id, icon: Icon, label }) => (
            <Tabs.Trigger
              key={id}
              value={id}
              className={cn(
                "group flex items-center gap-2 px-4 py-2 text-gray-400 border-b-2 border-transparent",
                "hover:text-blue-400 transition-colors outline-none",
                "data-[state=active]:text-blue-400 data-[state=active]:border-blue-400"
              )}
            >
              <Icon size={20} />
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="productivity" className="outline-none">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold text-white mb-4">
                  {t('pomodoro_title')}
                </h2>
                <p className="text-gray-300 mb-6">{t('pomodoro_desc')}</p>
                <PomodoroTimer />
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-900/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <PieChart className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">
                    {t('pareto_title')}
                  </h3>
                </div>
                <p className="text-gray-300">{t('pareto_desc')}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm rounded-lg p-6 border border-blue-900/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <LayoutGrid className="text-blue-400" size={24} />
                  <h3 className="text-xl font-semibold text-white">
                    {t('eisenhower_title')}
                  </h3>
                </div>
                <p className="text-gray-300">{t('eisenhower_desc')}</p>
              </motion.div>
            </div>
          </div>
        </Tabs.Content>

        <Tabs.Content value="iris" className="outline-none">
          <IrisChat />
        </Tabs.Content>

        <Tabs.Content value="links" className="outline-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Brain className="text-blue-400" />
                Outils d'Intelligence Artificielle
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usefulLinks.filter(link => link.isAI).map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col gap-2 p-4 rounded-lg bg-gradient-to-br from-purple-900/30 to-blue-900/20 backdrop-blur-sm border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <link.icon className="text-purple-400 group-hover:text-purple-300 transition-colors" size={20} />
                      <span className="text-white group-hover:text-purple-300 transition-colors font-medium">
                        {link.name}
                      </span>
                    </div>
                    {link.description && (
                      <p className="text-sm text-gray-400 group-hover:text-gray-300">
                        {link.description}
                      </p>
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <BookOpen className="text-blue-400" />
                Ressources Éducatives
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {usefulLinks.filter(link => !link.isAI).map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105"
                  >
                    <link.icon className="text-blue-400 group-hover:text-blue-300 transition-colors" size={20} />
                    <span className="text-white group-hover:text-blue-300 transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default Library;