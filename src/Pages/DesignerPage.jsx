// src/pages/DesignerPage.jsx

import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './DesignerPage.css'; // Ensure this CSS file exists and is linked

function DesignerPage() {
  return (
    <>
      <Header />
      <div className="designer-page-container">
        <h1 className="coming-soon-title">Exciting Things Are Brewing!</h1>
        <p className="coming-soon-message">
          We are thrilled to announce that our **"Customize Your Dream Outfit"** tool is currently under active development!
          Our team is diligently working to bring you an intuitive and comprehensive platform where you'll soon be able to design your outfit.
        </p>
        <ul className="coming-soon-features">
          
        </ul>
        <p className="coming-soon-message">
          We're committed to delivering a seamless design experience that perfectly captures your style.
          **Stay tuned for the official launch!**
        </p>
        <p className="coming-soon-message">
          In the meantime, if you have an urgent custom order or any immediate inquiries, please don't hesitate to reach out to us directly via WhatsApp:
        </p>
        <button
          className="whatsapp-contact-button"
          onClick={() => window.open('https://wa.me/2348012345678?text=Hello%2C%20I%20have%20an%20inquiry%20about%20a%20custom%20order.', '_blank')}
        >
          Chat with us on WhatsApp
        </button>
      </div>
      <Footer />
    </>
  );
}

export default DesignerPage;