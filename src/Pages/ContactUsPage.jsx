import React from 'react';
import { useCallback } from 'react'; // Import useCallback for memoization
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const ContactUsPage = () => {
  // Function to handle "Chat to Order" for general inquiries on the Contact Us page
  const handleChatOrder = useCallback(() => {
    const phoneNumber = '2348012345678'; // Use your correct WhatsApp number
    const message = encodeURIComponent("Hello, I have an inquiry from the Contact Us page. How can I help you?");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, []); // No dependencies needed for this general inquiry function

  return (
    <div className="contact-us-page">
      <Header /> {/* Assuming you want a header on this page */}
      <main className="main-content">
        <section className="contact-hero-section" style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
          <h1>Contact Us</h1>
          <p style={{ fontSize: '1.1em', maxWidth: '700px', margin: '20px auto' }}>
            We'd love to hear from you! Whether you have a question about our products, an inquiry about an order, or just want to say hello, feel free to reach out.
          </p>
        </section>

        <section className="contact-details-section" style={{ padding: '40px 20px', textAlign: 'center' }}>
          <h2>Get in Touch</h2>
          <div style={{ margin: '30px auto', maxWidth: '500px', lineHeight: '1.8' }}>
            <p><strong>Email:</strong> info@mmabon.com</p>
            <p><strong>Phone:</strong> +234 801 234 5678</p>
            <p><strong>Address:</strong> Efab Mall Garki, Abuja, Nigeria</p>
            <p>We are available from Monday to Friday, 9:00 AM - 5:00 PM WAT.</p>
          </div>

          <button
            onClick={handleChatOrder}
            style={{
              backgroundColor: '#25D366', // WhatsApp green
              color: 'white',
              padding: '12px 25px',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1.1em',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '20px'
            }}
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
              <path d="M12.04 2C7.05 2 3 6.03 3 11.02c0 1.95.62 3.79 1.69 5.34L3 22l5.77-1.5c1.42.79 3.02 1.25 4.27 1.25 4.99 0 9.04-4.03 9.04-9.02S17.03 2 12.04 2zM17.33 16.5L16 14.96c-.23-.23-.62-.31-.9-.18l-1.37.69c-.27.14-.58.11-.83-.07a10.96 10.96 0 01-3.69-3.67c-.18-.2-.22-.5-.07-.76l.69-1.37c.12-.28.05-.63-.17-.86L7.54 6.7c-.22-.22-.58-.22-.8 0L6.12 7.37c-.4.4-.14 1.25.56 1.95s1.55.96 2.08 1.05c.5.08.7.06 1.07-.15l.3-.15c.3-.15.42-.16.63-.16.2 0 .43.07.64.12l.62.27c.56.24 1.13.4 1.66.49.52.09.84.14 1.07.14.23 0 .4-.02.58-.07.4-.1.7-.27.97-.56.28-.29.42-.4.42-.6 0-.2-.1-.38-.2-.59L17.33 16.5z"/>
            </svg>
            Chat with us on WhatsApp
          </button>
        </section>
      </main>
      <Footer /> {/* Assuming you want a footer on this page */}
    </div>
  );
};

export default ContactUsPage;