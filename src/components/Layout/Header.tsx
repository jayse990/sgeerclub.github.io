import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Menu, X, Lightbulb } from 'lucide-react';
import LanguageSwitcher from '../UI/LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            to="/"
            className="font-bold text-xl md:text-2xl text-blue-400 transition-colors hover:text-purple-400 flex items-center gap-2"
          >
            <Lightbulb className="text-yellow-400" size={24} />
            <span>CSGEER</span>
          </Link>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/') ? 'text-blue-400' : 'text-white'
              }`}
            >
              {t('home')}
            </Link>
            <Link
              to="/events"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/events') ? 'text-blue-400' : 'text-white'
              }`}
            >
              {t('events')}
            </Link>
            <Link
              to="/projects"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/projects') ? 'text-blue-400' : 'text-white'
              }`}
            >
              {t('projects')}
            </Link>
            <Link
              to="/library"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/library') ? 'text-blue-400' : 'text-white'
              }`}
            >
              {t('library')}
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/contact') ? 'text-blue-400' : 'text-white'
              }`}
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/') ? 'text-blue-400' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/events"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/events') ? 'text-blue-400' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('events')}
            </Link>
            <Link
              to="/projects"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/projects') ? 'text-blue-400' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('projects')}
            </Link>
            <Link
              to="/library"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/library') ? 'text-blue-400' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('library')}
            </Link>
            <Link
              to="/contact"
              className={`transition-colors hover:text-blue-400 ${
                isActive('/contact') ? 'text-blue-400' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;