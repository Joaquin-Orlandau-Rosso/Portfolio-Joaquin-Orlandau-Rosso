import React from 'react';
import { links } from '../../content';
import './Hero.scss';

const Hero = ({ t }) => {
  const [before, word, after] = t.hero.title;

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="eyebrow accent">{t.hero.eyebrow}</p>
            <h1 className="display hero-title">
              {before}
              <span className="highlight">{word}</span>
              {after}
            </h1>
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

          <figure className="hero-figure">
            <div className="hero-photo">
              <img src="/imgs/joaquin.jpg" alt={t.hero.photoAlt} width="702" height="702" />
            </div>
            <figcaption>
              <span className="eyebrow petrol">{t.hero.fig}</span>
              <span className="eyebrow">{t.hero.caption}</span>
            </figcaption>
          </figure>
        </div>

        <div className="rule" />

        <dl className="facts">
          {t.facts.map((fact) => (
            <div key={fact.label} className="fact">
              <dt className="eyebrow accent">{fact.label}</dt>
              <dd>
                <span className="display fact-value">{fact.value}</span>
                <span className="fact-detail">{fact.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
