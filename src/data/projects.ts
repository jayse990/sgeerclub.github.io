export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  team?: string;
  status: string;
  statusEmoji: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Imprimante 3D',
    description: 'Construction d\'une imprimante 3D open-source pour produire des pièces personnalisées. Notre équipe de 4 membres travaille actuellement sur le prototypage de cette solution qui permettra de démocratiser la fabrication additive.',
    image: 'https://images.unsplash.com/photo-1705475025559-ad8efdedc74f?w=800&auto=format&fit=crop&q=80',
    team: '4 membres 🔧',
    status: 'En phase de prototypage',
    statusEmoji: '🧪'
  },
  {
    id: 2,
    title: 'Station météo connectée',
    description: 'Développement d\'une station météo intelligente avec capteurs environnementaux et transmission de données en temps réel. Ce projet nous permet de suivre l\'évolution du climat local et de comprendre les phénomènes météorologiques.',
    image: 'https://images.unsplash.com/photo-1650530224492-f5a8b6e77fae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    status: 'Assemblage des composants',
    statusEmoji: '🌦️'
  },
  {
    id: 3,
    title: 'Robot suiveur de ligne',
    description: 'Conception d\'un robot mobile autonome capable de suivre une ligne noire au sol. Ce projet permet une excellente initiation à l\'automatique et à la logique embarquée.',
    image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg',
    status: 'En développement',
    statusEmoji: '🤖'
  },
  {
    id: 4,
    title: 'Prothèse robotique & Panneaux solaires',
    description: 'Double projet innovant : développement d\'une prothèse robotique abordable pour l\'apprentissage biomécanique et optimisation du rendement de panneaux solaires à petite échelle.',
    image: 'https://images.pexels.com/photos/3912981/pexels-photo-3912981.jpeg',
    status: 'Étude de faisabilité',
    statusEmoji: '🦾'
  }
];

export const futureProjects = [
  {
    id: 1,
    title: 'Hackathon Universitaire',
    description: 'Lancer un hackathon interfaculté',
    emoji: '🧠'
  },
  {
    id: 2,
    title: 'Microcentrale Solaire',
    description: 'Développer une microcentrale pour les étudiants',
    emoji: '🔋'
  },
  {
    id: 3,
    title: 'Satellite Éducatif',
    description: 'Concevoir un prototype Arduino',
    emoji: '🛰️'
  },
  {
    id: 4,
    title: 'Pôle Innovation',
    description: 'Devenir un centre régional d\'innovation',
    emoji: '🌍'
  }
];