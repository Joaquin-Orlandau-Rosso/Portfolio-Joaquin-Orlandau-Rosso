import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import './Projects.scss';

const Projects = ({ language }) => {
  const [filter, setFilter] = useState('todos');

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'Portafolio Danel',
      description:
        language === 'es'
          ? 'Portafolio moderno y responsive para Danel, enfocado en presentar sus servicios y proyectos con una UI limpia y profesional.'
          : 'Modern and responsive portfolio for Danel, focused on showcasing services and projects with a clean, professional UI.',
      image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fportafolio-danel-nine.vercel.app%2F?w=1200&h=750',
      category: 'web',
      technologies: ['React', 'Vite', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Fuljoq/Portafolio-danel',
      demo: 'https://portafolio-danel-nine.vercel.app/',
      featured: false,
    },
    {
      id: 3,
      title: 'Masajes Marsela Rosso',
      description:
        language === 'es'
          ? 'Sitio web para un negocio de masajes y bienestar, optimizado para SEO local y pensado para captar clientes potenciales.'
          : 'Website for a massage and wellness business, optimized for local SEO and designed to attract potential clients.',
      image: '/imgs/Marsela-nueva.jpg',
      category: 'web',
      technologies: ['React', 'CSS', 'Responsive Design'],
      github: 'https://github.com/Joaquin-Orlandau-Rosso/Nueva-pagina-marsela',
      demo: 'https://marselarosso.vercel.app/',
      featured: false,
    },
    {
      id: 2,
      title: 'María AstroCoach',
      description:
        language === 'es'
          ? 'Landing page para una coach espiritual y astróloga, con enfoque en conversión, reservas y presentación clara de servicios.'
          : 'Landing page for a spiritual coach and astrologer, focused on conversion, bookings and a clear presentation of services.',
      image: 'https://s.wordpress.com/mshots/v1/https%3A%2F%2Fmariaasastrocoach.vercel.app%2F?w=1200&h=750',
      category: 'web',
      technologies: ['React', 'Styled Components', 'Vercel'],
      github: 'https://github.com/Fuljoq/MariaAstroCoach',
      demo: 'https://mariaasastrocoach.vercel.app/',
      featured: false,
    },
  ];

  const categories = [
    { id: 'todos', label: language === 'es' ? 'Todos' : 'All' },
    { id: 'web', label: 'Web' },
  ];

  const filteredProjects = filter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            {language === 'es' ? 'Proyectos' : 'Projects'}
          </h2>
          <p className="section-subtitle">
            {language === 'es'
              ? 'Algunos de mis trabajos más destacados'
              : 'Some of my most notable work'}
          </p>
        </motion.div>

        <motion.div 
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="projects-grid"
            layout
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.featured && (
                    <span className="featured-badge">
                      {language === 'es' ? 'Destacado' : 'Featured'}
                    </span>
                  )}
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
