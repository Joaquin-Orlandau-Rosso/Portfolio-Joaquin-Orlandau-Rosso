import React from 'react';
import { PiArrowUpRightBold } from 'react-icons/pi';
import useReveal from '../../hooks/useReveal';
import './More.scss';

// Una fila por proyecto chico. Si tiene demo, toda la fila es el enlace.
const Fila = ({ item, t }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className={`more-row reveal ${item.demo ? 'has-demo' : ''}`}>
      <h3 className="more-title">
        {item.demo ? (
          <a href={item.demo} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        ) : (
          item.title
        )}
      </h3>
      <p className="more-summary">{item.summary}</p>
      <ul className="tech-list">
        {item.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <p className="more-end">
        {item.demo ? (
          <span className="more-try" aria-hidden="true">
            {t.more.try}
            <PiArrowUpRightBold />
          </span>
        ) : (
          item.platform
        )}
      </p>
    </li>
  );
};

const More = ({ t }) => (
  <section id="mas-proyectos" className="more section" aria-labelledby="mas-titulo">
    <div className="container">
      <div className="section-head">
        <h2 id="mas-titulo" className="section-title">
          {t.more.title}
        </h2>
        <p className="section-note">{t.more.note}</p>
      </div>

      <ul className="more-list">
        {t.more.items.map((item) => (
          <Fila key={item.id} item={item} t={t} />
        ))}
      </ul>
    </div>
  </section>
);

export default More;
