// src/pages/CategoryProductsPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from '../components/ImageGallery';
import SectionHeader from '../components/SectionHeader';
// No need to import Footer here, as App.jsx renders it globally now.

// Helper function to convert kebab-case (from URL) to Title Case (matching ALL_PRODUCT_DATA keys)
const normalizeCategoryKey = (name) => {
  if (!name) return ''; // Handle undefined or empty names
  return name
    .split('-') // Split by hyphens
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize first letter of each word
    .join(' '); // Join words with spaces
};

// Helper function to format the display name (can be more sophisticated if needed)
const formatDisplayName = (key) => {
  if (!key) return 'All Products';
  // Specific display names for root categories
  if (key === 'all-shop-items') return 'All Shop Items';
  if (key === 'all-ready-to-wear-items') return 'All Ready-to-Wear Items';
  return key; // For other categories, the normalized key is already display-ready
};


const CategoryProductsPage = ({ allProductData, onChatOrder, defaultCategory }) => {
  const { subCategory: urlSubCategory } = useParams();

  // Determine the effective category key for data lookup:
  // 1. If a 'defaultCategory' prop is provided (for /shop or /ready-to-wear base routes), use it.
  // 2. Otherwise, normalize the 'urlSubCategory' from the URL.
  const lookupKey = defaultCategory || normalizeCategoryKey(urlSubCategory);

  const displayTitle = formatDisplayName(lookupKey);

  const productsToDisplay = allProductData[lookupKey] || [];

  // --- DEBUGGING LOGS ---
  console.log('--- CategoryProductsPage Debug ---');
  console.log('URL subCategory:', urlSubCategory); // What's in the URL (e.g., "family-milestones")
  console.log('Normalized Lookup Key:', lookupKey); // What we use to find data (e.g., "Family Milestones")
  console.log('Products to Display:', productsToDisplay); // The array of products found
  console.log('ALL_PRODUCT_DATA Keys available:', Object.keys(allProductData)); // All keys in your data object
  console.log('--- End CategoryProductsPage Debug ---');


  return (
    <main className="main-content">
      <SectionHeader
        title={displayTitle}
        subtitle="Explore our custom designs"
      />
      {productsToDisplay.length > 0 ? (
        <ImageGallery products={productsToDisplay} onChatOrder={onChatOrder} />
      ) : (
        <p style={{ textAlign: 'center', margin: '50px 0', fontSize: '1.2em', color: '#555' }}>
          No products found for "{displayTitle}". Please check the category name or data.
        </p>
      )}
    </main>
  );
};

export default CategoryProductsPage;