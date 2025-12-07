
import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen, Layers, PlayCircle, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const isActive = (path: string) => location.pathname.startsWith(path);

  const navLinks = [
    { name: t.nav.start, path: '/start', icon: PlayCircle },
    { name: t.nav.templates, path: '/templates', icon: Layers },
    { name: t.nav.basics, path: '/basics', icon: GraduationCap },
    { name: t.nav.about, path: '/about', icon: Sparkles },
  ];

  const FlagIcon: React.FC<{ lang: 'en' | 'es', active: boolean, onClick: () => void }> = ({ lang, active, onClick }) => {
    // Simple inline SVG flags to avoid external dependencies
    const USFlag = (
      <svg viewBox="0 0 60 60" className="w-8 h-8 rounded-full object-cover">
        <circle cx="30" cy="30" r="30" fill="#f0f0f0"/>
        <path fill="#BD3D44" d="M0 30c0 14.2 9.8 26.1 22.9 29.1l-.8-6.1H60V7H22.1l.8-6.1C9.8 3.9 0 15.8 0 30z"/>
        <path fill="#fff" d="M0 30c0 2 .2 3.9.5 5.8h59c.3-1.9.5-3.8.5-5.8s-.2-3.9-.5-5.8H.5c-.3 1.9-.5 3.8-.5 5.8z"/>
        <path fill="#BD3D44" d="M3.2 16.5h53.6c.9 1.9 1.6 3.9 2.1 6H1.1c.5-2.1 1.2-4.1 2.1-6zm53.6 27H3.2c-1 2.1-1.6 4.1-2.1 6h57.8c-.4-1.9-1.1-3.9-2.1-6z"/>
        <path fill="#192F5D" d="M0 30c0-10.9 5.8-20.4 14.5-25.7v51.4C5.8 50.4 0 40.9 0 30z"/>
        <g fill="#fff">
            {/* Simplified stars */}
           <circle cx="6" cy="12" r="1.5"/>
           <circle cx="6" cy="22" r="1.5"/>
           <circle cx="6" cy="32" r="1.5"/>
           <circle cx="6" cy="42" r="1.5"/>
           <circle cx="12" cy="18" r="1.5"/>
           <circle cx="12" cy="28" r="1.5"/>
           <circle cx="12" cy="38" r="1.5"/>
        </g>
      </svg>
    );

    const MXFlag = (
      <svg viewBox="0 0 60 60" className="w-8 h-8 rounded-full object-cover">
         <circle cx="30" cy="30" r="30" fill="#f0f0f0"/>
         <path fill="#006847" d="M0 30c0-12.7 8-23.6 19-27.9V58c-11-4.3-19-15.2-19-28z"/>
         <path fill="#CE1126" d="M60 30c0 12.7-8 23.6-19 27.9V2.1C52 6.4 60 17.3 60 30z"/>
         {/* Simplified emblem */}
         <circle cx="30" cy="30" r="8" fill="#D6C78F"/> 
         <circle cx="30" cy="30" r="4" fill="#693C23"/> 
      </svg>
    );

    return (
      <button 
        onClick={onClick}
        className={`rounded-full transition-all p-0.5 ${active ? 'ring-2 ring-brand-blue bg-blue-100 scale-110' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
        title={t.nav.changeLang}
        aria-label={t.nav.changeLang}
      >
        {lang === 'en' ? USFlag : MXFlag}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white transition-transform group-hover:scale-110">
              <Sparkles size={18} />
            </div>
            <span className="font-display font-bold text-xl text-brand-text tracking-tight">{t.nav.brand}</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-blue flex items-center gap-1.5 ${
                  isActive(link.path) ? 'text-brand-blue' : 'text-brand-body'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center space-x-3 px-2 border-l border-gray-200 pl-4 ml-2">
              <FlagIcon lang="en" active={language === 'en'} onClick={() => setLanguage('en')} />
              <FlagIcon lang="es" active={language === 'es'} onClick={() => setLanguage('es')} />
            </div>

            <Button size="sm" variant="accent" onClick={() => window.location.hash = '#/start'}>{t.nav.cta}</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <div className="flex items-center space-x-2 mr-2">
                <FlagIcon lang="en" active={language === 'en'} onClick={() => setLanguage('en')} />
                <FlagIcon lang="es" active={language === 'es'} onClick={() => setLanguage('es')} />
              </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-body hover:text-brand-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium flex items-center gap-3 ${
                  isActive(link.path) ? 'bg-brand-sky text-brand-blue' : 'text-brand-body hover:bg-gray-50'
                }`}
              >
                <link.icon size={18} />
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
               <Button fullWidth variant="accent" onClick={() => {
                 setIsOpen(false);
                 window.location.hash = '#/start';
               }}>{t.nav.cta}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
