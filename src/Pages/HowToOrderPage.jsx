// src/pages/HowToOrderPage.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader'; // Ensure SectionHeader is imported
import './HowToOrderPage.css'; // We'll create or update this CSS file

function HowToOrderPage() {
  const whatsappNumber = '2348037247378'; // Your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello MMABON, I'd like to place an order or inquire about a product.")}`;

  return (
    <main className="main-content">
      <SectionHeader
        title="How to Order"
        subtitle="Your seamless journey from design to doorstep"
      />

      <section className="how-to-order-content">
        <div className="order-intro">
          <p>At MMABON, we've made ordering custom and ready-to-wear apparel as easy as a chat! Follow these simple steps to bring your unique style to life:</p>
        </div>

        <div className="order-step">
          <h2>Step 1: Explore Our Collections</h2>
          <p>Browse through our extensive collections of custom apparel and ready-to-wear items. You can explore categories like "Family Milestones," "Group Events," "T-shirts," "Loungesets," and more from our main page or the "Shop" and "Ready-to-Wear" menus.</p>
          <p>Find the designs that inspire you, or the perfect base for your custom creation.</p>
        </div>

        <div className="order-step">
          <h2>Step 2: Initiate Your Order via Chat</h2>
          <p>Once you've found an item you love or have a custom idea in mind, simply click the <strong>"Chat to Order"</strong> button associated with any product or on the dedicated order pages.</p>
          <div className="whatsapp-button-container">
            <p>This will automatically open a chat with our dedicated MMABON representative on WhatsApp, with a pre-filled message about your inquiry.</p>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-cta-button">
              Start a Chat Now
            </a>
          </div>
        </div>

        <div className="order-step">
          <h2>Step 3: Discuss Your Vision & Details</h2>
          <p>In the WhatsApp chat, our team will guide you through the next steps:</p>
          <ul>
            <li><strong>Customization:</strong> For custom orders, we'll discuss your design ideas, colors, fabrics, and any specific requirements.</li>
            <li><strong>Sizing & Quantity:</strong> Confirm sizes, quantities, and any other product specifications.</li>
            <li><strong>Pricing & Payment:</strong> Get a detailed quote and information on payment methods.</li>
            <li><strong>Design Proof (for Custom Orders):</strong> If applicable, we'll send you a digital design proof for your approval before production begins.</li>
          </ul>
        </div>

        <div className="order-step">
          <h2>Step 4: Production & Delivery</h2>
          <p>Once your order details are finalized and payment is confirmed, we'll begin the production process for your items. Our team works diligently to ensure premium craftsmanship and timely delivery.</p>
          <p>We'll keep you updated on the progress of your order until it's ready for dispatch or pickup.</p>
        </div>

        <div className="order-final-note">
          <p>It's that simple! MMABON is committed to providing a personalized and efficient ordering experience, ensuring your fashion vision comes to life.</p>
        </div>
      </section>
    </main>
  );
}

export default HowToOrderPage;