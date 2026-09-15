import React from 'react';
import './Footer.scss';

const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container footer-inner">
      <span>
        © {new Date().getFullYear()} {t.footer.rights}
      </span>
      <span>{t.footer.location}</span>
    </div>
  </footer>
);

export default Footer;
