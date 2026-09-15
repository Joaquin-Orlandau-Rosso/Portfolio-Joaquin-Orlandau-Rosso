import React from 'react';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.scss';

const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Joaquin-Orlandau-Rosso', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/joaquin-orlandau-rosso/', label: 'LinkedIn' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="footer-text">
            <p>
              © {currentYear} Joaquin Orlandau Rosso.{' '}
              {language === 'en' ? 'Made with' : 'Hecho con'}{' '}
              <FaHeart className="heart-icon" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
