
import React from 'react';
import { ArrowRight, Clock, BarChart, BookOpen, PlayCircle, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Basics: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { course } = t.basics;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
       <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">{t.basics.pageTitle}</h1>
        <p className="text-gray-600 text-lg">
          {t.basics.pageDesc}
        </p>
      </div>

      {/* Featured Course Section */}
      {course && (
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px bg-gray-200 flex-1"></div>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.basics.courseLabel}</span>
            <div className="h-px bg-gray-200 flex-1"></div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden flex flex-col md:flex-row group hover:border-brand-blue transition-colors">
            <div className="bg-brand-blue p-10 md:w-1/3 flex flex-col justify-center text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-16 -mb-16"></div>
               <div className="relative z-10">
                 <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                   <BookOpen size={14} /> Course
                 </div>
                 <h2 className="text-3xl font-display font-bold mb-4">{course.title}</h2>
                 <p className="text-blue-100 mb-8">{course.subtitle}</p>
                 <div className="flex flex-wrap gap-4 text-sm font-medium">
                    <span className="flex items-center gap-1 bg-blue-800/50 px-3 py-1.5 rounded-lg"><Clock size={16}/> {course.stats.time}</span>
                    <span className="flex items-center gap-1 bg-blue-800/50 px-3 py-1.5 rounded-lg"><BarChart size={16}/> {course.stats.level}</span>
                 </div>
               </div>
            </div>
            
            <div className="p-10 md:w-2/3 flex flex-col">
               <h3 className="font-bold text-lg text-gray-900 mb-4">{t.course.overview.whatYouLearn}</h3>
               <div className="grid sm:grid-cols-2 gap-4 mb-8">
                 {course.learningPoints.map((point, i) => (
                   <div key={i} className="flex items-start gap-3">
                     <CheckCircle2 size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                     <span className="text-gray-600 text-sm">{point}</span>
                   </div>
                 ))}
               </div>
               
               <div className="mt-auto flex items-center justify-between">
                 <div className="text-sm text-gray-500">
                    <span className="font-bold text-brand-text">{course.stats.lessons}</span> included
                 </div>
                 <Button onClick={() => navigate(`/basics/course/${course.id}`)} variant="primary" className="shadow-lg shadow-blue-200">
                    {course.ctaStart} <ArrowRight size={18} className="ml-2" />
                 </Button>
               </div>
            </div>
          </div>
        </div>
      )}

      {/* Quick Lessons Grid */}
      <div className="flex items-center gap-2 mb-8">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t.basics.lessonsLabel}</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {t.basics.items.map((lesson) => (
          <div key={lesson.id} className="group flex flex-col h-full bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg hover:border-brand-sky transition-all duration-300">
            {/* Simple colored header */}
            <div className={`h-32 ${lesson.coverColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute top-6 left-6 text-white">
                    <BookOpen size={32} className="opacity-80" />
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col p-8">
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-4">
                 <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><Clock size={14}/> {lesson.readTime}</span>
                 <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded"><BarChart size={14}/> {lesson.level}</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-text mb-3 leading-tight">{lesson.title}</h3>
              <p className="text-brand-body text-base mb-8 flex-1 leading-relaxed">{lesson.description}</p>
              <Button 
                onClick={() => navigate(`/basics/${lesson.id}`)}
                variant="outline" 
                fullWidth 
                className="group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue transition-colors justify-between"
              >
                 {t.basics.btn} <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basics;
