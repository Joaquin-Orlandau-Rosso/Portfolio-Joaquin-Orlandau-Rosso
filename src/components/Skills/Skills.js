import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs,
  FaGitAlt, FaSass, FaGithub, FaNodeJs
} from 'react-icons/fa';
import {
  SiTypescript, SiNextdotjs,
  SiTailwindcss, SiAngular, SiMongodb
} from 'react-icons/si';
import './Skills.scss';

const Skills = ({ language }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: language === 'es' ? 'Frontend' : 'Frontend',
      color: '#61dafb',
      skills: [
        { name: 'React', icon: <FaReact /> },
        { name: 'JavaScript', icon: <FaJs /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'Sass', icon: <FaSass /> },
      ]
    },
    {
      title: language === 'es' ? 'Backend' : 'Backend',
      color: '#68a063',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
      ]
    },
    {
      title: language === 'es' ? 'Herramientas' : 'Tools',
      color: '#f1502f',
      skills: [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
      ]
    },
    {
      title: language === 'es' ? 'Aprendiendo / También conozco' : 'Learning / Also familiar with',
      color: '#a78bfa',
      skills: [
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Angular', icon: <SiAngular /> },
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{language === 'es' ? 'Habilidades' : 'Skills'}</h2>
          <p className="section-subtitle">
            {language === 'es' ? 'Tecnologías y herramientas que domino' : 'Technologies and tools I master'}
          </p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill-card"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.2 + index * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="skill-icon" style={{ color: category.color }}>
                      {skill.icon}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-decoration"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 0.5 } : {}}
          transition={{ duration: 1 }}
        >
          <div className="decoration-circle decoration-1"></div>
          <div className="decoration-circle decoration-2"></div>
          <div className="decoration-circle decoration-3"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
