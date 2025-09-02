// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the new CSS file

const Header = ({ onMenuClick }) => { // onMenuClick prop for hamburger
  // State for dropdown visibility (managed by CSS hover for desktop)
  // No explicit JS state needed for hover dropdowns if controlled by CSS
  // onMenuClick is for the mobile side navigation

  return (
    <header className="header">
      <div className="header-left-section">
        {/* Hamburger Icon (visible on mobile via CSS) */}
        <button onClick={onMenuClick} className="hamburger-button" aria-label="Open menu">
          &#9776;
        </button>
        {/* Logo */}
        <Link to="/" className="header-logo-link">
          <img src="/logo.png" alt="Company Logo" className="header-logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="header-nav-list">
          {/* SHOP BY OCCASION Dropdown */}
          <li className="header-nav-item">
            <Link to="/shop" className="header-nav-link">SHOP BY OCCASION</Link>
            <div className="header-dropdown">
              <ul className="header-dropdown-list">
                <li className="header-dropdown-item"><Link to="/shop/family-milestones" className="header-dropdown-link">FAMILY MILESTONES</Link></li>
                <li className="header-dropdown-item"><Link to="/shop/group-events" className="header-dropdown-link">GROUP EVENTS</Link></li>
                <li className="header-dropdown-item"><Link to="/shop/corporate-brand" className="header-dropdown-link">CORPORATE BRAND</Link></li>
                <li className="header-dropdown-item"><Link to="/shop/personal-wardrobe" className="header-dropdown-link">PERSONAL WARDROBE</Link></li>
              </ul>
            </div>
          </li>

          {/* READY TO WEAR Dropdown */}
          <li className="header-nav-item">
            <Link to="/ready-to-wear" className="header-nav-link">READY TO WEAR</Link>
            <div className="header-dropdown">
              <ul className="header-dropdown-list">
                <li className="header-dropdown-item"><Link to="/ready-to-wear/tshirt" className="header-dropdown-link">TSHIRT</Link></li>
                <li className="header-dropdown-item"><Link to="/ready-to-wear/loungeset" className="header-dropdown-link">LOUNGESET</Link></li>
                <li className="header-dropdown-item"><Link to="/ready-to-wear/dresses" className="header-dropdown-link">DRESSES</Link></li>
                <li className="header-dropdown-item"><Link to="/ready-to-wear/accessories" className="header-dropdown-link">ACCESSORIES</Link></li>
              </ul>
            </div>
          </li>

          {/* Other Top-Level Links */}
          <li className="header-nav-item"><Link to="/customize-outfit" className="header-nav-link">CUSTOMIZE YOUR OUTFIT</Link></li>
          <li className="header-nav-item"><Link to="/alumni" className="header-nav-link">ALUMNI</Link></li>
           <li className="header-nav-item"><Link to="/how-to-order" className="header-nav-link">HOW TO ORDER</Link></li>
         
          
          
        </ul>
      </nav>
      <div className="header-right-section">
        {/* User and Cart Icons */}
        {/*<Link to="/profile" className="header-icon-link" aria-label="User Profile">*/}
          {/*<svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
        </Link>*/}
        <Link to="/cart" className="header-icon-link" aria-label="Shopping Cart">
          <svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zm-8.7-18L3 5.3v11.4h14.7V5.3l-5.3-5.3H8.3zM6 14.7V6.6L7.4 3h7.2L17 6.6v8.1H6z"/></svg>
        </Link>
      </div>
    </header>
  );
};

export default Header;