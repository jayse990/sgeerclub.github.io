import { useLanguage } from '../context/LanguageContext';

export interface Question {
  id: string;
  question: string;
  choices: string[];
  answer: string;
  explanation?: string;
  type: 'classic' | 'technical';
}

export const questions: Question[] = [
  // Technical Mode Questions
  {
    id: "tech1",
    question: "Quelle est l'unité de mesure de la résistance ?",
    choices: ["Volt", "Ohm", "Ampère", "Watt"],
    answer: "Ohm",
    explanation: "L'ohm est l'unité de mesure de la résistance électrique dans le Système International",
    type: "technical"
  },
  {
    id: "tech2",
    question: "Que signifie HTML ?",
    choices: ["HyperText Machine Language", "HighText Markdown Language", "HyperText Markup Language", "Hyper Tool Markup Language"],
    answer: "HyperText Markup Language",
    explanation: "HTML est le langage de balisage standard pour créer des pages web",
    type: "technical"
  },
  {
    id: "tech3",
    question: "En électronique, un transistor sert à :",
    choices: ["Afficher des images", "Amplifier ou commuter un signal", "Transmettre du son", "Accroître la tension"],
    answer: "Amplifier ou commuter un signal",
    explanation: "Le transistor est un composant électronique fondamental utilisé pour amplifier ou commuter des signaux électriques",
    type: "technical"
  },
  {
    id: "tech4",
    question: "Quelle est la fréquence du courant alternatif en Europe ?",
    choices: ["50 Hz", "60 Hz", "100 Hz", "220 Hz"],
    answer: "50 Hz",
    explanation: "En Europe, le courant alternatif a une fréquence standard de 50 Hz",
    type: "technical"
  },
  {
    id: "tech5",
    question: "Quel langage est principalement utilisé pour le développement Android natif ?",
    choices: ["Swift", "Java", "Python", "Kotlin"],
    answer: "Java",
    explanation: "Java est historiquement le langage principal pour le développement d'applications Android natives",
    type: "technical"
  },
  {
    id: "tech6",
    question: "Le protocole TCP/IP sert à :",
    choices: ["Créer des images", "Contrôler les serveurs DNS", "Communiquer sur un réseau", "Compiler du code"],
    answer: "Communiquer sur un réseau",
    explanation: "TCP/IP est l'ensemble des protocoles utilisés pour la communication sur Internet",
    type: "technical"
  },
  {
    id: "tech7",
    question: "Que signifie IoT ?",
    choices: ["Internet of Transmissions", "Internal Optical Technology", "Internet of Things", "Integrated of Technology"],
    answer: "Internet of Things",
    explanation: "IoT (Internet of Things) désigne l'ensemble des objets connectés à Internet",
    type: "technical"
  },
  {
    id: "tech8",
    question: "Quelle énergie est renouvelable ?",
    choices: ["Charbon", "Gaz naturel", "Pétrole", "Solaire"],
    answer: "Solaire",
    explanation: "L'énergie solaire est une source d'énergie renouvelable car elle est inépuisable",
    type: "technical"
  },
  {
    id: "tech9",
    question: "Le microcontrôleur Arduino est souvent programmé en :",
    choices: ["Java", "C/C++", "HTML", "Python"],
    answer: "C/C++",
    explanation: "Arduino utilise un langage basé sur C/C++ pour la programmation de ses microcontrôleurs",
    type: "technical"
  },
  {
    id: "tech10",
    question: "Dans un circuit, un condensateur sert à :",
    choices: ["Convertir l'énergie", "Résister au courant", "Stocker de l'énergie", "Émettre des signaux"],
    answer: "Stocker de l'énergie",
    explanation: "Le condensateur est un composant qui peut stocker temporairement de l'énergie électrique",
    type: "technical"
  },
  {
    id: "tech11",
    question: "La loi d'Ohm est :",
    choices: ["V = R / I", "R = I × V", "V = I × R", "I = V × R"],
    answer: "V = I × R",
    explanation: "La loi d'Ohm établit que la tension (V) est égale au produit du courant (I) par la résistance (R)",
    type: "technical"
  },
  {
    id: "tech12",
    question: "Un oscilloscope sert à :",
    choices: ["Créer des signaux", "Afficher des courbes de tension dans le temps", "Mesurer une température", "Contrôler un moteur"],
    answer: "Afficher des courbes de tension dans le temps",
    explanation: "L'oscilloscope est un instrument de mesure qui permet de visualiser l'évolution temporelle des signaux électriques",
    type: "technical"
  },
  {
    id: "tech13",
    question: "Le système binaire est basé sur :",
    choices: ["10 chiffres", "5 chiffres", "2 chiffres", "8 chiffres"],
    answer: "2 chiffres",
    explanation: "Le système binaire n'utilise que deux chiffres (0 et 1) pour représenter les nombres",
    type: "technical"
  },
  {
    id: "tech14",
    question: "Le mot-clé 'for' est utilisé dans :",
    choices: ["HTML", "CSS", "Python", "Photoshop"],
    answer: "Python",
    explanation: "'for' est une instruction de boucle utilisée dans de nombreux langages de programmation, dont Python",
    type: "technical"
  },
  {
    id: "tech15",
    question: "En réseau, l'adresse IP sert à :",
    choices: ["Afficher une image", "Identifier un appareil", "Jouer de la musique", "Éteindre un serveur"],
    answer: "Identifier un appareil",
    explanation: "Une adresse IP est un identifiant unique attribué à chaque appareil sur un réseau",
    type: "technical"
  },

  // Classic Mode Questions
  {
    id: "classic1",
    question: "Quelle est la capitale de l'Espagne ?",
    choices: ["Barcelone", "Madrid", "Séville", "Valence"],
    answer: "Madrid",
    explanation: "Madrid est la capitale de l'Espagne depuis 1561",
    type: "classic"
  },
  {
    id: "classic2",
    question: "Combien y a-t-il de continents ?",
    choices: ["5", "6", "7", "8"],
    answer: "7",
    explanation: "Les sept continents sont l'Asie, l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Europe et l'Océanie",
    type: "classic"
  },
  {
    id: "classic3",
    question: "Qui a peint la Joconde ?",
    choices: ["Picasso", "Léonard de Vinci", "Van Gogh", "Michel-Ange"],
    answer: "Léonard de Vinci",
    explanation: "La Joconde a été peinte par Léonard de Vinci au début du XVIe siècle",
    type: "classic"
  },
  {
    id: "classic4",
    question: "Quelle est la langue la plus parlée au monde ?",
    choices: ["Anglais", "Espagnol", "Arabe", "Mandarin"],
    answer: "Mandarin",
    explanation: "Le mandarin est la langue la plus parlée au monde en nombre de locuteurs natifs",
    type: "classic"
  },
  {
    id: "classic5",
    question: "Quelle planète est la plus proche du soleil ?",
    choices: ["Mars", "Mercure", "Vénus", "Terre"],
    answer: "Mercure",
    explanation: "Mercure est la planète la plus proche du Soleil dans notre système solaire",
    type: "classic"
  },
  {
    id: "classic6",
    question: "Quelle est la monnaie du Japon ?",
    choices: ["Won", "Dollar", "Yen", "Ringgit"],
    answer: "Yen",
    explanation: "Le yen est la monnaie officielle du Japon",
    type: "classic"
  },
  {
    id: "classic7",
    question: "En quelle année a eu lieu la Révolution française ?",
    choices: ["1789", "1804", "1795", "1815"],
    answer: "1789",
    explanation: "La Révolution française a débuté en 1789 avec la prise de la Bastille",
    type: "classic"
  },
  {
    id: "classic8",
    question: "L'eau bout à quelle température (niveau de la mer) ?",
    choices: ["50°C", "80°C", "100°C", "120°C"],
    answer: "100°C",
    explanation: "Au niveau de la mer, l'eau bout à 100 degrés Celsius",
    type: "classic"
  },
  {
    id: "classic9",
    question: "Quel est le plus grand pays du monde ?",
    choices: ["Chine", "Russie", "USA", "Canada"],
    answer: "Russie",
    explanation: "La Russie est le plus grand pays du monde en termes de superficie",
    type: "classic"
  },
  {
    id: "classic10",
    question: "Quel est l'animal le plus rapide sur terre ?",
    choices: ["Lion", "Gazelle", "Guépard", "Aigle"],
    answer: "Guépard",
    explanation: "Le guépard peut atteindre une vitesse de 110 km/h, ce qui en fait l'animal terrestre le plus rapide",
    type: "classic"
  },
  {
    id: "classic11",
    question: "Qui a écrit Les Misérables ?",
    choices: ["Balzac", "Molière", "Victor Hugo", "Zola"],
    answer: "Victor Hugo",
    explanation: "Les Misérables est un roman de Victor Hugo publié en 1862",
    type: "classic"
  },
  {
    id: "classic12",
    question: "Quelle est la mer qui borde l'Égypte ?",
    choices: ["Mer Noire", "Mer Rouge", "Mer de Chine", "Mer Caspienne"],
    answer: "Mer Rouge",
    explanation: "La Mer Rouge borde l'Égypte à l'est",
    type: "classic"
  },
  {
    id: "classic13",
    question: "Combien de zéros dans un million ?",
    choices: ["5", "6", "7", "8"],
    answer: "6",
    explanation: "Un million s'écrit avec six zéros : 1,000,000",
    type: "classic"
  },
  {
    id: "classic14",
    question: "Le mont le plus haut du monde ?",
    choices: ["Kilimandjaro", "Everest", "Mont Blanc", "Andes"],
    answer: "Everest",
    explanation: "Le mont Everest est le plus haut sommet du monde avec 8 848 mètres d'altitude",
    type: "classic"
  },
  {
    id: "classic15",
    question: "Le symbole chimique de l'or ?",
    choices: ["Go", "Or", "Au", "Ag"],
    answer: "Au",
    explanation: "Au (du latin Aurum) est le symbole chimique de l'or",
    type: "classic"
  }
];

export const getRandomQuestions = (count: number, type: 'classic' | 'technical'): Question[] => {
  const filteredQuestions = questions.filter(q => q.type === type);
  const shuffled = [...filteredQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};