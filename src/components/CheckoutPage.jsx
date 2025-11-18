import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CheckoutPage.css';

// Mock data for the cart (you will replace this with actual state)
const mockCartItems = [
  { id: 1, name: "FGGC Calabar '98 Hoodie", price: 150.00, quantity: 1, image: "/alumni/fggc-hoodie.jpg" },
  { id: 2, name: "Custom T-shirt Design", price: 75.00, quantity: 2, image: "/alumni/custom-tee.jpg" },
];

const SHIPPING_COST = 15.00;
const TAX_RATE = 0.05; // 5%

const calculateTotals = (items) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_COST;
  return { subtotal, tax, total };
};

const totals = calculateTotals(mockCartItems);

// --- Component for the Checkout Steps ---
const steps = [
  { id: 1, title: 'Shipping' },
  { id: 2, title: 'Payment' },
  { id: 3, title: 'Review' },
];

const CheckoutSteps = ({ currentStep }) => (
  <div className="checkout-steps">
    {steps.map((step) => (
      <div 
        key={step.id} 
        className={`step-item ${currentStep === step.id ? 'active' : ''} ${currentStep > step.id ? 'completed' : ''}`}
      >
        <div className="step-circle">{step.id}</div>
        <div className="step-title">{step.title}</div>
      </div>
    ))}
  </div>
);

// --- Component for the Cart/Order Summary Sidebar ---
const OrderSummary = ({ items, totals }) => (
  <div className="order-summary-card">
    <h3 className="summary-title">Order Summary</h3>
    
    {/* Item List */}
    <div className="summary-items-list">
      {items.map(item => (
        <div key={item.id} className="summary-item">
          <img src={item.image} alt={item.name} className="summary-item-image" />
          <div className="summary-item-details">
            <p className="summary-item-name">{item.name}</p>
            <p className="summary-item-qty">Qty: {item.quantity}</p>
          </div>
          <p className="summary-item-price">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </div>
    
    {/* Breakdown */}
    <div className="summary-breakdown">
      <div className="breakdown-row">
        <span>Subtotal</span>
        <span>${totals.subtotal.toFixed(2)}</span>
      </div>
      <div className="breakdown-row">
        <span>Shipping</span>
        <span>${SHIPPING_COST.toFixed(2)}</span>
      </div>
      <div className="breakdown-row">
        <span>Taxes ({(TAX_RATE * 100).toFixed(0)}%)</span>
        <span>${totals.tax.toFixed(2)}</span>
      </div>
    </div>
    
    {/* Total */}
    <div className="summary-total">
      <span className="total-label">Order Total</span>
      <span className="total-amount">${totals.total.toFixed(2)}</span>
    </div>
    
  </div>
);

// --- Main Checkout Forms (Step 1: Shipping) ---
const ShippingForm = ({ onNext }) => (
  <div className="checkout-form-content">
    <h2>1. Shipping Information</h2>
    <div className="form-grid">
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" placeholder="you@example.com" required />
      </div>
      <div className="form-group">
        <label htmlFor="country">Country</label>
        <select id="country" required>
          <option value="">Select...</option>
          <option value="NG">Nigeria</option>
          <option value="US">United States</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" required />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" required />
      </div>
      <div className="form-group full-width">
        <label htmlFor="address">Address Line 1</label>
        <input type="text" id="address" required />
      </div>
      <div className="form-group full-width">
        <label htmlFor="address2">Address Line 2 (Optional)</label>
        <input type="text" id="address2" />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" id="city" required />
      </div>
      <div className="form-group">
        <label htmlFor="zip">Postal/Zip Code</label>
        <input type="text" id="zip" required />
      </div>
    </div>
    <button onClick={onNext} className="btn-primary form-action-button">
      Continue to Payment
    </button>
  </div>
);

// --- Main Checkout Forms (Step 2: Payment) ---
const PaymentForm = ({ onNext, onBack }) => (
  <div className="checkout-form-content">
    <h2>2. Payment Method</h2>
    <div className="payment-options">
      <div className="payment-option selected">
        <input type="radio" id="card" name="paymentMethod" value="card" defaultChecked />
        <label htmlFor="card">Credit/Debit Card</label>
        {/* Placeholder for card logos */}
        <div className="card-logos">
            <span>Visa</span><span>Mastercard</span>
        </div>
      </div>
      <div className="payment-option">
        <input type="radio" id="paypal" name="paymentMethod" value="paypal" />
        <label htmlFor="paypal">Paypal / Stripe (External)</label>
      </div>
    </div>

    <div className="form-grid">
      <div className="form-group full-width">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" required />
      </div>
      <div className="form-group">
        <label htmlFor="cardName">Name on Card</label>
        <input type="text" id="cardName" required />
      </div>
      <div className="form-group">
        <label htmlFor="expiry">Expiry Date (MM/YY)</label>
        <input type="text" id="expiry" placeholder="MM/YY" required />
      </div>
      <div className="form-group">
        <label htmlFor="cvc">CVC</label>
        <input type="text" id="cvc" placeholder="xxx" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" required />
      </div>
    </div>
    
    <div className="form-actions">
      <button onClick={onBack} className="btn-secondary">
        ← Back to Shipping
      </button>
      <button onClick={onNext} className="btn-primary form-action-button">
        Review Order
      </button>
    </div>
  </div>
);

// --- Main Checkout Forms (Step 3: Review) ---
const ReviewForm = ({ onFinalize, onBack }) => (
  <div className="checkout-form-content">
    <h2>3. Review & Place Order</h2>
    
    <div className="review-section">
      <h3>Shipping to:</h3>
      <p>John Doe</p>
      <p>123 Main St, Apt 4B</p>
      <p>Lagos, 100001, Nigeria</p>
      <Link to="/edit-shipping" className="edit-link">Edit Shipping</Link>
    </div>

    <div className="review-section">
      <h3>Payment Method:</h3>
      <p>Visa ending in **** 4567</p>
      <Link to="/edit-payment" className="edit-link">Edit Payment</Link>
    </div>

    <div className="form-actions">
      <button onClick={onBack} className="btn-secondary">
        ← Back to Payment
      </button>
      <button onClick={onFinalize} className="btn-primary form-action-button">
        Place Order (${totals.total.toFixed(2)})
      </button>
    </div>
  </div>
);


// --- Main CheckoutPage Component ---
const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalize = () => {
    alert("Order Placed Successfully!");
    // In a real app, you would submit the data to the server here
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return <ShippingForm onNext={handleNext} />;
      case 2:
        return <PaymentForm onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <ReviewForm onFinalize={handleFinalize} onBack={handleBack} />;
      default:
        return <ShippingForm onNext={handleNext} />;
    }
  };

  return (
    <div className="checkout-page-container">
      <div className="checkout-header-bar">
        <h1>MMABON' Checkout</h1>
        <Link to="/cart" className="back-to-cart-link">Back to Cart</Link>
      </div>
      <div className="checkout-main-grid">
        
        {/* Left Column: Form Steps */}
        <div className="checkout-form-column">
          <CheckoutSteps currentStep={currentStep} />
          <div className="checkout-form-wrapper">
            {renderFormStep()}
          </div>
        </div>
        
        {/* Right Column: Order Summary */}
        <div className="checkout-summary-column">
          <OrderSummary items={mockCartItems} totals={totals} />
        </div>
        
      </div>
    </div>
  );
};

export default CheckoutPage;