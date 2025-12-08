

import React from 'react';
import { Sparkles, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                <Sparkles size={18} />
              </div>
              <span className="font-display font-bold text-xl text-brand-text">{t.nav.brand}</span>
            </Link>
            <p className="text-brand-body text-sm max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-text mb-4">{t.footer.explore}</h4>
            <ul className="space-y-2 text-sm text-brand-body">
              <li><Link to="/start" className="hover:text-brand-blue transition-colors">{t.nav.start}</Link></li>
              <li><Link to="/templates" className="hover:text-brand-blue transition-colors">{t.nav.templates}</Link></li>
              <li><Link to="/basics" className="hover:text-brand-blue transition-colors">{t.nav.basics}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-brand-text mb-4">{t.footer.connect}</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
            </div>
            <div className="text-sm text-gray-500">
              hello@mypractical-ai.com
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-600">{t.footer.privacy}</a>
            <a href="#" className="hover:text-gray-600">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;