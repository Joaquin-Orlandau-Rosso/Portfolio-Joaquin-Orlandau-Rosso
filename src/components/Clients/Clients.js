import React from 'react';
import { PiArrowUpRightBold, PiWhatsappLogo } from 'react-icons/pi';
import { links } from '../../content';
import useReveal from '../../hooks/useReveal';
import './Clients.scss';

// La pantalla del navegador es 16:10: lo que sobra de la captura es lo que sube al pasar el mouse.
const recorrido = ([ancho, alto]) => `${-(1 - (ancho * 10) / 16 / alto) * 100}%`;

const Tarjeta = ({ item, index, t }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="client reveal" style={{ '--d': index % 2 }}>
      <a
        className="client-link"
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ '--recorrido': recorrido(item.size) }}
      >
        <div className="client-browser">
          <div className="client-bar">
            <span className="client-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="client-url" aria-hidden="true">
              {item.domain}
            </span>
          </div>
          <div className="client-screen">
            <img
              src={item.image}
              // El enlace ya se llama como el cliente: la captura no repite el nombre al lector.
              alt=""
              width={item.size[0]}
              height={item.size[1]}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="client-line">
          <h3 className="client-name">
            {item.name} <PiArrowUpRightBold aria-hidden="true" />
          </h3>
          <span className="client-year">{item.year}</span>
        </div>
      </a>
      <p className="client-kind">{item.kind}</p>
      <p className="client-did">{item.did}</p>
      <ul className="tech-list">
        {item.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
};

// Sitios de clientes de a dos, todos a la vista. Al pasar el mouse la página se recorre dentro del marco.
const Clients = ({ t }) => {
  const refAsk = useReveal();

  return (
    <section id="clientes" className="clients section" aria-labelledby="clientes-titulo">
      <div className="container">
        <div className="section-head">
          <div>
            <h2 id="clientes-titulo" className="section-title">
              {t.clients.title}
            </h2>
            <p className="clients-hint">
              <span className="solo-mouse">{t.clients.lead}</span>
              <span className="solo-tactil">{t.clients.leadTouch}</span>
            </p>
          </div>
          <p className="section-note">{t.clients.note}</p>
        </div>

        <ul className="clients-grid">
          {t.clients.items.map((item, i) => (
            <Tarjeta key={item.id} item={item} index={i} t={t} />
          ))}
        </ul>

        <div ref={refAsk} className="clients-ask reveal">
          <p>{t.clients.ask}</p>
          <a
            className="btn btn-secondary"
            href={links.whatsappText(t.clients.askMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiWhatsappLogo aria-hidden="true" />
            {t.clients.askCta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
