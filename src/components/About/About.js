import React from 'react';
import useReveal from '../../hooks/useReveal';
import './About.scss';

const About = ({ t }) => {
  const ref = useReveal();

  return (
    <section id="sobre-mi" className="about section">
      <div className="container">
        <div className="section-head">
          <h2 className="eyebrow">{t.about.eyebrow}</h2>
        </div>

        <div ref={ref} className="about-grid reveal">
          <div className="about-text">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}

            <dl className="about-facts">
              {t.about.facts.map((fact) => (
                <div key={fact.label}>
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
                <div key={group.group} className="stack-group">
                  <dt>{group.group}</dt>
                  <dd>{group.items.join(' · ')}</dd>
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
