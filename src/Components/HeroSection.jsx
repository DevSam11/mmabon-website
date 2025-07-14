// src/components/HeroSection.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // <--- NEW: Import Link
import './HeroSection.css';

function HeroSection() {
  const heroImage = '/hero-background.jpg'; // <-- IMPORTANT: Place your actual image here!
                                           // Make sure this image is in your 'public' folder.

  // Define your WhatsApp number here (including country code, without + or 00)
  const whatsappNumber = '2348037247378'; // <--- IMPORTANT: REPLACE WITH YOUR ACTUAL NUMBER (e.g., 2348012345678)
  const whatsappMessage = "Hello, I'd like to place an order!";

  const handleWhatsAppOrder = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h2>Custom Moment, Everyday Style</h2>
        <div className="hero-buttons">
          <button className="whatsapp-order-btn" onClick={handleWhatsAppOrder}>
            WhatsApp to Order
          </button>
          {/* Use Link component for navigation */}
          <Link to="/designer" className="customize-outfit-btn"> {/* <--- Updated to Link */}
            Customize Your Outfit
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;