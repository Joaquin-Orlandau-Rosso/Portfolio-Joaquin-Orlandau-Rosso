import React, { useEffect, useRef, useState } from 'react';
import { PiMoon, PiSun } from 'react-icons/pi';
import useActiveSection from '../../hooks/useActiveSection';
import './Navbar.scss';

// Secciones de la página, en orden. `nav` es el enlace del menú que se marca al pasar por ahí
// (la lista de demos cuenta como parte de Proyectos).
const SECCIONES = [
  { id: 'clientes', nav: 'clientes' },
  { id: 'proyectos', nav: 'proyectos' },
  { id: 'mas-proyectos', nav: 'proyectos' },
  { id: 'experiencia', nav: 'experiencia' },
  { id: 'sobre-mi', nav: 'sobre-mi' },
  { id: 'contacto', nav: 'contacto' },
];

const Navbar = ({ t, darkMode, toggleDarkMode, toggleLanguage }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activa = useActiveSection(SECCIONES);
  const botonMenu = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cerrar el menú móvil con Escape. Si el foco estaba adentro, vuelve al botón "Menú"
  // (si no, queda en un enlace oculto y se pierde).
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key !== 'Escape') return;
      const focoAdentro = document.getElementById('mobile-nav')?.contains(document.activeElement);
      setOpen(false);
      if (focoAdentro) botonMenu.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  // Si se baja con el menú abierto, se cierra: si no, el panel queda fijo tapando media pantalla.
  useEffect(() => {
    if (!open) return undefined;
    const desde = window.scrollY;
    const alBajar = () => Math.abs(window.scrollY - desde) > 48 && setOpen(false);
    window.addEventListener('scroll', alBajar, { passive: true });
    return () => window.removeEventListener('scroll', alBajar);
  }, [open]);

  // Si se agranda la ventana hasta escritorio con el menú abierto, se cierra.
  useEffect(() => {
    if (!open || !window.matchMedia) return undefined;
    const escritorio = window.matchMedia('(min-width: 55.01em)');
    const alCambiar = () => escritorio.matches && setOpen(false);
    alCambiar();
    escritorio.addEventListener?.('change', alCambiar);
    return () => escritorio.removeEventListener?.('change', alCambiar);
  }, [open]);

  const items = [
    { id: 'clientes', label: t.nav.clients },
    { id: 'proyectos', label: t.nav.work },
    { id: 'experiencia', label: t.nav.experience },
    { id: 'sobre-mi', label: t.nav.about },
  ];
  const actual = (id) => (activa === id ? 'true' : undefined);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container navbar-inner">
        <a href="#top" className="navbar-name" onClick={() => setOpen(false)}>
          Joaquín <span className="navbar-surname">Orlandau Rosso</span>
        </a>

        <nav className="navbar-links" aria-label={t.nav.label}>
          {items.map((item) => (
            <a key={item.id} href={`#${item.id}`} aria-current={actual(item.id)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button
            type="button"
            className="navbar-lang"
            onClick={toggleLanguage}
            // El nombre arranca con lo que se ve ("ES EN") para que el control por voz lo encuentre.
            aria-label={`ES EN, ${t.nav.toggleLang}`}
            lang={t.lang === 'es' ? 'en' : 'es'}
          >
            <span className={t.lang === 'es' ? 'is-on' : undefined}>ES</span>
            <span className="navbar-lang-sep" aria-hidden="true" />
            <span className={t.lang === 'en' ? 'is-on' : undefined}>EN</span>
          </button>
          <button
            type="button"
            className="navbar-theme"
            onClick={toggleDarkMode}
            aria-label={darkMode ? t.nav.toggleTheme.toLight : t.nav.toggleTheme.toDark}
          >
            {darkMode ? <PiSun aria-hidden="true" /> : <PiMoon aria-hidden="true" />}
          </button>
          <a href="#contacto" className="navbar-cta" aria-current={actual('contacto')}>
            {t.nav.contact}
          </a>
          <button
            ref={botonMenu}
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

      <nav id="mobile-nav" className="navbar-mobile" aria-label={t.nav.label} hidden={!open}>
        {items.map((item) => (
          <a key={item.id} href={`#${item.id}`} aria-current={actual(item.id)} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <a href="#contacto" aria-current={actual('contacto')} onClick={() => setOpen(false)}>
          {t.nav.contact}
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
