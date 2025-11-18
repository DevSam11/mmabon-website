import React, { useState, useEffect } from 'react';
// 💥 IMPORTANT: Import the new CSS file here
import './AlumniPage.css'; 

// Expanded mock alumni products data to include a more complete range of years.
const mockAlumniProducts = [
  // FGGC, Calabar products
  { id: 'fggc-96-shirt', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1996', imageUrl: '/alumni/FGGC Benin School Reunion Polo Tshirts Travel Mexico.jpg' },
  { id: 'fggc-97-cap', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1997', imageUrl: '/alumni/FGGC Benin School Reunion Tshirts Trip Travel.jpg' },
  { id: 'fggc-98-mug', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1998', imageUrl: '/alumni/FGGC Owerri Set of 1999 Beach Reunion Tshirts  (1).jpg' },
  { id: 'fggc-99-hoodie', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1999', imageUrl: '/alumni/FGGC Owerri Set of 1999 Beach Reunion Tshirts .jpg' },
  { id: 'fggc-00-jacket', name: '', school: 'FGGC, Calabar', year: '2000', imageUrl: '/alumni/FGGC School Reunion Tshirts Polo.jpg' },
  { id: 'fggc-01-tote', name: '', school: 'FGGC, Calabar', year: '2001', imageUrl: '/alumni/FGGC Set of 1999 Reunion Tshirts .jpg' },
  { id: 'fggc-02-polo', name: '', school: 'FGGC, Calabar', year: '2002', imageUrl: '/alumni/image (1).jpg' },
  { id: 'fggc-03-hoodie', name: '', school: 'FGGC, Calabar', year: '2003', imageUrl: '/alumni/image.jpg' },
  { id: 'fggc-04-jacket', name: '', school: 'FGGC, Calabar', year: '2004', imageUrl: '/alumni/IMG-20221113-WA0074.jpg' },
  { id: 'fggc-05-jacket', name: '', school: 'FGGC, Calabar', year: '2005', imageUrl: '/alumni/manjiime-___2970595110746498147___-2.jpg' },
  { id: 'fggc-06-hoodie', name: '', school: 'FGGC, Calabar', year: '2006', imageUrl: '/alumni/manjiime-___2970595110746498147___-3.jpg' },
  { id: 'fggc-07-mug', name: '', school: 'FGGC, Calabar', year: '2007', imageUrl: '/alumni/Mother of the Graduate Tshirt .jpg' },
  { id: 'fggc-08-tracksuit', name: '', school: 'FGGC, Calabar', year: '2008', imageUrl: '/alumni/Priory Prep Kids Graduation Tshirts.jpg' },
  { id: 'fggc-09-polo', name: '', school: 'FGGC, Calabar', year: '2009', imageUrl: '/alumni/Priory Prep Parents Graduation Tshirts.jpg' },
  { id: 'fggc-10-tote', name: '', school: 'FGGC, Calabar', year: '2010', imageUrl: '/alumni/School Reunion Alumni Tshirts.jpg' },
  { id: 'fggc-11-pin', name: '', school: 'FGGC, Calabar', year: '2011', imageUrl: '/alumni/School Reunion Dubai Trip Tshirts.jpg' },
  { id: 'fggc-12-hoodie', name: '', school: 'FGGC, Calabar', year: '2012', imageUrl: '/alumni/School Reunion Tshirts.jpg' },
  { id: 'fggc-13-jacket', name: '', school: 'FGGC, Calabar', year: '2013', imageUrl: '/alumni/Team More Group 3_4 Sleeve Tshirts.jpg' },
  { id: 'fggc-14-tote', name: '', school: 'FGGC, Calabar', year: '2014', imageUrl: '/alumni/WIS Reunion Tshirts.jpg' },
  { id: 'fggc-15-tracksuit', name: '', school: 'FGGC, Calabar', year: '2015', imageUrl: '/alumni/Team More Group Tshirts.jpg' },

  // FGC, Ikom products
  { id: 'fgc-96-cap', name: '', school: 'FGC, Ikom', year: '1996', imageUrl: '/alumni/IMG-20221113-WA0082.jpg' },
  { id: 'fgc-97-shirt', name: '', school: 'FGC, Ikom', year: '1997', imageUrl: '/alumni/manjiime-___2970595110746498147___-2.jpg' },
  { id: 'fgc-98-tracksuit', name: '', school: 'FGC, Ikom', year: '1998', imageUrl: '/alumni/Priory Prep Kids Graduation Tshirts.jpg' },
  { id: 'fgc-99-mug', name: '', school: 'FGC, Ikom', year: '1999', imageUrl: '/alumni/Priory Prep Parents Graduation Tshirts.jpg' },
  { id: 'fgc-00-hoodie', name: '', school: 'FGC, Ikom', year: '2000', imageUrl: '/alumni/School Reunion Alumni Tshirts.jpg' },
  { id: 'fgc-01-jacket', name: '', school: 'FGC, Ikom', year: '2001', imageUrl: '/alumni/School Reunion Dubai Trip Tshirts.jpg' },
  { id: 'fgc-02-hoodie', name: '', school: 'FGC, Ikom', year: '2002', imageUrl: '/alumni/School Reunion Tshirts.jpg' },
  { id: 'fgc-03-tote', name: '', school: 'FGC, Ikom', year: '2003', imageUrl: '/alumni/Team More Group 3_4 Sleeve Tshirts.jpg' },
  { id: 'fgc-04-polo', name: '', school: 'FGC, Ikom', year: '2004', imageUrl: '/alumni/Team More Group Tshirts (1).jpg' },
  { id: 'fgc-05-jacket', name: '', school: 'FGC, Ikom', year: '2005', imageUrl: '/alumni/Team More Group Tshirts.jpg' },
  { id: 'fgc-06-mug', name: '', school: 'FGC, Ikom', year: '2006', imageUrl: '/alumni/WIS Reunion Tshirts.jpg' },
  { id: 'fgc-07-tracksuit', name: '', school: 'FGC, Ikom', year: '2007', imageUrl: '/alumni/FGGC Set of 1999 Reunion Tshirts .jpg' },
  { id: 'fgc-08-mug', name: '', school: 'FGC, Ikom', year: '2008', imageUrl: '/alumni/FGGC School Reunion Tshirts Polo.jpg' },
  { id: 'fgc-09-hoodie', name: '', school: 'FGC, Ikom', year: '2009', imageUrl: '/alumni/FGGC Owerri Set of 1999 Beach Reunion Tshirts .jpg' },
  { id: 'fgc-10-tote', name: '', school: 'FGC, Ikom', year: '2010', imageUrl: 'https://placehold.co/400x400/94a3b8/000?text=FGC+2010+Tote' },
  { id: 'fgc-11-shirt', name: '', school: 'FGC, Ikom', year: '2011', imageUrl: 'https://placehold.co/400x400/f87171/FFF?text=FGC+2011+Polo' },
  { id: 'fgc-12-jacket', name: '', school: 'FGC, Ikom', year: '2012', imageUrl: 'https://placehold.co/400x400/1e293b/FFF?text=FGC+2012+Jacket' },
  { id: 'fgc-13-hoodie', name: '', school: 'FGC, Ikom', year: '2013', imageUrl: 'https://placehold.co/400x400/365314/FFF?text=FGC+2013+Hoodie' },
  { id: 'fgc-14-jacket', name: '', school: 'FGC, Ikom', year: '2014', imageUrl: 'https://placehold.co/400x400/1e293b/FFF?text=FGC+2014+Jacket' },
  { id: 'fgc-15-mug', name: '', school: 'FGC, Ikom', year: '2015', imageUrl: 'https://placehold.co/400x400/292524/FFF?text=FGC+2015+Mug' },

  // USS, Odo-Ere products
  { id: 'uss-96-tote', name: '', school: 'FGC, Benin', year: '1996', imageUrl: '/alumni/FGGC Benin School Reunion Tshirts Trip Travel.jpg' },
  { id: 'uss-97-shirt', name: 'T-shirt', school: 'USS, Odo-Ere', year: '1997', imageUrl: 'https://plld.co/400x400/be185d/FFF?text=USS+1997+Shirt' },
  { id: 'uss-98-hoodie', name: '', school: 'USS, Odo-Ere', year: '1998', imageUrl: 'https://placehold.co/400x400/f87171/FFF?text=USS+1998+Hoodie' },
  { id: 'uss-99-jacket', name: '', school: 'USS, Odo-Ere', year: '1999', imageUrl: 'https://placehold.co/400x400/365314/FFF?text=USS+1999+Jacket' },
  { id: 'uss-00-mug', name: '', school: 'USS, Odo-Ere', year: '2000', imageUrl: 'https://placehold.co/400x400/292524/FFF?text=USS+2000+Mug' },
  { id: 'uss-01-cap', name: '', school: 'USS, Odo-Ere', year: '2001', imageUrl: 'https://placehold.co/400x400/1e293b/FFF?text=USS+2001+Cap' },
  { id: 'uss-02-shirt', name: '', school: 'USS, Odo-Ere', year: '2002', imageUrl: 'https://placehold.co/400x400/be185d/FFF?text=USS+2002+Polo' },
  { id: 'uss-03-hoodie', name: '', school: 'USS, Odo-Ere', year: '2003', imageUrl: 'https://placehold.co/400x400/94a3b8/000?text=USS+2003+Hoodie' },
  { id: 'uss-04-jacket', name: '', school: 'USS, Odo-Ere', year: '2004', imageUrl: 'https://placehold.co/400x400/f87171/FFF?text=USS+2004+Jacket' },
  { id: 'uss-05-tote', name: '', school: 'USS, Odo-Ere', year: '2005', imageUrl: 'https://placehold.co/400x400/292524/FFF?text=USS+2005+Tote' },
  { id: 'uss-06-mug', name: '', school: 'USS, Odo-Ere', year: '2006', imageUrl: 'https://placehold.co/400x400/365314/FFF?text=USS+2006+Mug' },
  { id: 'uss-07-pin', name: '', school: 'USS, Odo-Ere', year: '2007', imageUrl: 'https://placehold.co/400x400/1e293b/FFF?text=USS+2007+Pin+Set' },
  { id: 'uss-08-shirt', name: '', school: 'USS, Odo-Ere', year: '2008', imageUrl: 'https://placehold.co/400x400/be185d/FFF?text=USS+2008+Shirt' },
  { id: 'uss-09-tracksuit', name: '', school: 'USS, Odo-Ere', year: '2009', imageUrl: 'https://placehold.co/400x400/94a3b8/000?text=USS+2009+Tracksuit' },
  { id: 'uss-10-pin', name: '', school: 'USS, Odo-Ere', year: '2010', imageUrl: 'https://placehold.co/400x400/be185d/FFF?text=USS+2010+Pin+Set' },
  { id: 'uss-11-hoodie', name: '', school: 'USS, Odo-Ere', year: '2011', imageUrl: 'https://placehold.co/400x400/292524/FFF?text=USS+2011+Hoodie' },
  { id: 'uss-12-tote', name: '', school: 'USS, Odo-Ere', year: '2012', imageUrl: 'https://placehold.co/400x400/94a3b8/000?text=USS+2012+Tote' },
  { id: 'uss-13-shirt', name: '', school: 'USS, Odo-Ere', year: '2013', imageUrl: 'https://placehold.co/400x400/f87171/FFF?text=USS+2013+Shirt' },
  { id: 'uss-14-jacket', name: '', school: 'USS, Odo-Ere', year: '2014', imageUrl: 'https://placehold.co/400x400/365314/FFF?text=USS+2014+Jacket' },
  { id: 'uss-15-mug', name: '', school: 'USS, Odo-Ere', year: '2015', imageUrl: 'https://placehold.co/400x400/292524/FFF?text=USS+2015+Mug' },
];

// Reusable Header component for the website.
const Header = () => (
  <header className="app-header">
    <nav className="container app-header-nav">
     
    </nav>
  </header>
);

// Reusable Footer component for the website.
const Footer = () => (
  <footer className="app-footer">
    <div className="container">
      <p>&copy; 2024 MMABON'. All Rights Reserved.</p>
    </div>
  </footer>
);

// Component to display a single school card for filtering.
const SchoolCard = ({ school, imageUrl, isSelected, onClick }) => (
  <div
    className={`school-card ${isSelected ? 'selected' : ''}`}
    onClick={() => onClick(school)}
  >
    <img src={imageUrl} alt={school} className="school-card-image" />
    <div className="school-card-content">
      <h3 className="">{school}</h3>
    </div>
  </div>
);

// Component to display year buttons for a selected school.
const YearFilter = ({ years, onSelectYear, selectedYear }) => (
  <div className="year-filter-buttons">
    <button
      onClick={() => onSelectYear('')}
      className={selectedYear === '' ? 'selected' : ''}
    >
      All Years
    </button>
    {years.map(year => (
      <button
        key={year}
        onClick={() => onSelectYear(year)}
        className={selectedYear === year ? 'selected' : ''}
      >
        {year}
      </button>
    ))}
  </div>
);

// Component to display the grid of alumni products.
const ImageGallery = ({ products, onChatOrder }) => {
  return (
    <div className="image-gallery-grid">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product-card">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="product-card-image"
            />
            <div className="product-card-content">
              <h3>{product.name}</h3>
              <p>{product.school} | Class of {product.year}</p>
              <button
                onClick={() => onChatOrder(product)}
                className="chat-order-button"
              >
                Chat to Order
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-products-message">No products found for this selection.</p>
      )}
    </div>
  );
};

// Main App component that manages state and renders the full page.
const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockAlumniProducts);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // Effect to filter products based on selected school and year.
  useEffect(() => {
    let newFilteredProducts = mockAlumniProducts;

    if (selectedSchool) {
      newFilteredProducts = newFilteredProducts.filter(p => p.school === selectedSchool);
    }

    if (selectedYear) {
      newFilteredProducts = newFilteredProducts.filter(p => p.year === selectedYear);
    }
    
    setFilteredProducts(newFilteredProducts);
  }, [selectedSchool, selectedYear]);

  // Handler for school selection from either the card or the dropdown.
  const handleSchoolChange = (schoolName) => {
    setSelectedSchool(schoolName);
    setSelectedYear(''); // Reset year filter when school changes.
  };

  // Handler for year selection from either the buttons or the input field.
  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  // Handler for the "Chat to Order" button.
  const onChatOrder = (item) => {
    // You can replace '234XXXXXXXXXX' with your actual WhatsApp phone number
    const phoneNumber = '2348037247378';
    // Create a pre-filled message with product details
    const message = `Hello, I would like to order the ${item.name} for ${item.school}, Class of ${item.year}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        
    // Open the WhatsApp link in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Get unique schools and their placeholder images.
  const schools = [...new Set(mockAlumniProducts.map(p => p.school))].map(schoolName => ({
    name: schoolName,
    imageUrl: mockAlumniProducts.find(p => p.school === schoolName)?.imageUrl,
  }));

  // Get unique years for the selected school.
  const years = selectedSchool
    ? [...new Set(mockAlumniProducts.filter(p => p.school === selectedSchool).map(p => p.year))].sort()
    : [];

  return (
    <div className="alumni-page-container">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/image_e27201.jpg')",
        }}
      >
        <div className="hero-content">
          <h1 className="">
            MMABON' Alumni Collection
          </h1>
          <p className="">
            Welcome to our exclusive collection for Alumni!
          </p>
        </div>
      </section>

      <main className="main-content container">
        {/* School Filter Section (Image Cards) */}
        <div className="school-filter-section">
          <h2 className="section-title">Select Your School</h2>
          <div className="school-cards-grid">
            {schools.map(school => (
              <SchoolCard
                key={school.name}
                school={school.name}
                imageUrl={school.imageUrl}
                isSelected={selectedSchool === school.name}
                onClick={handleSchoolChange}
              />
            ))}
          </div>
        </div>

        {/* Original Filter Section (Dropdown & Input) */}
        <div className="general-filter-container">
          <p className="filter-description">
            Or, browse our merchandise by filtering using the form below.
          </p>
          <form className="filter-form">
            <div>
              <label htmlFor="school-select" className="filter-form-label">
                Select School
              </label>
              <select
                id="school-select"
                value={selectedSchool}
                onChange={(e) => handleSchoolChange(e.target.value)}
                className="filter-form-select"
              >
                <option value="">All Schools...</option>
                {schools.map(school => (
                  <option key={school.name} value={school.name}>{school.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year-input" className="filter-form-label">
                Year
              </label>
              <input
                type="text"
                id="year-input"
                placeholder="e.g., 2005"
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="filter-form-input"
              />
            </div>
          </form>
        </div>

        {/* Year Filter Section (visible only when a school is selected) */}
        {selectedSchool && (
          <div className="general-filter-container">
            <h3 className="section-title">Select a Class Year for {selectedSchool}</h3>
            <YearFilter years={years} onSelectYear={handleYearChange} selectedYear={selectedYear} />
          </div>
        )}

        {/* Display Alumni products using the ImageGallery component. */}
        <ImageGallery products={filteredProducts} onChatOrder={onChatOrder} />
      </main>

      <Footer />
    </div>
  );
};

export default App;