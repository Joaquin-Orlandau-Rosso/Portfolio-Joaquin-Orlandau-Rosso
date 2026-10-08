import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './Clients.scss';

// La pantalla del navegador es 16:10: lo que sobra de la captura es lo que sube al pasar el mouse.
const recorrido = ([ancho, alto]) => `${-(1 - (ancho * 10) / 16 / alto) * 100}%`;

const Tarjeta = ({ item, index }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="client reveal" style={{ '--col': index % 2 }}>
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
            <span className="client-url">{item.domain}</span>
          </div>
          <div className="client-screen">
            <img src={item.image} alt="" width={item.size[0]} height={item.size[1]} loading="lazy" decoding="async" />
          </div>
        </div>
        <span className="client-line">
          <span className="client-name">
            {item.name} <FiArrowUpRight aria-hidden="true" />
          </span>
          <span className="client-year">{item.year}</span>
        </span>
        <span className="client-kind">{item.kind}</span>
      </a>
    </li>
  );
};

// Sitios de clientes de a dos, todos a la vista. Al pasar el mouse la página se recorre dentro del marco.
const Clients = ({ t }) => (
  <section id="clientes" className="clients section" aria-labelledby="clientes-titulo">
    <div className="container">
      <div className="section-head">
        <h2 id="clientes-titulo" className="eyebrow">
          {t.clients.eyebrow}
        </h2>
        <p className="note">{t.clients.note}</p>
      </div>
      <p className="clients-lead">
        <span className="solo-mouse">{t.clients.lead}</span>
        <span className="solo-tactil">{t.clients.leadTouch}</span>
      </p>

      <ul className="clients-grid">
        {t.clients.items.map((item, i) => (
          <Tarjeta key={item.domain} item={item} index={i} />
        ))}
      </ul>
    </div>
  </section>
);

export default Clients;
