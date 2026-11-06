import React from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';
import useReveal from '../../hooks/useReveal';
import './Work.scss';

const NUEVA = { target: '_blank', rel: 'noopener noreferrer' };

// Proyecto contado como caso: qué problema resuelve, qué hice y qué fue lo difícil.
const Caso = ({ item, t }) => {
  const ref = useReveal();
  const foto = (
    <img src={item.image} alt={t.work.shotAlt(item.title)} width="1200" height="800" loading="lazy" decoding="async" />
  );

  return (
    <li ref={ref} className="case reveal">
      {item.demo ? (
        // El enlace de texto de abajo lleva al mismo lugar: este queda fuera del orden de tabulación.
        <a className="case-media" href={item.demo} {...NUEVA} tabIndex={-1} aria-hidden="true">
          {foto}
        </a>
      ) : (
        <div className="case-media">{foto}</div>
      )}

      <div className="case-body">
        <p className="case-meta">
          <span>{item.platform}</span>
          {item.status && <span className="case-status">{item.status}</span>}
        </p>
        <h3 className="case-title">{item.title}</h3>
        <p className="case-summary">{item.summary}</p>

        <dl className="case-points">
          <div>
            <dt>{t.work.points.problem}</dt>
            <dd>{item.problem}</dd>
          </div>
          <div>
            <dt>{t.work.points.built}</dt>
            <dd>{item.built}</dd>
          </div>
          <div>
            <dt>{t.work.points.hard}</dt>
            <dd>{item.hard}</dd>
          </div>
        </dl>

        <ul className="tech-list">
          {item.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        {item.demo && (
          <div className="case-links">
            <a className="btn btn-secondary" href={item.demo} {...NUEVA}>
              {item.demoLabel}
              <PiArrowUpRightBold aria-hidden="true" />
            </a>
            {item.site && (
              <a className="text-link" href={item.site} {...NUEVA}>
                {item.siteLabel}
                <PiArrowUpRightBold aria-hidden="true" />
              </a>
            )}
          </div>
        )}
      </div>
    </li>
  );
};

// Proyecto más chico: captura, una frase y con qué está hecho.
const Tarjeta = ({ item, index, t }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="work-card reveal" style={{ '--d': index }}>
      <div className="work-card-media">
        <img src={item.image} alt={t.work.shotAlt(item.title)} width="1200" height="800" loading="lazy" decoding="async" />
      </div>
      <p className="work-card-meta">{item.platform}</p>
      <h3 className="work-card-title">{item.title}</h3>
      <p className="work-card-summary">{item.summary}</p>
      <ul className="tech-list">
        {item.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
};

const Work = ({ t }) => (
  <section id="proyectos" className="work section" aria-labelledby="proyectos-titulo">
    <div className="container">
      <div className="section-head">
        <h2 id="proyectos-titulo" className="section-title">
          {t.work.title}
        </h2>
        <p className="section-note">{t.work.note}</p>
      </div>

      <ul className="case-list">
        {t.work.cases.map((item) => (
          <Caso key={item.id} item={item} t={t} />
        ))}
      </ul>

      <ul className="work-cards">
        {t.work.cards.map((item, i) => (
          <Tarjeta key={item.id} item={item} index={i} t={t} />
        ))}
      </ul>
    </div>
  </section>
);

export default Work;
