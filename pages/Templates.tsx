import React, { useState } from 'react';
import { Copy, Check, Filter } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Templates: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Map categories to current language
  // We check against the localized category string from the data items
  const filters = [
    t.templates.filters.all,
    t.templates.filters.work,
    t.templates.filters.life,
    t.templates.filters.creative
  ];

  const filteredTemplates = activeFilter === t.templates.filters.all
    ? t.templates.items 
    : t.templates.items.filter(item => item.category === activeFilter);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      <div className="mb-12">
        <h1 className="text-3xl font-display font-bold text-brand-text mb-4">{t.templates.pageTitle}</h1>
        <p className="text-brand-body max-w-2xl">
          {t.templates.pageDesc}
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-10 pb-4 border-b border-gray-200">
        <span className="flex items-center text-gray-500 mr-2 text-sm font-medium"><Filter size={16} className="mr-1"/> {t.templates.filters.label}</span>
        {filters.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === cat 
                ? 'bg-brand-blue text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {filteredTemplates.map((template) => (
          <div key={template.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:border-brand-sky transition-colors">
            <div className="p-6 border-b border-gray-50 flex-1">
              <div className="flex justify-between items-start mb-4">
                <div className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide ${
                  template.category === t.templates.filters.work ? 'bg-blue-50 text-blue-600' : 
                  template.category === t.templates.filters.life ? 'bg-green-50 text-green-600' : 'bg-purple-50 text-purple-600'
                }`}>
                  {template.category}
                </div>
                <div className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
                  {template.difficulty}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-brand-text mb-2">{template.title}</h3>
              <p className="text-brand-body text-sm mb-4">{template.description}</p>
              
              <div className="bg-brand-bg p-4 rounded-xl border border-gray-100 relative group">
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button 
                     onClick={() => handleCopy(template.prompt, template.id)}
                     className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 text-gray-500 hover:text-brand-blue"
                     title={t.templates.card.copy}
                   >
                     {copiedId === template.id ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                   </button>
                </div>
                <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">{t.templates.card.promptLabel}</div>
                <p className="text-sm font-mono text-gray-700 whitespace-pre-wrap">{template.prompt}</p>
              </div>
            </div>

            <div className="bg-gray-50/50 p-6">
              <h4 className="text-sm font-bold text-brand-text mb-3">{t.templates.card.howTo}</h4>
              <ol className="space-y-2">
                {template.steps.map((step, idx) => (
                  <li key={idx} className="text-sm text-gray-600 flex gap-2">
                    <span className="font-bold text-brand-blue">{idx + 1}.</span> {step}
                  </li>
                ))}
              </ol>
              <div className="mt-6">
                <Button 
                  fullWidth 
                  onClick={() => handleCopy(template.prompt, template.id)}
                  variant={copiedId === template.id ? 'secondary' : 'primary'}
                >
                  {copiedId === template.id ? t.templates.card.copied : t.templates.card.copy}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
