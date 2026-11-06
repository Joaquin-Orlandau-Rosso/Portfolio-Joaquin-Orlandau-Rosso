import React from 'react';
import { PiArrowUpBold, PiArrowUpRightBold } from 'react-icons/pi';
import { links } from '../../content';
import './Footer.scss';

const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>
        © {new Date().getFullYear()} {t.footer.rights} · <span className="footer-place">{t.footer.location}</span>
      </p>
      <p className="footer-links">
        <a href={links.repo} target="_blank" rel="noopener noreferrer">
          {t.footer.source}
          <PiArrowUpRightBold aria-hidden="true" />
        </a>
        <a href="#top">
          {t.footer.top}
          <PiArrowUpBold aria-hidden="true" />
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
