// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // <-- THIS IS THE CORRECTED LINE 4

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section footer-about">
          <h3>MMABON</h3>
          <p>
            Where fashion meets customization. We specialize in personalized and ready-to-wear apparel that reflects your unique style and story.
          </p>
          <div className="social-links">
            {/* Replace with actual social media links and appropriate icons (e.g., Font Awesome) */}
            <a href="https://facebook.com/your_mmabon_page" target="_blank" rel="noopener noreferrer" aria-label="MMABON Facebook">
              <i className="fab fa-facebook-f"></i> {/* Requires Font Awesome to be linked in your HTML */}
            </a>
            <a href="https://instagram.com/mmabon_design" target="_blank" rel="noopener noreferrer" aria-label="MMABON Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/your_mmabon_page" target="_blank" rel="noopener noreferrer" aria-label="MMABON Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            {/* Add more social links as needed (e.g., LinkedIn, Pinterest) */}
          </div>
        </div>

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/ready-to-wear">Ready to Wear</Link></li>
            <li><Link to="/designer">Designer</Link></li>
            <li><Link to="/how-to-order">How To Order</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-company">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {/* You can add more company-related links here if you have them, e.g., */}
            {/* <li><Link to="/privacy-policy">Privacy Policy</Link></li> */}
            {/* <li><Link to="/terms-of-service">Terms of Service</Link></li> */}
          </ul>
        </div>

        <div className="footer-section footer-contact-info">
          <h3>Get in Touch</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> {/* Requires Font Awesome */}
            Lagos, Nigeria
          </p>
          <p>
            <i className="fas fa-phone"></i> {/* Requires Font Awesome */}
            <a href="tel:+2348037247378">+234 803 724 7378</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i> {/* Requires Font Awesome */}
            <a href="mailto:info@mmabon.com">info@mmabon.com</a>
          </p>
          <p>
            <i className="fab fa-whatsapp"></i> {/* Requires Font Awesome */}
            <a href="https://wa.me/2348037247378" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MMABON. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;