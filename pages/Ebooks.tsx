import React, { useState } from 'react';
import { Download, Clock, BarChart } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import EmailCaptureModal from '../components/EmailCaptureModal';

const Ebooks: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<string | undefined>(undefined);

  const handleGetGuide = (title: string) => {
    setSelectedEbook(title);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
       <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">{t.ebooks.pageTitle}</h1>
        <p className="text-gray-600 text-lg">
          {t.ebooks.pageDesc}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {t.ebooks.items.map((ebook) => (
          <div key={ebook.id} className="group flex flex-col h-full">
            {/* Book Cover Mockup */}
            <div className={`aspect-[4/5] ${ebook.coverColor} rounded-2xl shadow-lg mb-6 relative overflow-hidden transition-transform transform group-hover:-translate-y-2 duration-300`}>
               <div className="absolute inset-0 bg-black/10"></div>
               <div className="absolute top-0 right-0 w-20 h-full bg-white/10 skew-x-12 blur-md"></div>
               <div className="absolute bottom-8 left-8 right-8">
                 <h3 className="text-2xl font-display font-bold text-white leading-tight mb-2">{ebook.title}</h3>
                 <p className="text-white/80 text-sm font-medium">AutoLearn Original</p>
               </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-3">
                 <span className="flex items-center gap-1"><Clock size={14}/> {ebook.readTime}</span>
                 <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                 <span className="flex items-center gap-1"><BarChart size={14}/> {ebook.level}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{ebook.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-1">{ebook.description}</p>
              <Button 
                onClick={() => handleGetGuide(ebook.title)}
                variant="outline" 
                fullWidth 
                className="group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors"
              >
                 <Download size={18} className="mr-2" /> {t.ebooks.btn}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <EmailCaptureModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        resourceTitle={selectedEbook}
      />
    </div>
  );
};

export default Ebooks;