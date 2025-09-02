// src/pages/GalleryPageWrapper.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
// Import your existing ImageGallery component from components folder
import ImageGallery from '../components/ImageGallery';

// This component will receive the full galleryImages object and the onChatOrder handler from App.jsx
const GalleryPageWrapper = ({ allGalleryData, onChatOrder }) => {
  // useParams() reads the category from the URL (e.g., "family-milestones")
  const { category: urlCategory } = useParams();

  // Determine the actual category to use.
  // We'll primarily use the urlCategory here since this wrapper is for specific category pages.
  const effectiveCategory = urlCategory;

  // Helper function to format the category name for display in the header
  const formatCategoryName = (name) => {
    if (!name) return 'Gallery'; // Default title if no category
    return name.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  };

  const displayTitle = formatCategoryName(effectiveCategory);

  // Get the specific images for this category from the passed-in allGalleryData
  const imagesForCategory = allGalleryData[effectiveCategory] || [];

  return (
    <div className="gallery-page-wrapper">
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>{displayTitle} Gallery</h1>
      {imagesForCategory.length > 0 ? (
        // Render your existing ImageGallery component
        <ImageGallery products={imagesForCategory} onChatOrder={onChatOrder} />
      ) : (
        <p style={{ textAlign: 'center', color: '#555' }}>No images found for {displayTitle}.</p>
      )}
    </div>
  );
};

export default GalleryPageWrapper;