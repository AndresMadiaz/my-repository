
export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
export type Category = 'Work' | 'Daily Life' | 'Creative';
export type Language = 'en' | 'es';

export interface Template {
  id: string;
  title: string;
  description: string;
  difficulty: string; // localized string
  category: string; // localized string
  tool: string;
  prompt: string;
  steps: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  initials: string;
}

// New Course Types
export type BlockType = 'text' | 'h2' | 'h3' | 'list' | 'callout' | 'highlight' | 'code' | 'example' | 'action';

export interface CourseBlock {
  type: BlockType;
  content: string | string[]; // string for text, string[] for lists or code lines if needed
  meta?: string; // code language or extra title
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  blocks: CourseBlock[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  readTime: string;
  level: string;
  coverColor: string;
  blocks: CourseBlock[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  learningPoints: string[];
  stats: {
    lessons: string;
    time: string;
    level: string;
  };
  ctaStart: string;
  lessons: CourseLesson[];
}

export interface Ebook {
  id: string;
  title: string;
  description: string;
  readTime: string;
  level: string;
  coverColor: string;
}
