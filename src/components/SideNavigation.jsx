import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const SideNavigation = ({ isOpen, onClose, isMobile }) => {
  const [isShopByOccasionOpen, setIsShopByOccasionOpen] = useState(false);
  const [isReadyToWearOpen, setIsReadyToWearOpen] = useState(false);
  const location = useLocation();

  // Ref to prevent useEffect from running on initial mount
  const initialRender = useRef(true);

  // Effect to close side nav and its dropdowns on route change
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    // Only close if the side nav is open AND the location.pathname has actually changed
    // (This prevents it from closing on internal state updates that don't change the URL)
    if (isOpen) {
      onClose();
      setIsShopByOccasionOpen(false);
      setIsReadyToWearOpen(false);
    }
  }, [location.pathname]); // Dependency on location.pathname to only trigger on actual route change

  // Effect to reset dropdowns when the side nav itself closes
  useEffect(() => {
    if (!isOpen) {
      setIsShopByOccasionOpen(false);
      setIsReadyToWearOpen(false);
    }
  }, [isOpen]);

  const handleWhatsappOrderSideNav = useCallback(() => {
    const phoneNumber = '2348037247378';
    const message = encodeURIComponent("Hello, I'd like to make an inquiry.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  // Conditional rendering: Only render if it's mobile view OR if it's explicitly open (e.g., during transition)
  // This ensures it's completely out of the DOM on desktop when not needed.
  if (!isMobile && !isOpen) {
    return null;
  }

  return (
    <div style={{
      ...sideNavStyles.overlay,
      transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
      visibility: isOpen ? 'visible' : 'hidden',
      opacity: isOpen ? 1 : 0,
      display: isOpen ? 'flex' : 'none',
    }}>
      <div style={sideNavStyles.container}>
        <div style={sideNavStyles.topSection}>
          <div style={sideNavStyles.searchContainer}>
            <input type="text" placeholder="Search..." style={sideNavStyles.searchInput} />
            <button style={sideNavStyles.searchButton}>
              <svg fill="currentColor" viewBox="0 0 24 24" width="20" height="20">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </button>
          </div>
          <button onClick={onClose} style={sideNavStyles.closeButton} aria-label="Close navigation menu">
            &times;
          </button>
        </div>

        <nav style={sideNavStyles.navbarNav}>
          <ul style={sideNavStyles.navList}>
            <li style={sideNavStyles.navItem}>
              <div
                onClick={() => setIsShopByOccasionOpen(!isShopByOccasionOpen)}
                style={sideNavStyles.dropdownHeader}
              >
                SHOP BY OCCASSION
                <span style={sideNavStyles.dropdownArrow}>{isShopByOccasionOpen ? '▲' : '▼'}</span>
              </div>
              {isShopByOccasionOpen && (
                <ul style={sideNavStyles.dropdownMenu}>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/shop/family-milestones" style={sideNavStyles.navLink}>FAMILY MILESTONES</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/shop/group-events" style={sideNavStyles.navLink}>GROUP EVENTS</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/shop/corporate-brand" style={sideNavStyles.navLink}>CORPORATE BRAND</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/shop/personal-wardrobe" style={sideNavStyles.navLink}>PERSONAL WARDROBE</Link>
                  </li>
                </ul>
              )}
            </li>

            <li style={sideNavStyles.navItem}>
              <div
                onClick={() => setIsReadyToWearOpen(!isReadyToWearOpen)}
                style={sideNavStyles.dropdownHeader}
              >
                READY TO WEAR
                <span style={sideNavStyles.dropdownArrow}>{isReadyToWearOpen ? '▲' : '▼'}</span>
              </div>
              {isReadyToWearOpen && (
                <ul style={sideNavStyles.dropdownMenu}>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/ready-to-wear/tshirt" style={sideNavStyles.navLink}>TSHIRT</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/ready-to-wear/loungeset" style={sideNavStyles.navLink}>LOUNGESET</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/ready-to-wear/dresses" style={sideNavStyles.navLink}>DRESSES</Link>
                  </li>
                  <li style={sideNavStyles.dropdownItem}>
                    <Link to="/ready-to-wear/accessories" style={sideNavStyles.navLink}>ACCESSORIES</Link>
                  </li>
                </ul>
              )}
            </li>

            <li style={sideNavStyles.navItem}><Link to="/designer" style={sideNavStyles.navLink}>CUSTOMIZE YOUR OUTFIT</Link></li>
           
            <li style={sideNavStyles.navItem}><Link to="/how-to-order" style={sideNavStyles.navLink}>HOW TO ORDER</Link></li>
            
            <li style={sideNavStyles.navItem}><Link to="/alumni" style={sideNavStyles.navLink}>ALUMNI</Link></li>
          
          </ul>
        </nav>

        <div style={sideNavStyles.whatsappContainer}>
          <button
            onClick={handleWhatsappOrderSideNav}
            style={sideNavStyles.whatsappButton}
          >
            WhatsApp to Order
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles for the Side Navigation
const sideNavStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)', // Semi-transparent black overlay
    zIndex: 1001, // Higher than other content
    transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
    visibility: 'hidden', // Default hidden
    opacity: 0, // Default transparent
    // display: 'flex' added dynamically based on isOpen
  },
  container: {
    width: '300px', // Fixed width for the side nav panel
    maxWidth: '80%', // Responsive max width
    height: '100%',
    backgroundColor: '#fff', // Explicitly white background
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '5px',
    flexGrow: 1,
    marginRight: '10px',
  },
  searchInput: {
    border: 'none',
    outline: 'none',
    padding: '5px',
    flexGrow: 1,
  },
  searchButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#555',
  },
  closeButton: {
    fontSize: '2em',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#333',
  },
  navbarNav: {
    flexGrow: 1,
    overflowY: 'auto', // Allows scrolling for long menus
    paddingRight: '10px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  navItem: {
    marginBottom: '10px',
  },
  navLink: {
    textDecoration: 'none',
    color: '#333',
    fontSize: '0.9em', // Further reduced font size
    padding: '7px 0',    // Adjusted padding for compactness
    display: 'block',
    transition: 'color 0.2s ease',
    fontWeight: 'normal', // Ensure it's normal
    textTransform: 'uppercase', // Keep uppercase if desired, or change to 'none'
  },
  dropdownHeader: {
    color: '#333',
    fontSize: '0.9em', // Further reduced font size
    padding: '7px 0',    // Adjusted padding
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontWeight: 'normal', // Ensure it's normal
    textTransform: 'uppercase',
  },
  dropdownArrow: {
    marginLeft: '10px',
    fontSize: '0.65em', // Adjusted arrow size to match smaller text
  },
  dropdownMenu: {
    listStyle: 'none',
    paddingLeft: '15px',
    marginTop: '5px',
    marginBottom: '10px',
    borderLeft: '1px solid #eee',
  },
  dropdownItem: {
    marginBottom: '3px',
  },
  whatsappContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  whatsappButton: {
    backgroundColor: '#25D366',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    textDecoration: 'none',
    fontWeight: 'normal', // Ensure it's normal
    width: '100%',
    justifyContent: 'center',
  },
};

export default SideNavigation;