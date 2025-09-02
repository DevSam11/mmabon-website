// src/components/SectionHeader.jsx

import React from 'react';
import './SectionHeader.css'; // We'll add styles for this

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header-container">
      <h2 className="section-title">{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
    </div>
  );
}

export default SectionHeader;