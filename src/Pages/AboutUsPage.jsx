// src/pages/AboutUsPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css'; // You can create a general Page.css for common page styles

function AboutUsPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="page-content">
        <h1>About MMABON'</h1>
        <p>
          MMABON' is dedicated to creating unique and exquisite apparel that celebrates individuality and style.
          We combine traditional craftsmanship with contemporary designs to offer bespoke fashion solutions
          and carefully curated ready-to-wear collections. Learn more about our vision, our team, and our commitment to quality.
        </p>
        {/* You will add more about your brand story, mission, vision here later */}
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;