
import React from 'react';
import { CheckCircle2, Zap, BookOpen, Shield, Mail, Briefcase, GraduationCap, Store, Laptop2, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    { icon: BookOpen, ...t.home.valueProp.cards[0] },
    { icon: Zap, ...t.home.valueProp.cards[1] },
    { icon: CheckCircle2, ...t.home.valueProp.cards[2] },
    { icon: Shield, ...t.home.valueProp.cards[3] },
  ];

  const personas = [
    { icon: Briefcase, ...t.home.personas.cards[0] },
    { icon: Store, ...t.home.personas.cards[1] },
    { icon: Laptop2, ...t.home.personas.cards[2] },
    { icon: GraduationCap, ...t.home.personas.cards[3] },
  ];

  const previewTemplates = t.templates.items.slice(0, 2);
  const previewLesson = t.basics.items.slice(0, 1);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-bg text-brand-text pt-20 pb-24 px-4 sm:px-6">
        {/* Abstract Blobs */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-sky rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky border border-blue-200 text-sm font-medium text-brand-blue">
              <span className="flex h-2 w-2 rounded-full bg-brand-blue"></span>
              {t.home.badge}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-brand-text">
              {t.home.heroTitle} <br/>
              <span className="text-brand-blue">{t.home.heroTitleHighlight}</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-body max-w-lg leading-relaxed">
              {t.home.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link to="/start">
                <Button size="lg" variant="accent" className="w-full sm:w-auto">
                  {t.home.ctaPrimary}
                </Button>
              </Link>
              <Link to="/templates">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-brand-sky border-brand-blue text-brand-blue">
                  {t.home.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Visual - Dashboard Mockup */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue to-brand-sky opacity-10 blur-2xl transform rotate-3 scale-95 rounded-3xl"></div>
            <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{t.home.dashboard.title}</div>
              </div>
              
              <div className="space-y-4">
                {t.home.dashboard.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-brand-bg rounded-xl hover:bg-brand-sky transition-colors cursor-default border border-gray-100 group">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${i === 0 ? 'bg-blue-100 text-brand-blue' : i === 1 ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'}`}>
                        <Zap size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-brand-text">{item.title}</div>
                        <div className="text-xs text-gray-500">Auto-generated</div>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="text-xs font-medium bg-white px-2 py-1 rounded-md border border-gray-200 text-gray-600">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-sm">
                   <span className="text-gray-500">{t.home.dashboard.timeSaved}</span>
                   <span className="font-bold text-brand-blue">{t.home.dashboard.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Prop Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-display font-bold mb-4 text-brand-text">{t.home.valueProp.title}</h2>
          <p className="text-brand-body max-w-2xl mx-auto">{t.home.valueProp.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-sky text-brand-blue rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-text">{feature.title}</h3>
              <p className="text-brand-body text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stepper / Journey */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
             <h2 className="text-3xl font-display font-bold text-brand-text">{t.home.stepper.title}</h2>
          </div>
          <div className="relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0"></div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
               {t.home.stepper.steps.map((item, i) => (
                 <div key={i} className="flex flex-col items-center text-center bg-white p-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold mb-4 ring-4 ring-white shadow-sm">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-lg mb-1 text-brand-text">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.text}</p>
                 </div>
               ))}
             </div>
          </div>
          <div className="text-center mt-12">
            <Link to="/start">
               <Button variant="accent">{t.home.stepper.btn}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 bg-brand-bg">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-display font-bold mb-2 text-brand-text">{t.home.resources.title}</h2>
            <p className="text-brand-body">{t.home.resources.subtitle}</p>
          </div>
          <Link to="/templates" className="text-brand-blue font-medium hover:underline hidden sm:block">{t.home.resources.viewAll} &rarr;</Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {/* Mix of templates and lessons */}
           {previewTemplates.map((item) => (
             <div key={item.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-brand-blue transition-colors shadow-sm">
               <div className="h-2 bg-brand-blue"></div>
               <div className="p-6">
                 <div className="flex justify-between items-start mb-4">
                   <span className="bg-brand-sky text-brand-blue text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{t.home.resources.labels.template}</span>
                   <span className="text-xs text-gray-400">{item.difficulty}</span>
                 </div>
                 <h3 className="text-xl font-bold mb-2 text-brand-text group-hover:text-brand-blue transition-colors">{item.title}</h3>
                 <p className="text-brand-body text-sm mb-6 line-clamp-2">{item.description}</p>
                 <Link to="/templates">
                   <Button variant="outline" size="sm" fullWidth>{t.home.resources.viewTemplate}</Button>
                 </Link>
               </div>
             </div>
           ))}
           {previewLesson.map((item) => (
             <div key={item.id} className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-brand-gold transition-colors shadow-sm">
                <div className={`h-2 ${item.coverColor}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-yellow-50 text-yellow-600 text-xs font-bold px-2 py-1 rounded uppercase tracking-wide">{t.home.resources.labels.lesson}</span>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-brand-text group-hover:text-brand-blue transition-colors">{item.title}</h3>
                  <p className="text-brand-body text-sm mb-6 line-clamp-2">{item.description}</p>
                  <Button 
                    onClick={() => navigate(`/basics/${item.id}`)}
                    variant="ghost" 
                    size="sm" 
                    fullWidth 
                    className="bg-gray-50 hover:bg-gray-100 text-gray-900"
                  >
                    {t.home.resources.readLesson} <ArrowRight size={16} className="ml-2" />
                  </Button>
                </div>
             </div>
           ))}
        </div>
        <div className="mt-8 text-center sm:hidden">
           <Link to="/templates" className="text-brand-blue font-medium hover:underline">{t.home.resources.viewAll} &rarr;</Link>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-bold mb-4 text-brand-text">{t.home.personas.title}</h2>
            <p className="text-brand-body max-w-2xl mx-auto">{t.home.personas.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personas.map((persona, i) => (
              <div key={i} className="bg-brand-bg p-8 rounded-2xl border border-gray-100 hover:border-brand-sky hover:bg-brand-sky/20 transition-all text-center group">
                <div className="w-14 h-14 bg-white text-brand-blue rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  <persona.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-3 text-brand-text">{persona.title}</h3>
                <p className="text-brand-body text-sm leading-relaxed">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 max-w-xl mx-auto px-4 text-center">
         <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100">
            <div className="w-14 h-14 bg-brand-sky text-brand-blue mx-auto rounded-full flex items-center justify-center mb-6">
              <Mail size={28} />
            </div>
            <h2 className="text-2xl font-display font-bold mb-2 text-brand-text">{t.home.newsletter.title}</h2>
            <p className="text-brand-body mb-6">{t.home.newsletter.text}</p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder={t.home.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none bg-gray-50"
              />
              <Button type="button" onClick={(e) => e.preventDefault()}>{t.home.newsletter.btn}</Button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default Home;
