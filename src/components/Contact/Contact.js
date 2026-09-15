import React, { useEffect, useState } from 'react';
import { FiCopy, FiCheck, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { links } from '../../content';
import useReveal from '../../hooks/useReveal';
import './Contact.scss';

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
    <section id="contacto" className="contact section">
      <div ref={ref} className="container reveal">
        <div className="contact-grid">
          <div className="contact-text">
            <h2 className="display contact-title">{t.contact.title}</h2>
            <p className="contact-lead">{t.contact.lead}</p>

            <div className="contact-lines">
              <div className="contact-line">
                <a href={`mailto:${links.email}`} className="contact-email">
                  {links.email}
                </a>
                <button
                  type="button"
                  className={`copy-btn ${copied ? 'is-copied' : ''}`}
                  onClick={copyEmail}
                  aria-label={t.contact.copy}
                  title={t.contact.copy}
                >
                  {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}
                  <span aria-live="polite">{copied ? t.contact.copied : t.contact.copy}</span>
                </button>
              </div>
              <div className="contact-line">
                <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-phone">
                  {t.contact.whatsapp} · {links.phoneLabel}
                </a>
              </div>
            </div>
          </div>

          <ul className="contact-social">
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </li>
            <li>
              <a href={`mailto:${links.email}`} aria-label="Email">
                <FiMail />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
