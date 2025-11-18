import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ShoppingCart, X, ChevronRight } from 'lucide-react'; 
import './ECommercePage.css'; 

// Define the available categories for the filter tabs
const SHOP_CATEGORIES = ['All', 'Tshirt', 'Loungewear', 'Uniform', 'Dresses', 'Accessories'];

// === FINAL, ROBUST CURRENCY FUNCTION ===
// Uses 'en-US' for reliable comma separation and manually prepends the Naira symbol (₦).
const formatNaira = (amount) => {
    // Ensure the character below is the actual Naira symbol (₦)
    const formattedNumber = amount.toLocaleString('en-US', { minimumFractionDigits: 0 }); 
    return `₦${formattedNumber}`; 
};
// =======================================

export default function ECommercePage({ initialProducts = [] }) {
  // Initialize React Router's navigation hook
  const navigate = useNavigate();
    
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [activeCategory, setActiveCategory] = useState('All'); // State for filtering
  
  // --- Filtering Logic ---
  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') {
      return initialProducts;
    }
    // Filters products based on the selected category
    return initialProducts.filter(product => 
      product.category === activeCategory
    );
  }, [initialProducts, activeCategory]);

  // --- Cart Management Functions ---
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setIsSidebarOpen(true); 
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };
  
  const cartTotal = useMemo(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  // --- Checkout Handler (uses navigate) ---
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add an item to checkout.");
      return;
    }
    // Optionally close sidebar
    setIsSidebarOpen(false); 
    
    // Redirect to the CheckoutPage component
    navigate('/checkout');
  };

  // --- Rendered Component UI ---
  return (
    <div className="ecom-main-layout">
      
      {/* --- Floating Cart Button --- */}
      <button 
        className="floating-cart-btn" 
        onClick={() => setIsSidebarOpen(true)}
      >
        <ShoppingCart size={20} />
        <span className="cart-count">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
      </button>
      
      {/* --- Category Filter Tabs --- */}
      <div className="category-filter-tabs">
        {SHOP_CATEGORIES.map(category => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* --- Main Product Grid --- */}
      <div className="ecom-product-grid">
        <h2>Shop Our {activeCategory === 'All' ? 'Products' : activeCategory}</h2>
        
        <div className="product-list-container">
          {/* MAPPING OVER THE FILTERED DATA */}
          {filteredProducts.map(product => ( 
            <div key={product.id} className="product-card">
              
              {/* Image Display Section */}
              <div className="product-image-placeholder">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="product-image-visible" 
                />
              </div>

              <div className="product-info">
                <h3 className="product-title">{product.name}</h3>
                
                <div className="product-price-section">
                  {/* Product Price Display */}
                  <span className="current-price">{formatNaira(product.price)}</span>
                  <span className="price-checkout-hint">()</span>
                </div>
              </div>
              
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                <ShoppingCart size={16} /> Add to Cart
              </button>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <p className="no-products-message">No {activeCategory} products found at this time.</p>
        )}
      </div>

      {/* --- Shopping Cart Sidebar --- */}
      <div className={`cart-sidebar ${isSidebarOpen ? 'is-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Your Cart</h3>
          <button onClick={() => setIsSidebarOpen(false)} className="close-btn">
            <X size={24} />
          </button>
        </div>

        {/* Cart Content based on cart state */}
        {cart.length === 0 ? (
          <div className="empty-cart-message">
            <ShoppingCart size={48} color="#ccc" />
            <p>Your shopping cart is empty!</p>
          </div>
        ) : (
          <ul className="cart-items-list">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                    <span className="item-qty">{item.quantity}x</span>
                    <span className="item-name">{item.name}</span>
                    {/* Use formatNaira for subtotal */}
                    <span className="item-subtotal">{formatNaira(item.price * item.quantity)}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-item-btn">
                  <X size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Cart Footer and Checkout */}
        <div className="sidebar-footer">
            <div className="cart-summary-total">
                <span>TOTAL:</span>
                {/* Use formatNaira for total amount */}
                <span className="total-amount">{formatNaira(cartTotal)}</span>
            </div>
            
            <button 
                className="checkout-btn-sidebar"
                onClick={handleCheckout} 
                disabled={cart.length === 0}
            >
                Proceed to Checkout <ChevronRight size={18} />
            </button>
        </div>
      </div>
  	
      {/* Backdrop for the sidebar */}
      {isSidebarOpen && <div className="cart-backdrop" onClick={() => setIsSidebarOpen(false)}></div>}
    </div>
  );
}