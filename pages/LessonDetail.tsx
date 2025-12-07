
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, BarChart, Check, Copy, Zap, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CourseBlock } from '../types';

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();
  const [copiedBlock, setCopiedBlock] = useState<number | null>(null);

  const lesson = t.basics.items.find(item => item.id === id);

  if (!lesson) {
    return <Navigate to="/basics" replace />;
  }

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
                    {copiedBlock === index ? 'Copied' : 'Copy'}
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
               <p className="text-gray-700 italic whitespace-pre-line">{block.content}</p>
            </div>
          );
       case 'action':
          return (
            <div key={index} className="bg-brand-blue text-white rounded-xl p-8 mb-8 shadow-lg shadow-blue-200">
               <h4 className="font-bold text-xl mb-2 flex items-center gap-2">
                  <CheckCircle2 size={24} className="text-brand-gold"/> Your Turn
               </h4>
               <p className="text-blue-100 text-lg whitespace-pre-line">{block.content}</p>
            </div>
          );
       default:
          return null;
    }
 };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 animate-fade-in">
      {/* Back Button */}
      <div className="mb-8">
        <Link to="/basics" className="inline-flex items-center text-gray-500 hover:text-brand-blue font-medium transition-colors">
          <ArrowLeft size={20} className="mr-2" />
          {t.basics.backBtn}
        </Link>
      </div>

      {/* Hero Header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-6">
            <span className={`px-3 py-1 rounded-full bg-gray-100 flex items-center gap-2`}>
                <Clock size={16} /> {lesson.readTime}
            </span>
            <span className={`px-3 py-1 rounded-full bg-gray-100 flex items-center gap-2`}>
                <BarChart size={16} /> {lesson.level}
            </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-text mb-6 leading-tight">
          {lesson.title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-brand-gold pl-6">
          {lesson.description}
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg prose-blue max-w-none">
        {lesson.blocks.map((block, index) => renderBlock(block, index))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-10 border-t border-gray-200 text-center">
         <p className="text-gray-500 mb-6 italic">Done with this lesson?</p>
         <Link to="/basics" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-blue bg-blue-50 hover:bg-blue-100 transition-colors">
            {t.basics.backBtn}
         </Link>
      </div>
    </div>
  );
};

export default LessonDetail;
