import React, { useLayoutEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import useReveal from '../../hooks/useReveal';
import './Clients.scss';

// La pantalla del navegador es 16:10; lo que sobra de la captura es lo que se recorre al pasar el mouse.
const recorrido = ([ancho, alto]) => `${-(1 - (ancho * 10) / 16 / alto) * 100}%`;

const ClientCard = ({ item, t, clone }) => (
  <li className="client" aria-hidden={clone || undefined}>
    <a
      className="client-link"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={clone ? -1 : undefined}
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
      <div className="client-info">
        <span className="client-name">{item.name}</span>
        <span className="client-kind">{item.kind}</span>
        <span className="client-visit">
          {t.clients.visit} <FiArrowUpRight aria-hidden="true" />
        </span>
      </div>
    </a>
  </li>
);

const SEGUNDOS_POR_SITIO = 11;

// La cinta lleva la lista dos veces: al llegar a la mitad vuelve a empezar sin que se note el salto.
const Clients = ({ t }) => {
  const ref = useReveal(0.1);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const { items } = t.clients;
  const duracion = items.length * SEGUNDOS_POR_SITIO;

  // Arranca con la primera página entera, alineada con el título de la sección (no cortada en el borde).
  useLayoutEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;
    const mitad = track.scrollWidth / 2;
    const inicio = container.offsetLeft + parseFloat(getComputedStyle(container).paddingLeft);
    track.style.animationDelay = `${-((mitad - inicio) / mitad) * duracion}s`;
  }, [duracion]);

  return (
    <section id="clientes" className="clients section" aria-labelledby="clientes-titulo">
      <div ref={containerRef} className="container">
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
      </div>

      <div ref={ref} className="clients-marquee reveal">
        <ul ref={trackRef} className="clients-track" style={{ '--duracion': `${duracion}s` }}>
          {[...items, ...items].map((item, i) => (
            <ClientCard key={`${item.domain}-${i}`} item={item} t={t} clone={i >= items.length} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
