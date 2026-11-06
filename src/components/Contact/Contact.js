import React, { useEffect, useState } from 'react';
import {
  PiArrowUpRightBold,
  PiCheckBold,
  PiCopy,
  PiDownloadSimple,
  PiGithubLogo,
  PiLinkedinLogo,
  PiWhatsappLogo,
} from 'react-icons/pi';
import { links } from '../../content';
import useReveal from '../../hooks/useReveal';
import './Contact.scss';

const NUEVA = { target: '_blank', rel: 'noopener noreferrer' };

const Contact = ({ t }) => {
  const ref = useReveal();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email);
      setCopied(true);
    } catch {
      // Sin portapapeles (contexto inseguro o permiso denegado): el mailto sigue disponible
      window.location.href = `mailto:${links.email}`;
    }
  };

  return (
    <section id="contacto" className="contact" aria-labelledby="contacto-titulo">
      <div ref={ref} className="container reveal">
        <h2 id="contacto-titulo" className="contact-title">
          {t.contact.title}
        </h2>
        <p className="contact-lead">{t.contact.lead}</p>

        <div className="contact-mail">
          <a href={`mailto:${links.email}`} className="contact-email">
            {links.email}
          </a>
          <button
            type="button"
            className={`copy-btn ${copied ? 'is-copied' : ''}`}
            onClick={copyEmail}
            aria-label={t.contact.copyLabel}
          >
            {copied ? <PiCheckBold aria-hidden="true" /> : <PiCopy aria-hidden="true" />}
            <span>{copied ? t.contact.copied : t.contact.copy}</span>
          </button>
          {/* El aviso va afuera del botón: adentro de un botón algunos lectores no lo anuncian. */}
          <span className="sr-only" role="status">
            {copied ? t.contact.copied : ''}
          </span>
        </div>

        <ul className="contact-links">
          <li>
            <a href={links.whatsapp} {...NUEVA}>
              <PiWhatsappLogo aria-hidden="true" />
              {t.contact.whatsapp}
              <span className="contact-detail">{links.phoneLabel}</span>
            </a>
          </li>
          <li>
            <a href={links.linkedin} {...NUEVA}>
              <PiLinkedinLogo aria-hidden="true" />
              LinkedIn
              <PiArrowUpRightBold className="contact-arrow" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={links.github} {...NUEVA}>
              <PiGithubLogo aria-hidden="true" />
              GitHub
              <PiArrowUpRightBold className="contact-arrow" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href={links.cv} {...NUEVA}>
              <PiDownloadSimple aria-hidden="true" />
              {t.contact.cv}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
