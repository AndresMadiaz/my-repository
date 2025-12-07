
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import StartHere from './pages/StartHere';
import Templates from './pages/Templates';
import Basics from './pages/Basics';
import LessonDetail from './pages/LessonDetail';
import About from './pages/About';
import CourseOverview from './pages/CourseOverview';
import CourseLesson from './pages/CourseLesson';
import CourseCompletion from './pages/CourseCompletion';
import Ebooks from './pages/Ebooks';
import { LanguageProvider } from './context/LanguageContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col font-sans text-brand-body bg-brand-bg selection:bg-brand-gold selection:text-brand-text">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/start" element={<StartHere />} />
              <Route path="/templates" element={<Templates />} />
              
              {/* Basics & Course Routes */}
              <Route path="/basics" element={<Basics />} />
              <Route path="/basics/:id" element={<LessonDetail />} />
              <Route path="/basics/course/:courseId" element={<CourseOverview />} />
              <Route path="/basics/course/:courseId/lesson/:lessonId" element={<CourseLesson />} />
              <Route path="/basics/course/:courseId/completed" element={<CourseCompletion />} />
              
              <Route path="/ebooks" element={<Ebooks />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
