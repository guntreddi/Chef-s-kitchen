import React from 'react';
import './Footer.css';
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-main'>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <div className="logo">
              <span className="icon">🍽️</span>
              <h2>Chef's Kitchen.</h2>
            </div>
            <p>Open an account in minutes, get full financial control for much longer.</p>
            <div className="social-icons">
              {/* <FaFacebookF /> */}
              {/* <FaInstagram /> */}
              {/* <FaTwitter /> */}
            </div>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
              <li>Blog</li>
              <li>How we work?</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Information</h4>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
              <li>Hotel owners</li>
              <li>Partners</li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>More</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Recipe</li>
              <li>Gallery</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 - Chef's Kitchen. Distributed by ThemeWagon and Developed by GetNextjsTemplates</p>
          <div className="footer-terms">
            <span>Privacy policy</span> | <span>Terms & conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
