import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur-md py-8 relative z-10 mt-12 border-t border-blue-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xl font-bold text-blue-400">
              SGEER<span className="text-purple-400">CLUB</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              &copy; {currentYear} {t('welcome')}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/share/19jzmBGrSd/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors" 
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.instagram.com/csgeer06?igsh=ZXE1YzVvY2t0OXc3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-blue-400 transition-colors" 
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;