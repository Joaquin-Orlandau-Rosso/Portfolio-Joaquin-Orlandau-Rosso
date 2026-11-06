import React from 'react';
import useReveal from '../../hooks/useReveal';
import './Experience.scss';

const Trabajo = ({ job }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="exp-entry reveal">
      <div className="exp-top">
        <h4 className="exp-heading">{job.role}</h4>
        <p className="exp-period">{job.period}</p>
      </div>
      <p className="exp-org">
        {job.org}
        {job.place && <span className="exp-place"> · {job.place}</span>}
      </p>
      <ul className="exp-points">
        {job.points.map((punto) => (
          <li key={punto.slice(0, 32)}>{punto}</li>
        ))}
      </ul>
      <ul className="tech-list">
        {job.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </li>
  );
};

const Estudio = ({ item }) => {
  const ref = useReveal();

  return (
    <li ref={ref} className="exp-entry reveal">
      <div className="exp-top">
        <h4 className="exp-heading">{item.title}</h4>
        <p className="exp-period">{item.period}</p>
      </div>
      <p className="exp-org">{item.org}</p>
      <p className="exp-description">{item.description}</p>
    </li>
  );
};

const Experience = ({ t }) => (
  <section id="experiencia" className="experience section" aria-labelledby="experiencia-titulo">
    <div className="container">
      <div className="section-head">
        <h2 id="experiencia-titulo" className="section-title">
          {t.experience.title}
        </h2>
      </div>

      <div className="exp-columns">
        <div className="exp-group">
          <h3 className="exp-group-title">{t.experience.workTitle}</h3>
          <ul>
            {t.experience.jobs.map((job) => (
              <Trabajo key={job.id} job={job} />
            ))}
          </ul>
        </div>

        <div className="exp-group">
          <h3 className="exp-group-title">{t.experience.educationTitle}</h3>
          <ul>
            {t.experience.education.map((item) => (
              <Estudio key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
