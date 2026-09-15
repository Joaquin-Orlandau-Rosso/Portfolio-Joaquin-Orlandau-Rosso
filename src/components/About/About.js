import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaLaptopCode, FaRocket, FaUsers } from 'react-icons/fa';
import CountUp from 'react-countup';
import cvFile from './Joaquin_Orlandau-March_2026 English version.docx';
import './About.scss';

const About = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      number: 3,
      label: language === 'es' ? 'Años programando' : 'Years coding',
      suffix: '+',
    },
    {
      number: 3,
      label: language === 'es' ? 'Proyectos en producción' : 'Live projects',
      suffix: '+',
    },
    {
      number: 8,
      label: language === 'es' ? 'Tecnologías' : 'Technologies',
      suffix: '+',
    },
    {
      number: 2,
      label: language === 'es' ? 'Formaciones en curso' : 'Programs in progress',
      suffix: '',
    },
  ];

  const interests = [
    {
      icon: <FaCode />,
      title: language === 'es' ? 'Full Stack' : 'Full Stack',
      description: language === 'es' ? 'Frontend y backend con React y Node.js' : 'Frontend and backend with React and Node.js'
    },
    {
      icon: <FaLaptopCode />,
      title: language === 'es' ? 'Disponibilidad' : 'Availability',
      description: language === 'es' ? 'Abierto a oportunidades remotas' : 'Open to remote opportunities'
    },
    {
      icon: <FaRocket />,
      title: language === 'es' ? 'En formación' : 'Learning',
      description: language === 'es' ? 'UCES + Digital House en curso' : 'UCES + Digital House in progress'
    },
    {
      icon: <FaUsers />,
      title: language === 'es' ? 'Trabajo en Equipo' : 'Teamwork',
      description: language === 'es' ? 'Experiencia en startup española' : 'Experience in a Spanish startup'
    },
  ];

  return (
    <section id="about" className="about section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Sobre Mí' : 'About Me'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? 'Conoce más sobre mi trayectoria y pasión por el desarrollo'
              : 'Learn more about my journey and passion for development'}
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="image-wrapper">
              <img src="/imgs/imagen%20mejor.png" alt="Foto sobre mí" />
              <div className="image-overlay"></div>
              <div className="image-frame"></div>
            </div>
            
            <div className="floating-card">
              <FaRocket className="card-icon" />
              <div>
                <h4>{language === 'es' ? 'Full Stack' : 'Full Stack'}</h4>
                <p>{language === 'es' ? 'Developer' : 'Developer'}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3>{language === 'es' ? 'Desarrollador Full Stack' : 'Full Stack Developer'}</h3>
            <p className="about-description">
              {language === 'es'
                ? 'Desarrollador full stack con experiencia profesional en Viupik (España), donde trabajé en frontend y backend con React, Node.js y MongoDB. Actualmente curso la Licenciatura en Programación en UCES y la carrera de Full Stack en Digital House. Me enfoco en escribir código limpio y construir interfaces rápidas, accesibles y pensadas en el usuario.'
                : 'Full stack developer with professional experience at Viupik (Spain), where I worked on frontend and backend with React, Node.js and MongoDB. I am currently studying a Bachelor in Programming at UCES and a Full Stack program at Digital House. I focus on writing clean code and building fast, accessible, user-focused interfaces.'}
            </p>
            
            <div className="about-interests">
              {interests.map((interest, index) => (
                <motion.div
                  key={index}
                  className="interest-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="interest-icon">{interest.icon}</div>
                  <div>
                    <h4>{interest.title}</h4>
                    <p>{interest.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="about-buttons">
              <a href={cvFile} download="Joaquin Orlandau - CV.docx" className="btn btn-primary">
                {language === 'es' ? 'Descargar CV' : 'Download CV'}
              </a>
              <a href="#contact" className="btn btn-outline">
                {language === 'es' ? 'Hablemos' : "Let's Talk"}
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="about-stats"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
