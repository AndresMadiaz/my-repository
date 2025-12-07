
import React, { useState } from 'react';
import { useNavigate, useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Copy, ChevronRight, Home, Zap, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { CourseBlock } from '../types';

const CourseLesson: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  
  const course = t.basics.course;
  
  if (!course || course.id !== courseId) {
    return <Navigate to="/basics" replace />;
  }

  const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
  const lesson = course.lessons[lessonIndex];

  if (!lesson) {
     return <Navigate to={`/basics/course/${courseId}`} replace />;
  }

  const isLastLesson = lessonIndex === course.lessons.length - 1;
  const prevLessonId = lessonIndex > 0 ? course.lessons[lessonIndex - 1].id : null;
  const nextLessonId = !isLastLesson ? course.lessons[lessonIndex + 1].id : null;

  const [copiedBlock, setCopiedBlock] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedBlock(index);
    setTimeout(() => setCopiedBlock(null), 2000);
  };

  const renderBlock = (block: CourseBlock, index: number) => {
     switch(block.type) {
        case 'h2':
           return <h2 key={index} className="text-2xl font-display font-bold text-brand-text mt-10 mb-4">{block.content}</h2>;
        case 'h3':
           return <h3 key={index} className="text-xl font-bold text-brand-text mt-8 mb-3">{block.content}</h3>;
        case 'text':
           return <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6 whitespace-pre-line">{block.content}</p>;
        case 'list':
           return (
             <ul key={index} className="space-y-3 mb-8">
               {(block.content as string[]).map((item, i) => (
                 <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0"></span>
                    <span>{item}</span>
                 </li>
               ))}
             </ul>
           );
        case 'callout':
           return (
             <div key={index} className="bg-brand-sky border border-blue-200 rounded-xl p-6 mb-8 flex items-start gap-4">
                <div className="bg-white text-brand-blue p-2 rounded-lg shadow-sm">
                   <Zap size={20} />
                </div>
                <div className="text-brand-blue font-medium text-lg leading-relaxed">
                   {block.content}
                </div>
             </div>
           );
        case 'highlight':
           return (
             <div key={index} className="bg-yellow-50 border-l-4 border-brand-gold p-6 mb-8 italic text-gray-800 text-lg">
                {block.content}
             </div>
           );
        case 'code':
           return (
             <div key={index} className="bg-gray-900 rounded-xl overflow-hidden mb-8 shadow-md">
                <div className="bg-gray-800 px-4 py-2 flex justify-between items-center">
                   <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">AI Prompt</span>
                   <button 
                     onClick={() => handleCopy(block.content as string, index)}
                     className="text-xs flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                   >
                     {copiedBlock === index ? <Check size={14} className="text-green-400"/> : <Copy size={14}/>}
                     {copiedBlock === index ? t.course.lesson.copied : t.course.lesson.copy}
                   </button>
                </div>
                <div className="p-6 overflow-x-auto">
                   <pre className="text-blue-200 font-mono text-sm whitespace-pre-wrap">{block.content}</pre>
                </div>
             </div>
           );
        case 'example':
           return (
             <div key={index} className="border border-gray-200 rounded-xl p-6 mb-8 bg-gray-50/50">
                <span className="inline-block bg-white border border-gray-200 px-2 py-0.5 rounded text-xs font-bold text-gray-500 uppercase tracking-wide mb-3">Example</span>
                <p className="text-gray-700 italic">{block.content}</p>
             </div>
           );
        case 'action':
           return (
             <div key={index} className="bg-brand-blue text-white rounded-xl p-8 mb-8 shadow-lg shadow-blue-200">
                <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                   <CheckCircle2 size={24} className="text-brand-gold"/> {t.course.lesson.yourTurn}
                </h4>
                <p className="text-blue-100 text-lg">{block.content}</p>
             </div>
           );
        default:
           return null;
     }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Nav / Breadcrumbs */}
      <div className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
           <div className="flex items-center text-sm text-gray-500 overflow-hidden whitespace-nowrap">
              <Link to="/" className="hover:text-brand-blue flex items-center"><Home size={14}/></Link>
              <ChevronRight size={14} className="mx-2 flex-shrink-0"/>
              <Link to="/basics" className="hover:text-brand-blue hidden sm:inline">{t.course.lesson.breadcrumbBasics}</Link>
              <ChevronRight size={14} className="mx-2 flex-shrink-0 hidden sm:inline"/>
              <Link to={`/basics/course/${courseId}`} className="hover:text-brand-blue font-medium truncate max-w-[100px] sm:max-w-[200px]">{course.title}</Link>
              <ChevronRight size={14} className="mx-2 flex-shrink-0"/>
              <span className="text-gray-900 font-semibold">Lesson {lessonIndex + 1}</span>
           </div>
           
           <div className="hidden sm:block text-xs font-bold bg-brand-sky text-brand-blue px-2 py-1 rounded">
              {lesson.duration}
           </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
        <div className="mb-8">
           <span className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-2 block">Lesson {lessonIndex + 1} of {course.lessons.length}</span>
           <h1 className="text-3xl md:text-4xl font-display font-bold text-brand-text leading-tight">{lesson.title}</h1>
        </div>

        <div className="mb-16">
           {lesson.blocks.map((block, i) => renderBlock(block, i))}
        </div>

        {/* Bottom Nav */}
        <div className="border-t border-gray-100 pt-8 flex justify-between items-center">
           {prevLessonId ? (
             <Button 
               variant="ghost" 
               onClick={() => navigate(`/basics/course/${courseId}/lesson/${prevLessonId}`)}
               className="pl-0 hover:bg-transparent hover:text-brand-blue"
             >
               <ArrowLeft size={18} className="mr-2"/> {t.course.lesson.prev}
             </Button>
           ) : (
             <div></div>
           )}

           {nextLessonId ? (
             <Button 
               variant="primary" 
               onClick={() => navigate(`/basics/course/${courseId}/lesson/${nextLessonId}`)}
             >
               {t.course.lesson.next} <ArrowRight size={18} className="ml-2"/>
             </Button>
           ) : (
             <Button 
               variant="accent" 
               onClick={() => navigate(`/basics/course/${courseId}/completed`)}
             >
               {t.course.lesson.complete} <CheckCircle2 size={18} className="ml-2"/>
             </Button>
           )}
        </div>
      </div>
    </div>
  );
};

export default CourseLesson;
