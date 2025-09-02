// src/pages/AboutUsPage.jsx
import React from 'react';
import SectionHeader from '../components/SectionHeader';
import './AboutUsPage.css';

function AboutUsPage() {
  return (
    <main className="main-content">
      <SectionHeader title="About Us" />

      <section className="about-us-content">
        <div className="about-section intro-section"> {/* Added intro-section class */}
          <h2>Welcome to MMABON – Where Fashion Meets Customization</h2>
          <p>At MMABON, we believe fashion should never be generic. Founded by a fashion enthusiast and entrepreneur, our brand was born out of a passion for individuality. We’re here for those who refuse to blend in — because your style should reflect your personality, not someone else’s.</p>
          <p>What started as a simple idea has grown into a bold movement. We specialize in relaxed, customizable apparel that celebrates authenticity, inclusivity, and self-expression. Today, MMABON is more than a brand — it’s a community united by creativity and confidence.</p>
        </div>

        <div className="about-section mission-section"> {/* Added mission-section class */}
          <h2>Our Mission</h2>
          <p>To revolutionize everyday fashion through cutting-edge custom apparel solutions that fuse technology, creativity, and inclusivity.</p>
          <p>We aim to deliver a seamless, personalized experience from design to doorstep — and build lasting relationships with every customer.</p>
        </div>

        <div className="about-section values-section">
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Self-Expression:</strong> We believe fashion is a powerful tool for identity and empowerment.</li>
            <li><strong>Inclusivity:</strong> We embrace diversity and create designs that fit all styles, sizes, and backgrounds.</li>
            <li><strong>Creativity:</strong> We innovate relentlessly to bring fresh, unique styles to life.</li>
            <li><strong>Quality:</strong> We’re committed to premium craftsmanship and exceeding expectations.</li>
            <li><strong>Teamwork:</strong> We work together to create exceptional results.</li>
            <li><strong>Customer-Centricity:</strong> You’re at the heart of everything we do.</li>
          </ul>
        </div>

        <div className="about-section offer-section">
          <h2>What We Offer</h2>
          <p>We provide a wide range of custom and ready-to-wear apparel solutions, from design to delivery.</p>
          <ul>
            <li>Custom Apparel</li>
            <li>Ready to Wear</li>
            <li>Apparel Printing</li>
            <li>Branded Accessories</li>
            <li>Design Services</li>
            <li>Brand Merchandising</li>
            <li>Reseller DTF Prints</li>
          </ul>
        </div>

        <div className="about-section approach-section">
          <h2>Our Approach</h2>
          <p>We merge creativity, technology, and craftsmanship to bring your vision to life through:</p>
          <h3>Design Innovation</h3>
          <ul>
            <li>Trend research & creative consulting</li>
            <li>Professional graphic design</li>
            <li>Personal style guidance</li>
          </ul>
          <h3>Tailored Craftsmanship</h3>
          <ul>
            <li>Expert pattern drafting</li>
            <li>Precision sewing & detailing</li>
            <li>Quality inspection at every step</li>
          </ul>
          <h3>Expert Printing Techniques</h3>
          <ul>
            <li>Direct-to-Film (DTF)</li>
            <li>Sublimation</li>
            <li>Embroidery</li>
            <li>Flex, Flock & Glitter Vinyl</li>
            <li>Rhinestones</li>
          </ul>
          <h3>Premium Fabrics</h3>
          <ul>
            <li>Single Jersey & Rib</li>
            <li>Cotton Pique</li>
            <li>Polyester Jerseys</li>
            <li>Shirt Cotton</li>
            <li>Poly Cotton Blends</li>
            <li>Chinos</li>
          </ul>
        </div>

        <div className="about-section why-choose-us-section">
          <h2>Why Choose MMABON?</h2>
          <h3>Flexible Customization</h3>
          <p>We prioritize flexibility to meet your unique needs.</p>
          <p>With:</p>
          <ul>
            <li>Unlimited Design Options</li>
            <li>Premium Quality</li>
            <li>Smooth, Personalized Ordering Experience</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default AboutUsPage;