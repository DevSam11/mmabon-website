// src/pages/AlumniPage.jsx

import React from 'react';
import Header from '../components/Header'; // Import Header for consistent layout
import Footer from '../components/Footer'; // Import Footer for consistent layout
import ImageGallery from '../components/ImageGallery'; // Import ImageGallery to display products

// AlumniPage will now accept props for the products and the chat order handler
function AlumniPage({ alumniProducts, onChatOrder }) {
  return (
    <div className="alumni-page-container">
      <Header /> {/* Display Header at the top of the page */}
      <main> {/* Use a <main> tag for the primary content */}
        <h1>MMABON' Alumni Collection</h1>
        <p>Welcome to our exclusive collection for Alumni!</p>

        {/* Display Alumni products using ImageGallery */}
        {alumniProducts && alumniProducts.length > 0 ? (
          <ImageGallery products={alumniProducts} onChatOrder={onChatOrder} />
        ) : (
          <p>No alumni products available at the moment. Please check back soon!</p>
        )}
      </main>
      <Footer /> {/* Display Footer at the bottom of the page */}
    </div>
  );
}

export default AlumniPage;