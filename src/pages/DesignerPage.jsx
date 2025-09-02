import React, { useState } from 'react';

// This is a simple, complete React component for the simplified designer page.
// It uses Tailwind CSS for styling and manages its own state for the form.
// This code is meant to be placed inside a .js or .jsx file and used within a React project.
const App = () => {
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
    // Basic validation to ensure a product is selected
    if (!designDetails.product) {
      setMessage({ text: 'Please choose a product before placing an order.', type: 'error' });
      return;
    }

    // You can replace '234XXXXXXXXXX' with your actual WhatsApp phone number
    const phoneNumber = '2348037247378';
    
    // Construct the base message with the selected product
    const baseMessage = `Hello, I would like to place a custom order for a ${designDetails.product}.`;
    
    // Construct a details message from the form fields that have values
    const detailsMessage = Object.entries(designDetails)
      .filter(([key, value]) => key !== 'product' && value)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    // Combine the messages into a single string
    const fullMessage = `${baseMessage}\n\nHere are my design details:\n${detailsMessage}`;
    
    // Create the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    // Open the WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center p-4 bg-slate-950 text-white font-sans">
      <div className="w-full max-w-2xl bg-slate-900 p-8 rounded-2xl shadow-2xl space-y-8">

        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold">Design Your Own</h1>
          <p className="text-slate-400">Create your custom merchandise.</p>
        </div>
        
        {/* Main Customization Form */}
        <div className="space-y-6">

          {/* Product Selection */}
          <div className="space-y-2">
            <label htmlFor="product" className="block text-sm font-medium text-slate-300">Choose Your Product</label>
            <select
              id="product"
              name="product"
              value={designDetails.product}
              onChange={handleInputChange}
              className="block w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
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
          <div className="space-y-2">
            <label htmlFor="text" className="block text-sm font-medium text-slate-300">Text to Add (e.g., "Class of '98")</label>
            <input
              type="text"
              id="text"
              name="text"
              value={designDetails.text}
              onChange={handleInputChange}
              placeholder="Enter text for your design..."
              className="block w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            />
          </div>

          {/* Colors */}
          <div className="space-y-2">
            <label htmlFor="colors" className="block text-sm font-medium text-slate-300">Colors</label>
            <input
              type="text"
              id="colors"
              name="colors"
              value={designDetails.colors}
              onChange={handleInputChange}
              placeholder="E.g., Red and white"
              className="block w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            />
          </div>

          {/* Quantity */}
          <div className="space-y-2">
            <label htmlFor="quantity" className="block text-sm font-medium text-slate-300">Quantity</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={designDetails.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              className="block w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            />
          </div>

          {/* Additional Notes */}
          <div className="space-y-2">
            <label htmlFor="notes" className="block text-sm font-medium text-slate-300">Additional Notes</label>
            <textarea
              id="notes"
              name="notes"
              value={designDetails.notes}
              onChange={handleInputChange}
              placeholder="Any specific requests or design details..."
              rows="4"
              className="block w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
            />
          </div>

          {/* Message Display Area */}
          {message.text && (
            <div className={`p-4 rounded-xl text-sm ${message.type === 'error' ? 'bg-red-600' : 'bg-green-600'} text-white text-center`}>
              {message.text}
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={handleChatOrder}
            className="w-full py-4 bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white font-bold rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-red-500 focus:ring-opacity-50"
          >
            Chat to Place Order
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default App;
