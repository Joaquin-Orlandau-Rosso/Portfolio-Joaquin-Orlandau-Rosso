import React, { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import './Navbar.scss';

const Navbar = ({ t, darkMode, toggleDarkMode, toggleLanguage }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú móvil con Escape
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const items = [
    { label: t.nav.work, href: '#trabajo' },
    { label: t.nav.experience, href: '#experiencia' },
    { label: t.nav.about, href: '#sobre-mi' },
    { label: t.nav.contact, href: '#contacto' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-name">
          Joaquín Orlandau Rosso
        </a>

        <nav className="navbar-links" aria-label="Principal">
          {items.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <span className="navbar-available">
            <span className="dot" aria-hidden="true" />
            {t.nav.available}
          </span>
        </nav>

        <div className="navbar-actions">
          <button type="button" className="navbar-lang" onClick={toggleLanguage} aria-label={t.nav.toggleLang}>
            {t.lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button
            type="button"
            className="navbar-theme"
            onClick={toggleDarkMode}
            aria-label={darkMode ? t.nav.toggleTheme.toLight : t.nav.toggleTheme.toDark}
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="navbar-menu"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? t.nav.close : t.nav.menu}
          </button>
        </div>
      </div>

      <nav id="mobile-nav" className="navbar-mobile" aria-label="Principal (móvil)" hidden={!open}>
        {items.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
