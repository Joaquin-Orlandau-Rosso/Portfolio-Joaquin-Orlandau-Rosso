import React from 'react';
import { links } from '../../content';
import './Hero.scss';

const Hero = ({ t }) => {
  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="hero-eyebrow">{t.hero.eyebrow}</p>
            <h1 className="display hero-title">{t.hero.title}</h1>
            <p className="hero-lead">{t.hero.lead}</p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">
                {t.hero.cta}
              </a>
              <a href={links.cv} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                {t.hero.cv}
              </a>
            </div>
          </div>

          <div className="hero-figure">
            <div className="hero-photo">
              <img src="/imgs/joaquin.jpg" alt={t.hero.photoAlt} width="702" height="702" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
