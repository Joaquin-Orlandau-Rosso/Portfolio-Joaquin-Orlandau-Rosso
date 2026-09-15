import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ParticlesBackground from './components/ParticlesBackground/ParticlesBackground';

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'es');

  useEffect(() => {
    const finishLoading = () => setLoading(false);
    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
    }
    const fallback = setTimeout(finishLoading, 1200);

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    return () => {
      window.removeEventListener('load', finishLoading);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <ParticlesBackground />
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        language={language}
        toggleLanguage={toggleLanguage}
      />
      <Hero language={language} />
      <About language={language} />
      <Skills language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <ScrollToTop />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
    </div>
  );
}

export default App;
