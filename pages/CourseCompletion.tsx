import React from 'react';
import { useNavigate, useParams, Link, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Share2, Sparkles } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const CourseCompletion: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  const course = t.basics.course;
  
  if (!course || course.id !== courseId) {
     return <Navigate to="/basics" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4">
      
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center animate-scale-in border border-gray-100 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-sky to-brand-gold"></div>
        
        <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-in relative">
           <CheckCircle2 size={48} />
        </div>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-text mb-4">
          {t.course.completion.title}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-lg mx-auto">
          {t.course.completion.subtitle}
        </p>

        <div className="bg-brand-bg rounded-xl p-6 mb-10 text-left">
           <h3 className="font-bold text-brand-text mb-4 flex items-center gap-2">
             <Sparkles size={18} className="text-brand-gold" /> {t.course.completion.learned}
           </h3>
           <div className="grid sm:grid-cols-2 gap-3">
             {course.learningPoints.map((point, i) => (
               <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                 <CheckCircle2 size={14} className="text-green-500" />
                 {point}
               </div>
             ))}
           </div>
        </div>

        <div className="space-y-4">
           <p className="font-bold text-gray-400 text-sm uppercase tracking-wide">{t.course.completion.whatsNext}</p>
           <div className="grid sm:grid-cols-2 gap-4">
             {t.course.completion.nextSteps.map((step, i) => (
               <Link key={i} to={step.link}>
                 <div className="bg-white border border-gray-200 hover:border-brand-blue hover:bg-blue-50 transition-all p-4 rounded-xl flex items-center justify-between group h-full">
                    <span className="font-medium text-brand-text text-sm text-left">{step.text}</span>
                    <ArrowRight size={16} className="text-gray-400 group-hover:text-brand-blue" />
                 </div>
               </Link>
             ))}
           </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
           <Button variant="outline" onClick={() => navigate('/basics')}>
             {t.course.completion.back}
           </Button>
           <Button variant="primary" onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: course.title,
                  text: 'I just completed the AI Automation Playbook on AutoLearn!',
                  url: window.location.href
                }).catch(console.error);
              } else {
                alert('URL Copied to clipboard!');
              }
           }}>
             <Share2 size={18} className="mr-2" /> {t.course.completion.share}
           </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCompletion;