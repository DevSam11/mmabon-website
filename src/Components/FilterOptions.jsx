// src/components/FilterOptions.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FilterOptions.css';

function FilterOptions({ onCategorySelect }) {
  const [showOccasionDropdown, setShowOccasionDropdown] = useState(false);
  const [showReadyToWearDropdown, setShowReadyToWearDropdown] = useState(false);

  const occasionOptions = [
    'Family Milestones',
    'Group Event',
    'Corporate Brand',
    'Personal Wardrobe',
  ];

  const readyToWearOptions = [
    'T-shirts',
    'Loungesets',
    'Dresses',
    'Accessories',
  ];

  // Helper to close all other dropdowns
  const closeAllDropdowns = () => {
    setShowOccasionDropdown(false);
    setShowReadyToWearDropdown(false);
  };

  const toggleOccasionDropdown = () => {
    closeAllDropdowns();
    setShowOccasionDropdown(!showOccasionDropdown);
  };

  const toggleReadyToWearDropdown = () => {
    closeAllDropdowns();
    setShowReadyToWearDropdown(!showReadyToWearDropdown);
  };

  // Handler for clicking a dropdown item
  const handleDropdownItemClick = (categoryName) => {
    onCategorySelect(categoryName); // Notify App.jsx of the selected category
    closeAllDropdowns(); // Close dropdown after selection
  };

  // Helper function to get the display name for Ready to Wear options
  const getReadyToWearDisplayName = (option) => {
    switch (option) {
      case 'T-shirts':
        return 'T-shirt';
      case 'Loungesets':
        return 'Loungeset';
      case 'Dresses':
        return 'Dresses';
      case 'Accessories':
        return 'Accessories';
      default:
        return option;
    }
  };

  return (
    <section className="filter-options-section">
      <div className="filter-grid">
        {/* Shop by Occasion Button with Dropdown */}
        <div className="filter-item-wrapper">
          <button
            className="filter-item"
            onClick={toggleOccasionDropdown}
            aria-expanded={showOccasionDropdown}
          >
            Shop by Occasion <span className="dropdown-icon">▼</span>
          </button>
          {showOccasionDropdown && (
            <div className="dropdown-content">
              <ul>
                {occasionOptions.map((option) => (
                  <li key={option} onClick={() => handleDropdownItemClick(option)}>
                    {option === 'Corporate Brand' ? 'Corporate Events' : option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Ready to Wear Button with Dropdown */}
        <div className="filter-item-wrapper">
          <button
            className="filter-item"
            onClick={toggleReadyToWearDropdown}
            aria-expanded={showReadyToWearDropdown}
          >
            Ready to Wear <span className="dropdown-icon">▼</span>
          </button>
          {showReadyToWearDropdown && (
            <div className="dropdown-content">
              <ul>
                {readyToWearOptions.map((option) => (
                  <li key={option} onClick={() => handleDropdownItemClick(option)}>
                    {getReadyToWearDisplayName(option)}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Other static navigation buttons */}
        <div className="filter-item-wrapper">
          <Link to="/designer" className="filter-item">
            Customize Your Outfit
          </Link>
        </div>
        <div className="filter-item-wrapper">
          <Link to="/about" className="filter-item">
            About
          </Link>
        </div>
        <div className="filter-item-wrapper">
          <Link to="/how-to-order" className="filter-item">
            How to Order
          </Link>
        </div>
        <div className="filter-item-wrapper">
          <Link to="/contact" className="filter-item">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FilterOptions;