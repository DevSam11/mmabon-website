import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define a breakpoint for mobile view (e.g., 768px)
const MOBILE_BREAKPOINT = 768;

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle window resize
  const handleResize = () => {
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    // If we transition from mobile to desktop, close the mobile menu
    if (window.innerWidth >= MOBILE_BREAKPOINT) {
      setIsMobileMenuOpen(false);
    }
  };

  // Effect to add and remove the resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <header style={headerStyles.container}>
      <div style={headerStyles.logoContainer}>
        <Link to="/" style={headerStyles.logoLink}>
          <img
            src="/logo.png" // IMPORTANT: Update this path to your actual logo file
            alt="MMABON Logo"
            style={headerStyles.logoImage}
          />
        </Link>
      </div>

      <nav style={headerStyles.nav}>
        {/* Desktop Navigation - Render only if not in mobile view */}
        {!isMobile && (
          <ul style={headerStyles.navList}>
          
            <li style={headerStyles.navItem}><Link to="/designer" style={headerStyles.navLink}>Designer</Link></li>
             <li style={headerStyles.navItem}><Link to="/alumni" style={headerStyles.navLink}>Alumni</Link></li>
              <li style={headerStyles.navItem}><Link to="/how-to-order" style={headerStyles.navLink}>How To Order</Link></li>
              <li style={headerStyles.navItem}><Link to="/contact" style={headerStyles.navLink}>Contact</Link></li>
            <li style={headerStyles.navItem}><Link to="/about" style={headerStyles.navLink}>About Us</Link></li>
          </ul>
        )}

        {/* Mobile Menu Button - Render only if in mobile view */}
        {isMobile && (
          <button
            style={headerStyles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        )}
      </nav>

      {/* Mobile Menu - Render only if in mobile view AND the menu is open */}
      {isMobile && isMobileMenuOpen && (
        <div style={headerStyles.mobileMenu}>
          <ul style={headerStyles.mobileNavList}>
            <li style={headerStyles.mobileNavItem}><Link to="/designer" style={headerStyles.mobileNavLink} onClick={toggleMobileMenu}>Designer</Link></li>
            <li style={headerStyles.mobileNavItem}><Link to="/alumni" style={headerStyles.mobileNavLink} onClick={toggleMobileMenu}>Alumni</Link></li>
            <li style={headerStyles.mobileNavItem}><Link to="/how-to-order" style={headerStyles.mobileNavLink} onClick={toggleMobileMenu}>How To Order</Link></li>
            <li style={headerStyles.mobileNavItem}><Link to="/contact" style={headerStyles.mobileNavLink} onClick={toggleMobileMenu}>Contact</Link></li>
              <li style={headerStyles.mobileNavItem}><Link to="/about" style={headerStyles.mobileNavLink} onClick={toggleMobileMenu}>About</Link></li>
            
            
          </ul>
        </div>
      )}
    </header>
  );
};

// Basic inline styles - removed all @media queries from here
const headerStyles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#333',
  },
  logoImage: {
    height: '60px', // Adjust size as needed
    width: 'auto',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
  },
  navList: { // These styles apply when `!isMobile`
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    gap: '25px',
  },
  navItem: {
    // No specific styles, Link handles it
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1em',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#555',
    },
  },
  mobileMenuButton: { // These styles apply when `isMobile`
    fontSize: '1.8em',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333', // Color for the hamburger icon
  },
  mobileMenu: { // These styles apply when `isMobile && isMobileMenuOpen`
    display: 'flex', // Set to flex to display as a column
    flexDirection: 'column',
    position: 'absolute',
    top: '70px', // Adjust based on your header height
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    paddingBottom: '10px', // Add some padding at the bottom for spacing
  },
  mobileNavList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
  },
  mobileNavItem: {
    textAlign: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #eee',
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1.1em',
    fontWeight: 'bold',
    display: 'block',
    width: '100%',
    '&:hover': {
      backgroundColor: '#f0f0f0',
    },
  },
};

export default Header;