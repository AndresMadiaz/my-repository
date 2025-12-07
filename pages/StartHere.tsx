import React, { useState } from 'react';
import { Briefcase, Coffee, HelpCircle, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import { getSimpleExplanation } from '../services/geminiService';
import { useLanguage } from '../context/LanguageContext';

const StartHere: React.FC = () => {
  const [term, setTerm] = useState('');
  const [explanation, setExplanation] = useState('');
  const [loading, setLoading] = useState(false);
  const { t, language } = useLanguage();

  const handleAskAI = async () => {
    if (!term.trim()) return;
    setLoading(true);
    setExplanation('');
    const result = await getSimpleExplanation(term, language);
    setExplanation(result);
    setLoading(false);
  };

  const tracks = [
    { icon: HelpCircle, color: "bg-blue-100 text-brand-blue", ...t.startHere.tracks[0] },
    { icon: Briefcase, color: "bg-indigo-100 text-indigo-700", ...t.startHere.tracks[1] },
    { icon: Coffee, color: "bg-sky-100 text-sky-800", ...t.startHere.tracks[2] },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-display font-bold mb-6 text-brand-text">{t.startHere.title}</h1>
        <p className="text-lg text-brand-body">{t.startHere.intro}</p>
      </div>

      {/* Tracks */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {tracks.map((track, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center hover:border-brand-sky">
            <div className={`w-16 h-16 ${track.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <track.icon size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-brand-text">{track.title}</h3>
            <p className="text-brand-body mb-8">{track.desc}</p>
            <Button variant="outline" size="sm" fullWidth>{track.btn}</Button>
          </div>
        ))}
      </div>

      {/* AI Tutor Interactive Section */}
      <div className="bg-gradient-to-br from-brand-blue to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
               <MessageSquare size={14} /> {t.startHere.tutor.tag}
            </div>
            <h2 className="text-3xl font-display font-bold mb-4">{t.startHere.tutor.title}</h2>
            <p className="text-blue-100 mb-6">{t.startHere.tutor.desc}</p>
            
            <div className="bg-white p-2 rounded-xl flex shadow-lg">
              <input 
                type="text"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder={t.startHere.tutor.placeholder}
                className="flex-1 px-4 text-gray-900 outline-none rounded-l-lg placeholder-gray-400"
                onKeyDown={(e) => e.key === 'Enter' && handleAskAI()}
              />
              <Button onClick={handleAskAI} disabled={loading} className="whitespace-nowrap bg-brand-gold text-brand-text hover:bg-yellow-400 border-none shadow-none">
                {loading ? t.startHere.tutor.thinking : t.startHere.tutor.btn}
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-h-[200px] flex flex-col justify-center">
            {explanation ? (
              <div className="animate-fade-in">
                <h4 className="font-bold text-brand-gold mb-2 text-lg">{t.startHere.tutor.resultTitle}</h4>
                <p className="text-lg leading-relaxed">{explanation}</p>
              </div>
            ) : (
              <div className="text-center text-blue-200 opacity-70">
                <HelpCircle size={48} className="mx-auto mb-2" />
                <p>{t.startHere.tutor.emptyState}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Beginner Checklist */}
      <div className="mt-20 max-w-3xl mx-auto">
         <h2 className="text-2xl font-bold mb-8 text-center text-brand-text">{t.startHere.checklist.title}</h2>
         <div className="space-y-4">
           {t.startHere.checklist.items.map((item, i) => (
             <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
               <div className="w-8 h-8 rounded-full bg-brand-sky text-brand-blue flex items-center justify-center flex-shrink-0 font-bold">
                 {i + 1}
               </div>
               <span className="font-medium text-brand-body">{item}</span>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
};

export default StartHere;
