import React from 'react';
import useReveal from '../../hooks/useReveal';
import './Experience.scss';

const Entry = ({ period, heading, org, place, description, tech }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="exp-entry reveal">
      <span className="exp-period eyebrow">{period}</span>
      <div className="exp-body">
        <h4 className="display exp-heading">{heading}</h4>
        <p className="exp-org">
          {org}
          {place && <span className="exp-place"> · {place}</span>}
        </p>
        <p className="exp-description">{description}</p>
        {tech && (
          <div className="tech-list">
            {tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

const Experience = ({ t }) => (
  <section id="experiencia" className="experience section">
    <div className="container">
      <div className="section-head">
        <h2 className="eyebrow">{t.experience.eyebrow}</h2>
        <span className="note">{t.experience.note}</span>
      </div>

      <div className="exp-columns">
        <div className="exp-group">
          <h3 className="eyebrow petrol exp-group-title">{t.experience.workTitle}</h3>
          <ul>
            {t.experience.jobs.map((job) => (
              <Entry
                key={job.org + job.period}
                period={job.period}
                heading={job.role}
                org={job.org}
                place={job.place}
                description={job.description}
                tech={job.tech}
              />
            ))}
          </ul>
        </div>

        <div className="exp-group">
          <h3 className="eyebrow petrol exp-group-title">{t.experience.educationTitle}</h3>
          <ul>
            {t.experience.education.map((item) => (
              <Entry
                key={item.org + item.period}
                period={item.period}
                heading={item.title}
                org={item.org}
                description={item.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
