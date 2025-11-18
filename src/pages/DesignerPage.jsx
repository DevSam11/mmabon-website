// DesignerPage.jsx

import React, { useState } from 'react';
// 💥 IMPORTANT: Keep the CSS import line here. 
// If it still doesn't work after this, we can assume the CSS file itself is the issue.
import './DesignerPage.css'; 

const DesignerPage = () => {
  // --- Color Definitions (Used to set the main background/wrapper style) ---
  // Define colors here as a fallback/reference
  const COLORS = {
    backgroundDark: '#222222', // Very dark grey for main page background
  };

  // State for the product customization details
  const [designDetails, setDesignDetails] = useState({
    product: '',
    text: '',
    colors: '',
    quantity: '',
    notes: ''
  });

  // State for form validation and message display
  const [message, setMessage] = useState({ text: '', type: '' });

  // Function to handle changes in the form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDesignDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  // Function to handle the "Chat to Order" button click
  const handleChatOrder = () => {
    if (!designDetails.product) {
      setMessage({ text: 'Please choose a product before placing an order.', type: 'error' });
      return;
    }

    const phoneNumber = '2348037247378';
    
    const baseMessage = `Hello, I would like to place a custom order for a ${designDetails.product}.`;
    
    const detailsMessage = Object.entries(designDetails)
      .filter(([key, value]) => key !== 'product' && value)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    const fullMessage = `${baseMessage}\n\nHere are my design details:\n${detailsMessage}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    // Applying background color via inline style to ensure it loads
    <div 
        className="designer-page-wrapper"
        style={{ backgroundColor: COLORS.backgroundDark }}
    >
      <div className="designer-form-container">

        {/* Header Section */}
        <div className="designer-header">
          <h1 className="">Design Your Own</h1>
          <p className="">Create your custom merchandise.</p>
        </div>
        
        {/* Main Customization Form */}
        <div className="designer-form-section">

          {/* Product Selection */}
          <div className="designer-input-group">
            <label htmlFor="product" className="designer-label">Choose Your Product</label>
            <select
              id="product"
              name="product"
              value={designDetails.product}
              onChange={handleInputChange}
              className="designer-select"
            >
              <option value="" disabled>Select a product...</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Hoodie">Hoodie</option>
              <option value="Mug">Mug</option>
              <option value="Tote Bag">Tote Bag</option>
              <option value="Varsity Jacket">Varsity Jacket</option>
              <option value="Baseball Cap">Baseball Cap</option>
            </select>
          </div>

          {/* Text to Add */}
          <div className="designer-input-group">
            <label htmlFor="text" className="designer-label">Text to Add (e.g., "Class of '98")</label>
            <input
              type="text"
              id="text"
              name="text"
              value={designDetails.text}
              onChange={handleInputChange}
              placeholder="Enter text for your design..."
              className="designer-input"
            />
          </div>

          {/* Colors */}
          <div className="designer-input-group">
            <label htmlFor="colors" className="designer-label">Colors</label>
            <input
              type="text"
              id="colors"
              name="colors"
              value={designDetails.colors}
              onChange={handleInputChange}
              placeholder="E.g., Red and white"
              className="designer-input"
            />
          </div>

          {/* Quantity */}
          <div className="designer-input-group">
            <label htmlFor="quantity" className="designer-label">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={designDetails.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              className="designer-input"
            />
          </div>

          {/* Additional Notes */}
          <div className="designer-input-group">
            <label htmlFor="notes" className="designer-label">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={designDetails.notes}
              onChange={handleInputChange}
              placeholder="Any specific requests or design details..."
              rows="4"
              className="designer-textarea"
            />
          </div>

          {/* Message Display Area */}
          {message.text && (
            <div className={`designer-message ${message.type}`}>
              {message.text}
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleChatOrder}
            className="designer-action-button"
          >
            Chat to Place Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default DesignerPage;