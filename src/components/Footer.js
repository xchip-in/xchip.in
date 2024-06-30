import React from 'react';
import './Footer.css';
import { FaYoutube, FaXTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa6';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media-links">
          <a href="mailto:mail@xchip.in" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/company/xchip-in/" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaLinkedin />
          </a>
          <a href="https://x.com/xchip_in/" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/xchip.in" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com/xchip-in" target="_blank" rel="noopener noreferrer" className="social-media-link">
            <FaYoutube />
          </a>
        </div>
        <div className="footer-text">
          © {currentYear} <a href="https://www.xchip.in" target="_blank" rel="noopener noreferrer">xchip.in</a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
