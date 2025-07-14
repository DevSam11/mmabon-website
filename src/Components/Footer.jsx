import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import { useCallback } from 'react'; // Import useCallback for memoization

const Footer = () => {
  // Function to handle "WhatsApp to Order" from the footer
  const handleWhatsappOrder = useCallback(() => {
    const phoneNumber = '2348012345678'; // Use your correct WhatsApp number
    const message = encodeURIComponent("Hello, I'd like to make an inquiry from the website footer.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, []); // No dependencies needed for this general inquiry function

  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.content}>
        <div style={footerStyles.section}>
          <h3 style={footerStyles.heading}>MMABON</h3>
          <p style={footerStyles.text}>Custom Moment, Everyday Style</p>
          <button
            onClick={handleWhatsappOrder}
            style={footerStyles.whatsappButton}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white" style={{ marginRight: '8px' }}>
              <path d="M12.04 2C7.05 2 3 6.03 3 11.02c0 1.95.62 3.79 1.69 5.34L3 22l5.77-1.5c1.42.79 3.02 1.25 4.27 1.25 4.99 0 9.04-4.03 9.04-9.02S17.03 2 12.04 2zM17.33 16.5L16 14.96c-.23-.23-.62-.31-.9-.18l-1.37.69c-.27.14-.58.11-.83-.07a10.96 10.96 0 01-3.69-3.67c-.18-.2-.22-.5-.07-.76l.69-1.37c.12-.28.05-.63-.17-.86L7.54 6.7c-.22-.22-.58-.22-.8 0L6.12 7.37c-.4.4-.14 1.25.56 1.95s1.55.96 2.08 1.05c.5.08.7.06 1.07-.15l.3-.15c.3-.15.42-.16.63-.16.2 0 .43.07.64.12l.62.27c.56.24 1.13.4 1.66.49.52.09.84.14 1.07.14.23 0 .4-.02.58-.07.4-.1.7-.27.97-.56.28-.29.42-.4.42-.6 0-.2-.1-.38-.2-.59L17.33 16.5z"/>
            </svg>
            WhatsApp to Order
          </button>
        </div>

        <div style={footerStyles.section}>
          <h4 style={footerStyles.subHeading}>Quick Links</h4>
          <ul style={footerStyles.list}>
            <li><Link to="/about" style={footerStyles.link}>About Us</Link></li>
            <li><Link to="/how-to-order" style={footerStyles.link}>How to Order</Link></li>
            <li><Link to="/contact" style={footerStyles.link}>Contact</Link></li>
            <li><Link to="/alumni" style={footerStyles.link}>Alumni</Link></li>
            <li><Link to="/designer" style={footerStyles.link}>Designer</Link></li>
          </ul>
        </div>

        <div style={footerStyles.section}>
          <h4 style={footerStyles.subHeading}>Follow Us</h4>
          <ul style={footerStyles.list}>
            {/* Replace with actual social media links and icons */}
            <li><a href="#" style={footerStyles.link}>Facebook</a></li>
            <li><a href="#" style={footerStyles.link}>Instagram</a></li>
            <li><a href="#" style={footerStyles.link}>Twitter</a></li>
          </ul>
        </div>
      </div>

      <div style={footerStyles.copyright}>
        &copy; {new Date().getFullYear()} MMABON. All rights reserved.
      </div>
    </footer>
  );
};

// Basic inline styles (consider moving to a CSS file for better management)
const footerStyles = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px 20px',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '30px',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '1200px',
    gap: '30px',
  },
  section: {
    flex: '1',
    minWidth: '200px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '1.8em',
    marginBottom: '15px',
    color: '#fff',
  },
  subHeading: {
    fontSize: '1.2em',
    marginBottom: '15px',
    color: '#eee',
  },
  text: {
    fontSize: '0.9em',
    lineHeight: '1.5',
    marginBottom: '15px',
  },
  whatsappButton: {
    backgroundColor: '#25D366', // WhatsApp green
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '10px',
    textDecoration: 'none',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  link: {
    color: '#eee',
    textDecoration: 'none',
    fontSize: '0.9em',
    marginBottom: '10px',
    display: 'block',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  copyright: {
    marginTop: '30px',
    fontSize: '0.8em',
    color: '#bbb',
    textAlign: 'center',
    width: '100%',
  },
};

export default Footer;