import React, { useEffect, useState } from 'react';
import { content } from './content';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import Work from './components/Work/Work';
import Minis from './components/Minis/Minis';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {
      // modo privado o almacenamiento bloqueado: se ignora
    }
  },
};

const initialTheme = () => {
  const saved = storage.get('theme');
  if (saved === 'dark' || saved === 'light') return saved === 'dark';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

const initialLanguage = () => {
  const saved = storage.get('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es';
};

function App() {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const t = content[language];

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.htmlTitle;
  }, [language, t.htmlTitle]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      storage.set('theme', prev ? 'light' : 'dark');
      return !prev;
    });
  };

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === 'es' ? 'en' : 'es';
      storage.set('lang', next);
      return next;
    });
  };

  return (
    <>
      <Navbar t={t} darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />
      <main>
        <Hero t={t} />
        <Clients t={t} />
        <Work t={t} />
        <Minis t={t} />
        <Experience t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
