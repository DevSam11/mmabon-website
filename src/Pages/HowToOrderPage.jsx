// src/pages/HowToOrderPage.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Page.css'; // You can create a general Page.css for common page styles

function HowToOrderPage() {
  return (
    <div className="page-container">
      <Header />
      <main className="page-content">
        <h1>How to Order from MMABON'</h1>
        <p>
          Welcome to MMABON'! Ordering your custom outfit or selecting from our ready-to-wear collection is simple.
          Here, you will find detailed instructions on our design process, measurement guides, payment options, and delivery information.
          We aim to make your experience as seamless as possible.
        </p>
        {/* You will add detailed instructions here later */}
      </main>
      <Footer />
    </div>
  );
}

export default HowToOrderPage;