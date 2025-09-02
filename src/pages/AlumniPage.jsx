import React, { useState, useEffect } from 'react';

// Expanded mock alumni products data to include a more complete range of years.
const mockAlumniProducts = [
  // FGGC, Calabar products
  { id: 'fggc-96-shirt', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1996', imageUrl: '/alumni/FGGC Benin School Reunion Polo Tshirts Travel Mexico.jpg' },
  { id: 'fggc-97-cap', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1997', imageUrl: '/alumni/FGGC Benin School Reunion Tshirts Trip Travel.jpg' },
  { id: 'fggc-98-mug', name: 'Alumni T-shirt', school: 'FGGC, Calabar', year: '1998', imageUrl: '/alumni/FGGC Owerri Set of 1999 Beach Reunion Tshirts  (1).jpg' },
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
  <header className="bg-white shadow-sm py-4 px-8">
    <nav className="container mx-auto flex justify-between items-center">
     
    </nav>
  </header>
);

// Reusable Footer component for the website.
const Footer = () => (
  <footer className="bg-gray-800 text-white py-8 mt-auto">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 MMABON'. All Rights Reserved.</p>
    </div>
  </footer>
);

// Component to display a single school card for filtering.
const SchoolCard = ({ school, imageUrl, isSelected, onClick }) => (
  <div
    className={`bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300 cursor-pointer ${isSelected ? 'ring-4 ring-red-500' : ''}`}
    onClick={() => onClick(school)}
  >
    <img src={imageUrl} alt={school} className="w-full h-40 object-cover" />
    <div className="p-4 text-center">
      <h3 className="font-semibold text-lg">{school}</h3>
    </div>
  </div>
);

// Component to display year buttons for a selected school.
const YearFilter = ({ years, onSelectYear, selectedYear }) => (
  <div className="flex flex-wrap gap-2 justify-center my-4">
    <button
      onClick={() => onSelectYear('')}
      className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors ${selectedYear === '' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
    >
      All Years
    </button>
    {years.map(year => (
      <button
        key={year}
        onClick={() => onSelectYear(year)}
        className={`py-2 px-4 rounded-full text-sm font-semibold transition-colors ${selectedYear === year ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
      >
        {year}
      </button>
    ))}
  </div>
);

// Component to display the grid of alumni products.
const ImageGallery = ({ products, onChatOrder }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-auto object-cover aspect-square"
            />
            <div className="p-4 text-center relative z-10">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-500 text-sm italic">{product.school} | Class of {product.year}</p>
              <button
                onClick={() => onChatOrder(product)}
                className="mt-4 w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Chat to Order
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No products found for this selection.</p>
      )}
    </div>
  );
};

// Main App component that manages state and renders the full page.
const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(mockAlumniProducts);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  // This useEffect dynamically injects the Tailwind CSS CDN script into the document head.
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tailwindcss.com';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
    const phoneNumber = '234837247378';
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
    <div className="alumni-page-container flex flex-col min-h-screen font-sans bg-gray-100">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative h-96 md:h-[500px] flex items-center justify-center p-4 md:p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/image_e27201.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 animate-fade-in-down">
            MMABON' Alumni Collection
          </h1>
          <p className="text-md md:text-xl font-light mb-8 animate-fade-in-up">
            Welcome to our exclusive collection for Alumni!
          </p>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 md:px-8 py-16">
        {/* School Filter Section (Image Cards) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Select Your School</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="bg-white p-6 rounded-2xl shadow-xl mb-12 max-w-xl mx-auto">
          <p className="text-center text-gray-600 mb-4 font-medium">
            Or, browse our merchandise by filtering using the form below.
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="school-select" className="block text-sm font-medium text-gray-700 mb-1">
                Select School
              </label>
              <select
                id="school-select"
                value={selectedSchool}
                onChange={(e) => handleSchoolChange(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="">All Schools...</option>
                {schools.map(school => (
                  <option key={school.name} value={school.name}>{school.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="year-input" className="block text-sm font-medium text-gray-700 mb-1">
                Year
              </label>
              <input
                type="text"
                id="year-input"
                placeholder="e.g., 2005"
                value={selectedYear}
                onChange={(e) => handleYearChange(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              />
            </div>
          </form>
        </div>

        {/* Year Filter Section (visible only when a school is selected) */}
        {selectedSchool && (
          <div className="bg-white p-6 rounded-2xl shadow-xl mb-12 max-w-xl mx-auto">
            <h3 className="text-lg font-bold text-center mb-4">Select a Class Year for {selectedSchool}</h3>
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
