
import React from 'react';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, PlayCircle, Clock, BarChart, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

const CourseOverview: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { courseId } = useParams<{ courseId: string }>();
  
  // In a real app we would find by ID, but we only have one course in data for now
  const course = t.basics.course;

  if (!course || course.id !== courseId) {
     return <Navigate to="/basics" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-bg animate-fade-in">
      {/* Header */}
      <div className="bg-brand-blue text-white pt-12 pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
             onClick={() => navigate('/basics')}
             className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-8 text-sm font-medium"
          >
             <ArrowLeft size={16} className="mr-2" /> {t.course.completion.back}
          </button>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">{course.title}</h1>
          <p className="text-xl text-blue-100 max-w-2xl leading-relaxed mb-8">{course.subtitle}</p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 bg-blue-800/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-400/30">
               <Clock size={18} className="text-brand-gold"/> 
               <span className="font-medium">{course.stats.time}</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-800/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-blue-400/30">
               <BarChart size={18} className="text-brand-gold"/> 
               <span className="font-medium">{course.stats.level}</span>
            </div>
          </div>

          <Button 
            onClick={() => navigate(`/basics/course/${course.id}/lesson/1`)}
            size="lg" 
            variant="accent" 
            className="shadow-xl shadow-blue-900/20"
          >
             {course.ctaStart}
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-16 relative z-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
           <h3 className="font-bold text-lg text-brand-text mb-6">{t.course.overview.whatYouLearn}</h3>
           <div className="grid md:grid-cols-2 gap-4">
             {course.learningPoints.map((point, i) => (
               <div key={i} className="flex items-start gap-3">
                 <div className="mt-1 bg-green-100 text-green-600 rounded-full p-0.5">
                   <CheckCircle2 size={16} />
                 </div>
                 <span className="text-gray-700">{point}</span>
               </div>
             ))}
           </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
             <h3 className="font-bold text-gray-900">{t.course.overview.syllabus}</h3>
          </div>
          <div className="divide-y divide-gray-100">
             {course.lessons.map((lesson, index) => (
               <div key={lesson.id} className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors group cursor-pointer" onClick={() => navigate(`/basics/course/${course.id}/lesson/${lesson.id}`)}>
                  <div className="w-10 h-10 rounded-full bg-brand-sky text-brand-blue flex items-center justify-center font-bold text-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                     {index + 1}
                  </div>
                  <div className="flex-1">
                     <h4 className="font-bold text-brand-text mb-1 group-hover:text-brand-blue transition-colors">{lesson.title}</h4>
                     <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{lesson.duration}</p>
                  </div>
                  <div className="text-gray-300">
                     <PlayCircle size={24} className="group-hover:text-brand-blue transition-colors" />
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
