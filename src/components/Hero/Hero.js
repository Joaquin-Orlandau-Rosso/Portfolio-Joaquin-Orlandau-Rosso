import React, { useEffect, useRef, useState } from 'react';
import { PiArrowDownBold, PiDownloadSimpleBold, PiGithubLogo, PiLinkedinLogo } from 'react-icons/pi';
import { links } from '../../content';
import { capas } from '../../lib/capas';
import './Hero.scss';

// El título entra palabra por palabra: cada una sube desde atrás de una máscara.
const Palabras = ({ texto }) =>
  texto.split(' ').map((palabra, i) => (
    // El orden de las palabras no cambia: el índice alcanza como key.
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={i}>
      {i > 0 && ' '}
      <span className="palabra">
        <span style={{ '--i': i }}>{palabra}</span>
      </span>
    </React.Fragment>
  ));

// Captura de un trabajo dentro de un marco de navegador chico. Es decorativa (va dentro de un
// bloque aria-hidden y fuera del orden de tabulación), pero con el mouse lleva a su sección.
const Marco = ({ src, url, href }) => (
  <a className="marco" href={href} tabIndex={-1}>
    <span className="marco-barra">
      <i />
      <i />
      <i />
      <span>{url}</span>
    </span>
    <img src={src} alt="" width="640" height="400" decoding="async" />
  </a>
);

const Hero = ({ t }) => {
  const ref = useRef(null);
  const [listo, setListo] = useState(false);

  // Primero se pinta el estado inicial (oculto) y recién después pasa a visible: así corre la transición.
  useEffect(() => {
    let segundo = 0;
    const primero = requestAnimationFrame(() => {
      segundo = requestAnimationFrame(() => setListo(true));
    });
    // Con la pestaña en segundo plano requestAnimationFrame no corre: que el contenido aparezca igual.
    const respaldo = setTimeout(() => setListo(true), 700);
    return () => {
      cancelAnimationFrame(primero);
      cancelAnimationFrame(segundo);
      clearTimeout(respaldo);
    };
  }, []);

  // La foto y las capturas se corren apenas con el mouse y con el scroll.
  useEffect(() => capas(ref.current), []);

  return (
    <section
      id="top"
      ref={ref}
      className="hero"
      data-listo={listo ? '' : undefined}
      data-mouse="36"
      data-scroll="0.35"
    >
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-status entra" style={{ '--orden': 0 }}>
            <span className="hero-dot" aria-hidden="true" />
            <span>{t.hero.status}</span>
            <span className="hero-sep" aria-hidden="true">
              ·
            </span>
            <span>{t.hero.place}</span>
          </p>

          <h1 className="hero-title">
            <Palabras texto={t.hero.title} />
          </h1>

          <p className="hero-tagline entra" style={{ '--orden': 3 }}>
            {t.hero.tagline}
          </p>
          <p className="hero-lead entra" style={{ '--orden': 4 }}>
            {t.hero.lead}
          </p>

          <div className="hero-actions entra" style={{ '--orden': 5 }}>
            <a href="#proyectos" className="btn btn-primary">
              {t.hero.cta}
              <PiArrowDownBold aria-hidden="true" />
            </a>
            <a href={links.cv} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              {t.hero.cv}
              <PiDownloadSimpleBold aria-hidden="true" />
            </a>
            <span className="hero-social">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <PiGithubLogo aria-hidden="true" />
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <PiLinkedinLogo aria-hidden="true" />
              </a>
            </span>
          </div>
        </div>

        <div className="hero-stage">
          <div className="capa capa-foto" data-profundidad="0.06">
            <div className="entra" style={{ '--orden': 2 }}>
              <img className="hero-photo" src="/imgs/joaquin.jpg" alt={t.hero.photoAlt} width="702" height="702" />
            </div>
          </div>
          <div className="capa capa-a" data-profundidad="-0.2" aria-hidden="true">
            <div className="entra" style={{ '--orden': 5 }}>
              <Marco src="/imgs/hero-elodiff.webp" url="elodiff.app" href="#proyectos" />
            </div>
          </div>
          <div className="capa capa-b" data-profundidad="0.28" aria-hidden="true">
            <div className="entra" style={{ '--orden': 7 }}>
              <Marco src="/imgs/hero-novagraf.webp" url="novagraf.com.ar" href="#clientes" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
