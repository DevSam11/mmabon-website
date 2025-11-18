// src/App.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Link is imported but not used directly in App.jsx's return, it's used in Header/SideNav

// --- Landing Page Components ---
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CtaBanner from './components/CtaBanner';
import FilterOptions from './components/FilterOptions';
import SectionHeader from './components/SectionHeader';
import ImageGallery from './components/ImageGallery';
import Footer from './components/Footer';
import SideNavigation from './components/SideNavigation'; // Import SideNavigation

// --- General Page Components ---
import ECommercePage from './pages/ECommercePage';
import DesignerPage from './pages/DesignerPage';
import AlumniPage from './pages/AlumniPage';
import HowToOrderPage from './pages/HowToOrderPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import CategoryProductsPage from './pages/CategoryProductsPage';
// Reusable component for category pages
import CheckoutPage from './components/CheckoutPage';

import './App.css'; // IMPORTANT: Make sure this line is here!


// ALL_PRODUCT_DATA (moved outside App component for cleaner access)
const imageBaseUrl = '/designer_assets/'; // Ensure this path is correct for your project
// src/App.jsx




// 💥 NEW: Separate Product Data for the E-Commerce page 💥
// src/App.jsx

 
// src/App.jsx

const ECOMMERCE_PRODUCTS = [
  // --- Block 1 ---
  { id: 101, name: '20th Memorial Tshirt for Late Father (Organza)', price: 15000, size: 'M', color: 'Black', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/womanorganzashortsleevetsh-550x550.jpg` }, 
  { id: 102, name: 'Vintage Logo T-shirt (Black)', price: 15000, size: 'L', color: 'White', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/scaled_variant--2_transformed-550x550.jpg` }, 
  { id: 103, name: 'Slim Fit V Neck TShirt (Navy)', price: 10000, size: 'S', color: 'Navy', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/fittedvnecktshirt1-550x550.jpg` }, 
  { id: 104, name: 'Tulle Sleeve T-shirt (Pink)', price: 15000, size: 'M', color: 'Pink', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/fittedvnecktshirt3-Copy-550x550.jpg` }, 
    
  // --- Block 2 ---
  { id: 105, name: '20th Memorial Tshirt for Late Father (V Neck)', price: 15000, size: 'M', color: 'Black', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/fittedvnecktshirt5-(1)-550x550.jpg` }, 
  { id: 106, name: 'Vintage Logo T-shirt (Turquoise)', price: 15000, size: 'L', color: 'White', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/fittedvneckturquoise2-Copy-(1)-550x550.jpg` }, 
  { id: 107, name: 'Slim Fit V Neck TShirt (Varsity Blue)', price: 10000, size: 'S', color: 'Navy', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/mmabonvarsitytshirtroyalblue-(1)-550x550.jpg` }, 
  { id: 108, name: '40th Birthday Tulle Sleeve Tshirt', price: 15000, size: 'M', color: 'Pink', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/scaled_40th-Birthday-Net-Tulle-Sleeves-Rhinestoned-Tshirt_transformed-1-550x550.jpg` }, 

  // --- Block 3 ---
  { id: 109, name: '40th Birthday Vintage Tshirt', price: 15000, size: 'M', color: 'Black', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/scaled_40th-Birthday-Tshirt_transformed-550x550.jpg` }, 
  { id: 110, name: 'Slategrey Uniform T-shirt', price: 15000, size: 'L', color: 'White', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/slategreyun-550x550.jpg` }, 
  { id: 111, name: 'Vintage 40 T-shirt (Scaled)', price: 10000, size: 'S', color: 'Navy', 
    category: 'Tshirt', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/scaled_Vintage-40-Tshirt_transformed-2-550x550.jpg` }, 
  { id: 112, name: 'Rhinestoned Tulle Sleeve Tshirt', price: 15000, size: 'M', color: 'Pink', 
    category: 'Tshirt', // <<-- ADDED
    // This image path appears twice above, using it for ID 112 to fill the slot.
    image: `${imageBaseUrl}e-commerce/scaled_40th-Birthday-Net-Tulle-Sleeves-Rhinestoned-Tshirt_transformed-1-550x550.jpg` }, 


     // --- Block 4 Loungewear---
  { id: 113, name: 'CROPPEDJOGGERSSET1', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/CROPPEDJOGGERSSET1--550x550.jpg` },

      { id: 114, name: 'Daziessweatwear', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/Daziessweatwear--550x550.jpg` },

      { id: 115, name: 'croppedruchedbandswea', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/croppedruchedbandswea-550x550.jpg` },

      { id: 116, name: 'jeeseyhoo', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/jeeseyhoo-550x550.jpg` },

      { id: 117, name: 'navybluehoodi', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/navybluehoodi-550x550.jpg` },

      { id: 118, name: 'Loungewear', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', // <<-- ADDED
    image: `${imageBaseUrl}e-commerce/Loungewear/scaled_180509_Mmabon-Shoot4976_transformed-550x550.jpg` },

      { id: 119, name: 'Hoodie', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/scaled_AGS-Branded-Hoodie-and-Joggers-set_transformed-550x550.jpg` },

    { id: 120, name: 'Hoodie', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/scaled_ankara-1_transformed-550x550.png` },

     { id: 121, name: 'Sweat-Shirt', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/scaled_Sweat-Shirt---Short-2_transformed-550x550.png` },

     { id: 122, name: 'Hoodie', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/scaled_Unisex-Sweatshirt---Joggers-Set-1_transformed-550x550.jpg` },

    { id: 123, name: 'Unisex-Hoodie---Joggers-Set', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/Unisex-Hoodie---Joggers-Set-550x550.jpg` },

      { id: 124, name: 'Hoodie---Joggers-Set', price: 15000, size: 'M', color: 'Black', 
    category: 'Loungewear', 
    image: `${imageBaseUrl}e-commerce/Loungewear/Varaity-Net-Sleeve-Hoodie---N12500-550x550.jpg` },


    // --- Block 5 Loungewear---
  { id: 125, name: 'blacksle', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/blacksle-550x550.jpg` },

     { id: 126, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/dress-550x550.jpg` },

      { id: 127, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/DRESSES.1png--(1)-550x550.jpg` },

     { id: 128, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/dsc-(2)-550x550.jpg` },

     { id: 129, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/DSC--(2)-550x550.jpg` },

      { id: 130, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/DSC_8658-550x550.jpg` },

    { id: 131, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/EXXA-550x550.jpg` },

    { id: 132, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/greybackhemgatherts-550x550.jpg` },

     { id: 133, name: 'Group model varsity', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/groupmodelvarsit-550x550.jpg` },
   
     { id: 134, name: 'Jessey', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/jessyadir-550x550.jpg` },

     { id: 135, name: 'Royal blue sleeve', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/royalbluesleeve-(1)-550x550.jpg` },


    { id: 137, name: 'Adire-diamond-t-shirt', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/scaled_Adire-diamond-t-shirt-1_transformed-550x550.png` },

      { id: 138, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/scaled_dsc_transformed-550x550.png` },

          { id: 139, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/slantmmidishir-550x550.jpg` },

     { id: 140, name: 'Dress', price: 15000, size: 'M', color: 'Black', 
    category: 'Dresses', 
    image: `${imageBaseUrl}e-commerce/Dresses/Tik-550x550.jpg` },


       // --- Block 5 Loungewear---
  { id: 141, name: 'Uniform', price: 15000, size: 'M', color: 'Black', 
    category: 'Uniform', 
    image: `${imageBaseUrl}e-commerce/scaled_180509_Mmabon-Shoot4976_transformed-550x550.jpg` },

     { id: 142, name: 'Ankara sleeve', price: 15000, size: 'M', color: 'Black', 
    category: 'Uniform', 
    image: `${imageBaseUrl}e-commerce/ankarareglansleevetsh-(1)-550x550.jpg` },

       // --- Block 6 Accessories---
  { id: 143, name: 'Tote bag', price: 15000, size: 'M', color: 'Black', 
    category: 'Accessories', 
    image: `${imageBaseUrl}e-commerce/Accessories/20231120_195232-550x550.jpg` },

     { id: 144, name: 'Power bank', price: 15000, size: 'M', color: 'Black', 
    category: 'Accessories', 
    image: `${imageBaseUrl}e-commerce/Accessories/scaled_power-bank-2_transformed-550x550.png` },

     { id: 145, name: 'bag', price: 15000, size: 'M', color: 'Black', 
    category: 'Accessories', 
    image: `${imageBaseUrl}e-commerce/Accessories/scaled_mug-2_transformed-550x550.png` },

       { id: 146, name: 'bottles', price: 15000, size: 'M', color: 'Black', 
    category: 'Accessories', 
    image: `${imageBaseUrl}e-commerce/Accessories/scaled_E-1_transformed-550x550.jpg` },

     { id: 147, name: 'Throw pillow', price: 15000, size: 'M', color: 'Black', 
    category: 'Accessories', 
    image: `${imageBaseUrl}e-commerce/Accessories/scaled_bottles-2_transformed-550x550.png` }
   

];






const ALL_PRODUCT_DATA = {
    // --- Shop by Occasion   ---
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
    'Group Events': [
        { id: 15, imageUrl: `${imageBaseUrl}group_event/0248_Suntory 7D_0266.jpg`, altText: 'Group Event Outfit 1', category: 'Group Events' },
        { id: 16, imageUrl: `${imageBaseUrl}group_event/360 Degree Staff Bonding Tshirts.jpg`, altText: 'Group Event Outfit 2', category: 'Group Events' },
        { id: 17, imageUrl: `${imageBaseUrl}group_event/Egbin Power Anniversary Tshirts thsirt print in lagos.jpg`, altText: 'Group Event Outfit 1', category: 'Group Events' },
        { id: 18, imageUrl: `${imageBaseUrl}group_event/Egbin Power Strike Force Football Team Branded Jersey.jpg`, altText: 'Group Event Outfit 2', category: 'Group Events' },
        { id: 19, imageUrl: `${imageBaseUrl}group_event/First E & P Branded jerseys.jpg`, altText: 'Group Event Outfit 1', category: 'Group Events' },
        { id: 20, imageUrl: `${imageBaseUrl}group_event/First E and P Branded jerseys.jpg`, altText: 'Group Event Outfit 2', category: 'Group Events' },
        { id: 21, imageUrl: `${imageBaseUrl}group_event/IMG_20210809_085137_086.jpg`, altText: 'Group Event Outfit 1', category: 'Group Events' },
        { id: 22, imageUrl: `${imageBaseUrl}group_event/IMG-20170215-WA0008.jpg`, altText: 'Group Event Outfit 2', category: 'Group Events' },
        { id: 23, imageUrl: `${imageBaseUrl}group_event/IMG-20181217-WA0003.jpg`, altText: 'Group Event Outfit 1', category: 'Group Events' },
        { id: 24, imageUrl: `${imageBaseUrl}group_event/Uzo at 40 birthday tshirt .jpg`, altText: 'Group Event Outfit 2', category: 'Group Events' },
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
        { id: 57, imageUrl: `${imageBaseUrl}corporate_brand/Photo from Elizabeth Idem - Ido.jpg`, altText: 'Corporate Branding 1', category: 'Corporate Brand' },
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

    // --- Ready to Wear Categories (Matching UI: Untitled.pngllll.png) ---
    'Tshirt': [
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Period on Capslock Statement Tshirt for Princess Jecoco.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/BeautyPlus_20200910210324902_save.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Good vibes tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Ankara Polo Tshirts for Burial .jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Girl with an Attitude Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG_20211220_162847_386.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20190312-WA0008.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20220524-WA0023.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20240118-WA0026(1).jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Baby Pink Mask Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Real, not Perfect Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Team Ido Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Baby Pink Mask Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Unbothered Statement Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/varsity burial tshirt in honour of her father in law.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Without Music, life would be tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Your Business Guardian Angel Varsity Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/When Women Support Women Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Wife, Mom, CEO Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Weed Graphic Tshirt for Okey Ejibe, Canada.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Prayer Statement Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/This chic loves the good life.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/20th Memorial Tshirt for Late Father.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        
        
    ],
    'Loungeset': [
        { id: 29, imageUrl: `${imageBaseUrl}loungesets/_MG_7529.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 30, imageUrl: `${imageBaseUrl}loungesets/3 piece Loungwear Set.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
        { id: 31, imageUrl: `${imageBaseUrl}loungesets/20210427_145350.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 32, imageUrl: `${imageBaseUrl}loungesets/Jersey Adire Slanted Hem Tshirt Dress.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
        { id: 33, imageUrl: `${imageBaseUrl}loungesets/Jersey Hoodie Tshirt Dress (1).jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 34, imageUrl: `${imageBaseUrl}loungesets/Royal Blue 3_4 Sleeves Varsity Tshirt Dress.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
        { id: 35, imageUrl: `${imageBaseUrl}loungesets/customgiftsanddesigns_2853292044192799777_27602116205_0_1440x1800.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
        { id: 36, imageUrl: `${imageBaseUrl}loungesets/Document from Elizabeth Idem - Ido.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 37, imageUrl: `${imageBaseUrl}loungesets/GREY HOODIE FRAME 2.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
        { id: 38, imageUrl: `${imageBaseUrl}loungesets/TRAVEL FRAME 3.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 39, imageUrl: `${imageBaseUrl}loungesets/TRAVEL FRAME 4.jpg`, altText: 'Cozy Loungeset 1', category: 'Loungeset' },
        { id: 40, imageUrl: `${imageBaseUrl}loungesets/Travel Loungewear.jpg`, altText: 'Stylish Loungeset 2', category: 'Loungeset' },
    ],
    'Dresses': [
        { id: 13, imageUrl: `${imageBaseUrl}Tshirt/20th Memorial Tshirt for Late Father.jpg`, altText: 'Elegant Dress 1', category: 'Dresses' },
        { id: 14, imageUrl: `${imageBaseUrl}Tshirt/IMG-20190312-WA0008.jpg`, altText: 'Casual Dress 2', category: 'Dresses' },
        { id: 15, imageUrl: `${imageBaseUrl}Tshirt/Baby Pink Mask Tshirt.jpg`, altText: 'Evening Gown 3', category: 'Dresses' },
        { id: 16, imageUrl: `${imageBaseUrl}Tshirt/Prayer Statement Tshirt.jpg`, altText: 'Summer Dress 4', category: 'Dresses' },
    ],
    'Accessories': [
        { id: 40, imageUrl: `${imageBaseUrl}Accessories/50th birthday Throw Pillow.jpg`, altText: 'Fashion Accessory 1', category: 'Accessories' },
        { id: 491, imageUrl: `${imageBaseUrl}Accessories/Branded Mug.jpg`, altText: 'Fashion Accessory 2', category: 'Accessories' },
        { id: 990, imageUrl: `${imageBaseUrl}Accessories/Branded Thermal Bottle .JPG`, altText: 'Fashion Accessory 1', category: 'Accessories' },
        { id: 241, imageUrl: `${imageBaseUrl}Accessories/Branded power banks.JPG`, altText: 'Fashion Accessory 2', category: 'Accessories' },
        { id: 340, imageUrl: `${imageBaseUrl}Accessories/50th birthday Throw Pillow.jpg`, altText: 'Fashion Accessory 1', category: 'Accessories' },
        { id: 421, imageUrl: `${imageBaseUrl}Accessories/Microsoft Branded Merchandise .jpg`, altText: 'Fashion Accessory 2', category: 'Accessories' },
        
    ],

    // --- Other Categories (Unchanged) ---
    'Alumni': [
        { id: 101, imageUrl: `${imageBaseUrl}alumni/alumni-1.jpg`, altText: 'Alumni Collection Item 1', category: 'Alumni' },
        { id: 102, imageUrl: `${imageBaseUrl}alumni/alumni-2.jpg`, altText: 'Alumni Collection Item 2', category: 'Alumni' },
        { id: 103, imageUrl: `${imageBaseUrl}alumni/alumni-3.jpg`, altText: 'Alumni Collection Item 3', category: 'Alumni' },
    ],
    // Default data for general /shop and /ready-to-wear pages if they don't have a subCategory
    // IMPORTANT: Populate these with a representative selection of products or leave them empty if you prefer
    'all-shop-items': [
        { id: 1001, imageUrl: `${imageBaseUrl}family_milestones/tshirt printing1.jpg`, altText: 'Shop All Item 1', category: 'All Shop Items' },
        { id: 1002, imageUrl: `${imageBaseUrl}corporate_brand/Denim Corporate Shirt.jpg`, altText: 'Shop All Item 2', category: 'All Shop Items' },
        { id: 1003, imageUrl: `${imageBaseUrl}group_event/Egbin Power Anniversary Tshirts thsirt print in lagos.jpg`, altText: 'Shop All Item 3', category: 'All Shop Items' },
    ],
    'all-ready-to-wear-items': [
     { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Period on Capslock Statement Tshirt for Princess Jecoco.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/BeautyPlus_20200910210324902_save.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Good vibes tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Ankara Polo Tshirts for Burial .jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Girl with an Attitude Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG_20211220_162847_386.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20190312-WA0008.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20220524-WA0023.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/IMG-20240118-WA0026(1).jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Baby Pink Mask Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Real, not Perfect Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Team Ido Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Baby Pink Mask Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Unbothered Statement Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/varsity burial tshirt in honour of her father in law.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Without Music, life would be tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Your Business Guardian Angel Varsity Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/When Women Support Women Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Wife, Mom, CEO Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Weed Graphic Tshirt for Okey Ejibe, Canada.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/Prayer Statement Tshirt.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/This chic loves the good life.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
        { id: 333, imageUrl: `${imageBaseUrl}Tshirt/20th Memorial Tshirt for Late Father.jpg`, altText: 'Graphic T-shirt 1', category: 'Tshirt' },
    ],
};


function App() {
    const [activeGalleryCategory, setActiveGalleryCategory] = useState('Family Milestones');
    const [currentGalleryProducts, setCurrentGalleryProducts] = useState([]);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false); // State for SideNavigation control

    // Effect to update gallery products when active category changes (for homepage gallery)
    useEffect(() => {
        setCurrentGalleryProducts(ALL_PRODUCT_DATA[activeGalleryCategory] || []);
    }, [activeGalleryCategory]);

    // Callback to handle category selection for the main homepage gallery
    const handleGallerySelect = useCallback((category) => {
        if (category !== activeGalleryCategory) {
            setActiveGalleryCategory(category);
        }
        // This line is redundant
        setCurrentGalleryProducts(ALL_PRODUCT_DATA[category] || []);
    }, [activeGalleryCategory]);

    // Determine subtitle for the SectionHeader on the main page
    const getSubtitle = useCallback(() => {
        // Categories for "Shop by Occasion"
        if (['Family Milestones', 'Group Events', 'Corporate Brand', 'Personal Wardrobe'].includes(activeGalleryCategory)) {
            return activeGalleryCategory;
        }
        // Categories for "Ready to Wear"
        if (['Tshirt', 'Loungeset', 'Dresses', 'Accessories'].includes(activeGalleryCategory)) {
            return activeGalleryCategory;
        }
        return null;
    }, [activeGalleryCategory]);

    // WhatsApp order handler
    const handleChatOrder = useCallback((product) => {
        const phoneNumber = '2348037247378'; // Ensure this is your correct WhatsApp number
        const message = encodeURIComponent(`Hello, I'd like to inquire about ordering: ${product.altText} (Product ID: ${product.id}).`);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    }, []);

    // Function to toggle SideNavigation
    const toggleSideNav = useCallback(() => {
        setIsSideNavOpen(prev => !prev);
    }, []);


    // Determine if it's a mobile view to potentially adjust main content layout
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            const mediaQuery = window.matchMedia('(max-width: 768px)');
            setIsMobileView(mediaQuery.matches);

            // Close side nav if it's open and screen resizes to desktop
            if (!mediaQuery.matches && isSideNavOpen) {
                setIsSideNavOpen(false);
            }
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isSideNavOpen]); // Depend on isSideNavOpen to re-evaluate when it changes

    // Control body scroll when side nav is open on mobile
    useEffect(() => {
        if (isSideNavOpen && isMobileView) {
            document.body.style.overflowY = 'hidden'; // Prevent scrolling when side nav is open
        } else {
            document.body.style.overflowY = 'unset'; // Restore scrolling
        }
        return () => {
            document.body.style.overflowY = 'unset'; // Cleanup on unmount
        };
    }, [isSideNavOpen, isMobileView]);


    return (
        <Router>
            <div className="app-container">
                {/* GLOBAL HEADER - Appears on all pages */}
                <Header onMenuClick={toggleSideNav} />

                {/* SideNavigation component - rendered outside the main content flow */}
                <SideNavigation isOpen={isSideNavOpen} onClose={() => setIsSideNavOpen(false)} isMobile={isMobileView} />

                {/* Main content wrapper - conditionally shift it using a CSS class */}
                <div className={`main-content-wrapper ${isSideNavOpen && isMobileView ? 'shifted' : ''}`}>
                    <Routes>
                        {/* Main Landing Page Route */}
                        <Route path="/" element={
                            <>
                                <HeroSection />
                                <CtaBanner />
                                <FilterOptions onCategorySelect={handleGallerySelect} />
                                <main className="main-content">
                                    <SectionHeader
                                        title={
                                            ['Family Milestones', 'Group Events', 'Corporate Brand', 'Personal Wardrobe'].includes(activeGalleryCategory)
                                                ? 'Shop by Occasio/n'
                                                : 'Ready to Wear'
                                        }
                                        subtitle={getSubtitle()}
                                    />
                                    <ImageGallery
                                        products={currentGalleryProducts}
                                        onChatOrder={handleChatOrder}
                                    />
                                </main>
                            </>
                        } />

                        {/* Dynamic Routes for Categories using CategoryProductsPage to render ImageGallery */}
                        {/* NOTE: subCategory in URL (e.g., "family-milestones") must match keys in ALL_PRODUCT_DATA
                            after bei}
                
                       

                        {/* Other Static Routes - Wrapped in <main> for consistent styling */}
                         <Route
                            path="/shop/:subCategory"
                            element={<CategoryProductsPage allProductData={ALL_PRODUCT_DATA} onChatOrder={handleChatOrder} />}
                        />
                        <Route
                            path="/shop" // For the main /shop page without a specific subCategory
                            element={<CategoryProductsPage allProductData={ALL_PRODUCT_DATA} onChatOrder={handleChatOrder} defaultCategory="all-shop-items" />}
                        />
                        <Route path="/checkout" element={<CheckoutPage />} />

                        

                        <Route
                            path="/ready-to-wear/:subCategory"
                            element={<CategoryProductsPage allProductData={ALL_PRODUCT_DATA} onChatOrder={handleChatOrder} />}
                        />

                        

                        <Route
                            path="/ready-to-wear" // For the main /ready-to-wear page without a specific subCategory
                            element={<CategoryProductsPage allProductData={ALL_PRODUCT_DATA} onChatOrder={handleChatOrder} defaultCategory="all-ready-to-wear-items" />}
                        />

                        <Route path="/customize-outfit" element={
                            <main className="main-content">
                                <SectionHeader title="Customize Your Outfit" subtitle="Design your unique style" />
                                <p style={{ textAlign: 'center', marginTop: '30px', fontSize: '1.2em' }}>
                                    Customization options coming soon!
                                </p>
                            </main>
                        } />
                        {/* ABOUT US PAGE */}
                        <Route path="/about" element={<AboutUsPage />} />
                        {/* HOW TO ORDER PAGE */}
                        <Route path="/how-to-order" element={<HowToOrderPage />} />
                        {/* CONTACT US PAGE */}
                        <Route path="/contact" element={<ContactUsPage />} />
                        <Route 
    path="ECommerce" 
    element={
        <ECommercePage 
            // 💥 Pass the new product data here 💥
            initialProducts={ECOMMERCE_PRODUCTS} 
        />
    } 
/>
                        {/* ALUMNI PAGE */}
                        <Route path="/alumni" element={
                            <AlumniPage
                                alumniProducts={ALL_PRODUCT_DATA['Alumni']}
                                onChatOrder={handleChatOrder}
                            />
                        } />
                        {/* DESIGNER PAGE */}
                        <Route path="/designer" element={<DesignerPage />} />
                     
                    </Routes>
                    {/* GLOBAL FOOTER - Appears on all pages */}
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;