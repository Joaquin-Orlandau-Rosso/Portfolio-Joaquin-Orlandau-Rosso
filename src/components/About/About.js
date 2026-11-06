import React from 'react';
import useReveal from '../../hooks/useReveal';
import './About.scss';

const About = ({ t }) => {
  const ref = useReveal();

  return (
    <section id="sobre-mi" className="about section" aria-labelledby="sobre-mi-titulo">
      <div className="container">
        <div className="section-head">
          <h2 id="sobre-mi-titulo" className="section-title">
            {t.about.title}
          </h2>
        </div>

        <div ref={ref} className="about-grid reveal">
          <div className="about-text">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}

            <dl className="about-facts">
              {t.about.facts.map((fact) => (
                <div key={fact.id}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="about-stack">
            <h3 className="about-stack-title">{t.about.stackTitle}</h3>
            <dl>
              {t.about.stack.map((group) => (
                <div key={group.id} className="stack-group">
                  <dt>{group.group}</dt>
                  {/* Espacios duros dentro de cada tecnología y antes del punto: el renglón nunca
                      parte "Gemini / API" ni arranca con "·". */}
                  <dd>{group.items.map((item) => item.replace(/ /g, ' ')).join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
