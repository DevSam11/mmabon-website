// src/components/ImageGallery.jsx

import React from 'react';
import './ImageGallery.css';

// Accept a 'products' prop to display specific images and a new 'onChatOrder' prop
function ImageGallery({ products, onChatOrder }) { // <--- Added onChatOrder prop
  // If no products are provided, use a default set (e.g., from the previous family milestones)
  // In a real app, you'd likely fetch this based on the category
  const defaultProducts = [
    { id: 1, imageUrl: '/your_subfolder_name/your-image-name-1.jpg', altText: 'Default Product 1' },
    { id: 2, imageUrl: '/your_subfolder_name/your-image-name-2.png', altText: 'Default Product 2' },
    { id: 3, imageUrl: '/your_subfolder_name/your-image-name-3.jpeg', altText: 'Default Product 3' },
    { id: 4, imageUrl: '/your_subfolder_name/your-image-name-4.jpg', altText: 'Default Product 4' },
    { id: 5, imageUrl: '/your_subfolder_name/your-image-name-5.png', altText: 'Default Product 5' },
    { id: 6, imageUrl: '/your_subfolder_name/your-image-name-6.jpeg', altText: 'Default Product 6' },
  ];

  const itemsToDisplay = products || defaultProducts; // Use provided products, or default

  return (
    <section className="image-gallery-section">
      <div className="gallery-grid">
        {itemsToDisplay.map(product => (
          <div key={product.id} className="gallery-item">
            <img src={product.imageUrl} alt={product.altText} />
            {/* Add an onClick handler to the button, passing the product */}
            <button
              className="chat-order-btn"
              onClick={() => onChatOrder(product)} // <--- Added onClick handler
            >
              Chat to Order
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;