import React from 'react';
import { FiArrowUpRight, FiCalendar, FiHome, FiMonitor, FiPackage, FiSmartphone, FiTwitch } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './Minis.scss';

const icons = {
  calendar: FiCalendar,
  building: FiHome,
  box: FiPackage,
  monitor: FiMonitor,
  phone: FiSmartphone,
  twitch: FiTwitch,
};

// El <li> hace la aparición escalonada; la tarjeta de adentro, el efecto al pasar el mouse.
const MiniCard = ({ item, index, t }) => {
  const ref = useReveal();
  const Icon = icons[item.icon];

  return (
    <li ref={ref} className="mini reveal" style={{ '--col': index % 3 }}>
      <div className={`mini-card ${item.demo ? 'has-demo' : ''}`}>
        <div className="mini-top">
          <span className="mini-icon" aria-hidden="true">
            <Icon />
          </span>
          <span className="mini-platform">{item.platform}</span>
        </div>
        <h3 className="display mini-title">
          {item.demo ? (
            <a href={item.demo} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        <p className="mini-summary">{item.summary}</p>
        <div className="mini-foot">
          <div className="tech-list">
            {item.tech.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          {item.demo ? (
            <span className="mini-demo" aria-hidden="true">
              {t.minis.demo} <FiArrowUpRight />
            </span>
          ) : (
            <span className="mini-private">{t.minis.private}</span>
          )}
        </div>
      </div>
    </li>
  );
};

const Minis = ({ t }) => (
  <section id="mini-proyectos" className="minis section">
    <div className="container">
      <div className="section-head">
        <h2 className="eyebrow">{t.minis.eyebrow}</h2>
        <p className="note">{t.minis.note}</p>
      </div>

      <ul className="minis-grid">
        {t.minis.items.map((item, i) => (
          <MiniCard key={item.title} item={item} index={i} t={t} />
        ))}
      </ul>
    </div>
  </section>
);

export default Minis;
