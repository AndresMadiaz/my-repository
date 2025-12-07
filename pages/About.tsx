import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 animate-fade-in text-center">
      <h1 className="text-4xl font-display font-bold mb-8">{t.about.title}</h1>
      <div className="prose prose-lg mx-auto text-gray-600">
        <p className="mb-6">{t.about.p1}</p>
        <p className="mb-6">{t.about.p2}</p>
        <p className="mb-6">{t.about.p3}</p>
        <p>
          {t.about.contact}
        </p>
      </div>
    </div>
  );
};

export default About;
