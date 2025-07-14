// src/App.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// --- Landing Page Components ---
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import CtaBanner from './Components/CtaBanner';
import FilterOptions from './Components/FilterOptions';
import SectionHeader from './Components/SectionHeader';
import ImageGallery from './Components/ImageGallery';
import Footer from './Components/Footer'; // Import the Footer component

// --- Page Components ---
import DesignerPage from './Pages/DesignerPage';
import AlumniPage from './Pages/AlumniPage';
import HowToOrderPage from './Pages/HowToOrderPage';
import AboutUsPage from './Pages/AboutUsPage';
import ContactUsPage from './Pages/ContactUsPage';


// Move allProductData OUTSIDE the App component to ensure its reference never changes
const imageBaseUrl = '/designer_assets/'; // This can also be outside

const ALL_PRODUCT_DATA = { // Renamed to indicate it's a global constant
  // --- Shop by Occasion Categories ---
  'Family Milestones': [
    { id: 1, imageUrl: `${imageBaseUrl}family_milestones/15th Anniversary Family Tshirts 3.jpg`, altText: 'Family Event Outfit 1', category: 'Family Milestones' },
    { id: 2, imageUrl: `${imageBaseUrl}family_milestones/Custom Family Polos Tshirts Wedding Anniversary .jpg`, altText: 'Family Event Outfit 2', category: 'Family Milestones' },
    { id: 3, imageUrl: `${imageBaseUrl}family_milestones/DOC-20240806-WA0018..jpg`, altText: 'Family Event Outfit 3', category: 'Family Milestones' },
    
    { id: 5, imageUrl: `${imageBaseUrl}family_milestones/Husband and Wife Anniversary Tshirts.jpg`, altText: 'Family Event Outfit 5', category: 'Family Milestones' },
    { id: 6, imageUrl: `${imageBaseUrl}family_milestones/IMG-20200612-WA0033.jpg`, altText: 'Family Event Outfit 6', category: 'Family Milestones' },
    { id: 7, imageUrl: `${imageBaseUrl}family_milestones/IMG-20240514-WA0004.jpg`, altText: 'Family Event Outfit 1', category: 'Family Milestones' },
    { id: 8, imageUrl: `${imageBaseUrl}family_milestones/IMG-20240703-WA0028(1).jpg`, altText: 'Family Event Outfit 2', category: 'Family Milestones' },
    { id: 9, imageUrl: `${imageBaseUrl}family_milestones/Mickey Mouse Family Trip tees Disneyoad.jpg`, altText: 'Family Event Outfit 3', category: 'Family Milestones' },
    { id: 10, imageUrl: `${imageBaseUrl}family_milestones/tshirt printing1.jpg`, altText: 'Family Event Outfit 4', category: 'Family Milestones' },
    { id: 11, imageUrl: `${imageBaseUrl}family_milestones/Tshirt printing 3.jpg`, altText: 'Family Event Outfit 5', category: 'Family Milestones' },
    { id: 12, imageUrl: `${imageBaseUrl}family_milestones/Wedding Anniversary Couple Tshirts prints.jpg`, altText: 'Family Event Outfit 6', category: 'Family Milestones' },
    { id: 13, imageUrl: `${imageBaseUrl}family_milestones/Wedding Anniversary Tshirts print in lagos(1).jpg`, altText: 'Family Event Outfit 5', category: 'Family Milestones' },
    { id: 14, imageUrl: `${imageBaseUrl}family_milestones/Tshirt print in lagos Wedding Anniversary Tshirts Family Custom.jpg`, altText: 'Family Event Outfit 6', category: 'Family Milestones' },
  ],
  'Group Event': [
    { id: 15, imageUrl: `${imageBaseUrl}group_event/0248_Suntory 7D_0266.jpg`, altText: 'Group Event Outfit 1', category: 'Group Event' },
    { id: 16, imageUrl: `${imageBaseUrl}group_event/360 Degree Staff Bonding Tshirts.jpg`, altText: 'Group Event Outfit 2', category: 'Group Event' },
    { id: 17, imageUrl: `${imageBaseUrl}group_event/Egbin Power Anniversary Tshirts thsirt print in lagos.jpg`, altText: 'Group Event Outfit 1', category: 'Group Event' },
    { id: 18, imageUrl: `${imageBaseUrl}group_event/Egbin Power Strike Force Football Team Branded Jersey.jpg`, altText: 'Group Event Outfit 2', category: 'Group Event' },
    { id: 19, imageUrl: `${imageBaseUrl}group_event/First E & P Branded jerseys.jpg`, altText: 'Group Event Outfit 1', category: 'Group Event' },
    { id: 20, imageUrl: `${imageBaseUrl}group_event/First E and P Branded jerseys.jpg`, altText: 'Group Event Outfit 2', category: 'Group Event' },
    { id: 21, imageUrl: `${imageBaseUrl}group_event/IMG_20210809_085137_086.jpg`, altText: 'Group Event Outfit 1', category: 'Group Event' },
    { id: 22, imageUrl: `${imageBaseUrl}group_event/IMG-20170215-WA0008.jpg`, altText: 'Group Event Outfit 2', category: 'Group Event' },
    { id: 23, imageUrl: `${imageBaseUrl}group_event/IMG-20181217-WA0003.jpg`, altText: 'Group Event Outfit 1', category: 'Group Event' },
    { id: 24, imageUrl: `${imageBaseUrl}group_event/Uzo at 40 birthday tshirt .jpg`, altText: 'Group Event Outfit 2', category: 'Group Event' },
  ],
  'Corporate Brand': [
    { id: 41, imageUrl: `${imageBaseUrl}corporate_brand/0248_Suntory 7D_0266.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 42, imageUrl: `${imageBaseUrl}corporate_brand/360 Degree Staff Bonding Tshirts.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 43, imageUrl: `${imageBaseUrl}corporate_brand/180509_Mmabon Shoot5051.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 44, imageUrl: `${imageBaseUrl}corporate_brand/Airtel Team Building Tshirts .jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 45, imageUrl: `${imageBaseUrl}corporate_brand/Custom Jersey for Benchmac and Ince.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 46, imageUrl: `${imageBaseUrl}corporate_brand/Custom Jersey.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 47, imageUrl: `${imageBaseUrl}corporate_brand/Cybersafe branded asooke african hoodie.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 48, imageUrl: `${imageBaseUrl}corporate_brand/DAFA FULL.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 49, imageUrl: `${imageBaseUrl}corporate_brand/Darling Hair Big Brother Varsity Jackets.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 50, imageUrl: `${imageBaseUrl}corporate_brand/Denim Corporate Shirt.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 51, imageUrl: `${imageBaseUrl}corporate_brand/Egbin Corporate Branded Business Staff Tshirts.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 52, imageUrl: `${imageBaseUrl}corporate_brand/Egbin hoodie.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 53, imageUrl: `${imageBaseUrl}corporate_brand/EGBIN JERS 020.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 54, imageUrl: `${imageBaseUrl}corporate_brand/Uzo at 40 birthday tshirt .jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 55, imageUrl: `${imageBaseUrl}corporate_brand/Darling Hair Big Brother Varsity Jackets.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 56, imageUrl: `${imageBaseUrl}corporate_brand/FB_IMG_1475825395152.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 57, imageUrl: `${imageBaseUrl}corporate_brand/Photo from Elizabeth Idem-Ido.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 58, imageUrl: `${imageBaseUrl}corporate_brand/Shell Team Bonding.jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
    { id: 59, imageUrl: `${imageBaseUrl}corporate_brand/Superite Staff Custom Polo Tshirts.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
    { id: 60, imageUrl: `${imageBaseUrl}corporate_brand/Egbin Power Anniversary Tshirts (1).jpg`, altText: 'Corporate Branding 2', category: 'Corporate Brand' },
  ],
  'Personal Wardrobe': [
    { id: 61, imageUrl: `${imageBaseUrl}personal_wardrobe/Black 3_4 Sleeves Varsity Tshirt Dress .jpg`, altText: 'Personal Style 1', category: 'Personal Wardrobe' },
    { id: 62, imageUrl: `${imageBaseUrl}personal_wardrobe/Exaggerated Ruffles Tiered Tshirt Dress.jpg`, altText: 'Personal Style 2', category: 'Personal Wardrobe' },
    { id: 63, imageUrl: `${imageBaseUrl}personal_wardrobe/Grey Back Hem Gathered Tshirt Dress.jpg`, altText: 'Personal Style 2', category: 'Personal Wardrobe' },
    { id: 64, imageUrl: `${imageBaseUrl}personal_wardrobe/Royal Blue 3_4 Sleeves Varsity Tshirt Dress.jpg`, altText: 'Personal Style 1', category: 'Personal Wardrobe' },
  ],

  // --- Ready to Wear Categories (Only the four specified options remain) ---
  'Dresses': [
    { id: 13, imageUrl: `${imageBaseUrl}dresses/dress-1.jpg`, altText: 'Elegant Dress 1', category: 'Dresses' },
    { id: 14, imageUrl: `${imageBaseUrl}dresses/dress-2.jpg`, altText: 'Casual Dress 2', category: 'Dresses' },
    { id: 15, imageUrl: `${imageBaseUrl}dresses/dress-3.jpg`, altText: 'Evening Gown 3', category: 'Dresses' },
    { id: 16, imageUrl: `${imageBaseUrl}dresses/dress-4.jpg`, altText: 'Summer Dress 4', category: 'Dresses' },
  ],
  'Loungesets': [
    { id: 29, imageUrl: `${imageBaseUrl}loungesets/_MG_7529.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungesets' },
    { id: 30, imageUrl: `${imageBaseUrl}loungesets/3 piece Loungwear Set.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 31, imageUrl: `${imageBaseUrl}loungesets/20210427_145350.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungesets' },
    { id: 32, imageUrl: `${imageBaseUrl}loungesets/Jersey Adire Slanted Hem Tshirt Dress.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 33, imageUrl: `${imageBaseUrl}loungesets/Jersey Hoodie Tshirt Dress (1).jpg`, altText: 'Cozy Loungeset 1', category: 'Loungesets' },
    { id: 34, imageUrl: `${imageBaseUrl}loungesets/Royal Blue 3_4 Sleeves Varsity Tshirt Dress.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 35, imageUrl: `${imageBaseUrl}loungesets/customgiftsanddesigns_2853292044192799777_27602116205_0_1440x1800.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 36, imageUrl: `${imageBaseUrl}loungesets/Document from Elizabeth Idem - Ido.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungesets' },
    { id: 37, imageUrl: `${imageBaseUrl}loungesets/GREY HOODIE FRAME 2.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 38, imageUrl: `${imageBaseUrl}loungesets/TRAVEL FRAME 3.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungesets' },
    { id: 39, imageUrl: `${imageBaseUrl}loungesets/TRAVEL FRAME 4.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
    { id: 40, imageUrl: `${imageBaseUrl}loungesets/Travel Loungewear.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungesets' },
  ],
  'T-shirts': [
    { id: 33, imageUrl: `${imageBaseUrl}t_shirts/tshirt-1.jpg`, altText: 'Graphic T-shirt 1', category: 'T-shirts' },
    { id: 34, imageUrl: `${imageBaseUrl}t_shirts/tshirt-2.jpg`, altText: 'Plain T-shirt 2', category: 'T-shirts' },
  ],
  'Accessories': [
    { id: 40, imageUrl: `${imageBaseUrl}accessories/accessory-1.jpg`, altText: 'Fashion Accessory 1', category: 'Accessories' },
    { id: 41, imageUrl: `${imageBaseUrl}accessories/accessory-2.jpg`, altText: 'Fashion Accessory 2', category: 'Accessories' },
  ],

  // --- Alumni Category ---
  'Alumni': [
    { id: 101, imageUrl: `${imageBaseUrl}alumni/alumni-1.jpg`, altText: 'Alumni Collection Item 1', category: 'Alumni' },
    { id: 102, imageUrl: `${imageBaseUrl}alumni/alumni-2.jpg`, altText: 'Alumni Collection Item 2', category: 'Alumni' },
    { id: 103, imageUrl: `${imageBaseUrl}alumni/alumni-3.jpg`, altText: 'Alumni Collection Item 3', category: 'Alumni' },
  ],
};


function App() {
  const [activeGalleryCategory, setActiveGalleryCategory] = useState('Family Milestones');
  const [currentGalleryProducts, setCurrentGalleryProducts] = useState([]);

  useEffect(() => {
    // Set initial gallery based on the default category
    setCurrentGalleryProducts(ALL_PRODUCT_DATA[activeGalleryCategory] || []);
  }, [activeGalleryCategory]); // Dependency on activeGalleryCategory only

  // Memoize handleGallerySelect to prevent its reference from changing on every render
  const handleGallerySelect = useCallback((category) => {
    // Only update state if the category is actually different to avoid unnecessary re-renders
    if (category !== activeGalleryCategory) {
      setActiveGalleryCategory(category);
    }
    // Always update currentGalleryProducts based on the *new* category or the currently active one
    setCurrentGalleryProducts(ALL_PRODUCT_DATA[category] || []);
  }, [activeGalleryCategory]); // Dependency on activeGalleryCategory for the comparison

  // Memoize getSubtitle to prevent its reference from changing on every render
  const getSubtitle = useCallback(() => {
    if (['Family Milestones', 'Group Event', 'Corporate Brand', 'Personal Wardrobe'].includes(activeGalleryCategory)) {
      return activeGalleryCategory;
    }
    if (['Dresses', 'Loungesets', 'T-shirts', 'Accessories'].includes(activeGalleryCategory)) {
      return activeGalleryCategory;
    }
    return null;
  }, [activeGalleryCategory]); // Dependency on activeGalleryCategory

  // Memoize handleChatOrder to prevent its reference from changing on every render
  const handleChatOrder = useCallback((product) => {
    const phoneNumber = '2348037247378'; // Ensure this is your correct WhatsApp number
    const message = encodeURIComponent(`Hello, I'd like to inquire about ordering: ${product.altText} (Product ID: ${product.id}).`);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, []); // No dependencies needed for this function as it doesn't rely on state/props that change frequently

  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Route for the Main Landing Page */}
          <Route path="/" element={
            <>
              <Header />
              <HeroSection />
              <CtaBanner />
              {/* FilterOptions now only handles main categories */}
              <FilterOptions onCategorySelect={handleGallerySelect} />
              <main className="main-content">
                <SectionHeader
                  title={
                    ['Family Milestones', 'Group Event', 'Corporate Brand', 'Personal Wardrobe'].includes(activeGalleryCategory)
                      ? 'Shop by Occasion'
                      : 'Ready to Wear'
                  }
                  subtitle={getSubtitle()}
                />
                <ImageGallery
                  products={currentGalleryProducts}
                  onChatOrder={handleChatOrder}
                />
              </main>
              <Footer /> {/* Render the Footer component */}
            </>
          } />

          {/* Route for the Designer Page */}
          <Route path="/designer" element={<DesignerPage />} />

          {/* Route for the Alumni Page */}
          <Route
            path="/alumni"
            element={
              <AlumniPage
                alumniProducts={ALL_PRODUCT_DATA['Alumni']}
                onChatOrder={handleChatOrder}
              />
            }
          />

          {/* Routes for additional pages */}
          <Route path="/how-to-order" element={<HowToOrderPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;