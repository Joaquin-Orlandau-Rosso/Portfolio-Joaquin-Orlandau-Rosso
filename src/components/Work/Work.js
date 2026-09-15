import React from 'react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './Work.scss';

const pad = (n) => String(n).padStart(2, '0');

const WorkItem = ({ item, index, t }) => {
  const ref = useReveal();
  const hasLinks = item.demo || item.code;

  return (
    <li ref={ref} className={`work-item reveal kind-${item.kind}`}>
      <span className="work-index display" aria-hidden="true">
        {pad(index + 1)}
      </span>

      <a
        className="work-thumb"
        href={item.demo || undefined}
        target={item.demo ? '_blank' : undefined}
        rel={item.demo ? 'noopener noreferrer' : undefined}
        tabIndex={item.demo ? undefined : -1}
        aria-hidden={item.demo ? undefined : true}
      >
        <img src={item.image} alt="" width="1200" height="800" loading="lazy" />
      </a>

      <div className="work-body">
        <div className="work-meta">
          <span className="eyebrow accent">{t.work.kind[item.kind]}</span>
          <span className="eyebrow">{item.platform}</span>
        </div>
        <h3 className="display work-title">
          {item.demo ? (
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="work-summary">{item.summary}</p>
        <p className="work-detail">{item.detail}</p>
      </div>

      <div className="work-aside">
        <div className="tech-list">
          {item.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <div className="work-links">
          {item.demo && (
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              {t.work.demo} <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {item.code && (
            <a href={item.code} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> {t.work.code}
            </a>
          )}
          {!hasLinks && <span className="work-private">{t.work.privateCode}</span>}
        </div>
      </div>
    </li>
  );
};

const Work = ({ t }) => (
  <section id="trabajo" className="work section">
    <div className="container">
      <div className="section-head">
        <h2 className="eyebrow">{t.work.eyebrow}</h2>
        <span className="note">{t.work.note}</span>
      </div>

      <ol className="work-list">
        {t.work.items.map((item, index) => (
          <WorkItem key={item.title} item={item} index={index} t={t} />
        ))}
      </ol>
    </div>
  </section>
);

export default Work;
