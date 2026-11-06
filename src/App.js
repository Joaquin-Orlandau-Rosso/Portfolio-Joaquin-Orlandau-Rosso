import React, { useEffect, useLayoutEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { content } from './content';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import Work from './components/Work/Work';
import More from './components/More/More';
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

const THEME_COLOR = { light: '#FAF7F1', dark: '#14110D' };

// El <head> ya puso la clase `dark` antes del primer pintado; acá se lee con el mismo criterio.
const initialTheme = () => {
  const saved = storage.get('theme');
  if (saved === 'dark' || saved === 'light') return saved === 'dark';
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
};

// Idioma: ?lang= en la URL; si no, lo que eligió antes; si no, el del navegador
// (español si el navegador está en español y, para cualquier otro idioma, inglés).
const initialLanguage = () => {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'es' || fromUrl === 'en') return fromUrl;
  const saved = storage.get('lang');
  if (saved === 'es' || saved === 'en') return saved;
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en';
};

function App() {
  const [darkMode, setDarkMode] = useState(initialTheme);
  const [language, setLanguage] = useState(initialLanguage);
  const t = content[language];

  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', darkMode ? THEME_COLOR.dark : THEME_COLOR.light);
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.htmlTitle;
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.htmlDescription);
  }, [language, t.htmlTitle, t.htmlDescription]);

  const toggleDarkMode = () => {
    const next = !darkMode;
    storage.set('theme', next ? 'dark' : 'light');
    const aplicar = () => flushSync(() => setDarkMode(next));
    const sinMovimiento = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    // Fundido de toda la página donde el navegador lo soporta; si no, cambia de una.
    if (document.startViewTransition && !sinMovimiento) document.startViewTransition(aplicar);
    else aplicar();
  };

  const toggleLanguage = () => {
    const next = language === 'es' ? 'en' : 'es';
    storage.set('lang', next);
    // Si vino con ?lang= en la URL, se saca: desde acá manda lo que eligió.
    const url = new URL(window.location.href);
    if (url.searchParams.has('lang')) {
      url.searchParams.delete('lang');
      window.history.replaceState(null, '', url);
    }
    setLanguage(next);
  };

  return (
    <>
      <a href="#contenido" className="skip-link">
        {t.skip}
      </a>
      <Navbar t={t} darkMode={darkMode} toggleDarkMode={toggleDarkMode} toggleLanguage={toggleLanguage} />
      <main id="contenido">
        <Hero t={t} />
        <Clients t={t} />
        <Work t={t} />
        <More t={t} />
        <Experience t={t} />
        <About t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}

export default App;
