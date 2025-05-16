import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, X, GraduationCap, Camera, Wallet } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [showJoinDialog, setShowJoinDialog] = useState(false);

  const handleFormRedirect = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe9k1PPgavkjmfDwi2d10ijre6Du90W7c1IFWql17YZDAb1Pg/viewform?usp=dialog', '_blank');
    setShowJoinDialog(false);
  };

  return (
    <div className="pt-20 md:pt-32">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text mb-4">
          {t('contact_title')}
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl">
          {t('motivational_message')}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-black to-blue-900/40 p-8 rounded-lg backdrop-blur-sm border border-blue-900/30"
        >
          <h2 className="text-2xl font-semibold text-blue-400 mb-6">
            {t('contact_info')}
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-3 rounded-full">
                <Phone className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{t('phone')}</h3>
                <p className="text-gray-300">{t('phone_value')}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-3 rounded-full">
                <Mail className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{t('email')}</h3>
                <p className="text-gray-300">csgeer@univ-bejaia.dz</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600/20 p-3 rounded-full">
                <MapPin className="text-blue-400" size={20} />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">{t('location')}</h3>
                <p className="text-gray-300">{t('location_value')}</p>
              </div>
            </div>
          </div>
          
          <Dialog.Root open={showJoinDialog} onOpenChange={setShowJoinDialog}>
            <Dialog.Trigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 px-6 rounded-full w-full hover:shadow-lg transition-all duration-300"
              >
                {t('join_button')}
              </motion.button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <Dialog.Content
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-50"
                as={motion.div}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <div className="bg-gradient-to-br from-blue-900/90 to-purple-900/90 p-6 rounded-lg border border-blue-500/30 backdrop-blur-md">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <Dialog.Title className="text-2xl font-bold text-white mb-2">
                        Merci de votre intérêt ! 🎉
                      </Dialog.Title>
                      <Dialog.Description className="text-blue-200">
                        Pour finaliser votre inscription, veuillez vous présenter au local du club avec :
                      </Dialog.Description>
                    </div>
                    <Dialog.Close className="text-gray-400 hover:text-white transition-colors">
                      <X size={24} />
                    </Dialog.Close>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <GraduationCap size={20} className="text-blue-300" />
                      </div>
                      <span>Votre certificat de scolarité</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <Camera size={20} className="text-blue-300" />
                      </div>
                      <span>Une photo d'identité</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="bg-blue-500/20 p-2 rounded-full">
                        <Wallet size={20} className="text-blue-300" />
                      </div>
                      <span>Frais d'inscription</span>
                    </div>
                  </div>

                  <p className="text-yellow-300 text-sm mb-6">
                    À bientôt parmi nous ! 😊
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleFormRedirect}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors"
                  >
                    Remplir le formulaire
                  </motion.button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="overflow-hidden rounded-lg h-[400px] relative"
        >
          <img 
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Merci de votre visite !
              </h3>
              <p className="text-blue-300">
                Notre communauté scientifique est en pleine expansion, et chaque esprit curieux est le bienvenu.
                Rejoignez-nous pour co-créer un futur technologique ancré dans l'apprentissage libre, le partage des idées et l'innovation utile.
                Que vous soyez passionné d'électronique, d'IA, de développement ou simplement curieux, il y a une place pour vous.
                Rejoignez l'aventure, apportez votre vision… et faisons la différence ensemble.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;