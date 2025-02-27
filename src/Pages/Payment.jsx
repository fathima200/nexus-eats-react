import React, { useEffect, useState } from 'react'
// import React from 'react'
import { loadCart } from '../../cartUtils'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = loadCart() || [];

    const updatedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
      price: item.price || 0,
      subtotal: (item.price || 0) * (item.quantity || 1),
    }));
    

    setCartItems(updatedCart);

    const total = updatedCart.reduce((sum, item) => sum + item.subtotal, 0);
    setTotalPrice(total);
  }, []);

  const handleBackToCart = () => {
    navigate('/checkout'); // Navigate back to the checkout page
  };
  return (
<div>
  <div className="shopping">
    <h1>Checkout</h1>
  </div>
  <div className="checkout-container">
    <div className="checkout-form">
      <h2>Billing Details</h2>
      <form id="checkoutForm">
        <div className="input-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name" required />
        </div>
        <div className="payment-row">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="address">Shipping Address</label>
          <textarea id="address" placeholder="Enter your address" required defaultValue={""} />
        </div>
        <h2>Payment Details</h2>
        <div className="input-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" placeholder="**** **** **** ****" required />
        </div>
        <div className="payment-row">
          <div className="input-group">
            <label htmlFor="expiry">Expiry Date</label>
            <input type="text" id="expiry" placeholder="MM/YY" required />
          </div>
          <div className="input-group">
            <label htmlFor="cvv">CVV</label>
            <input type="text" id="cvv" placeholder="***" required />
          </div>
        </div>
        <button type="submit" className="checkout-btn">Complete Payment</button>
      </form>
    </div>
    
    <div className="order-summary">
          <h2>Order Summary</h2>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>N{(item.price || 0).toLocaleString()}</td>
                  {/* <td>N{(item.subtotal || 0).toLocaleString()}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            <strong>Total: <span id="total-price">N{(totalPrice || 0).toLocaleString()}</span></strong>
          </p>
          <a onClick={handleBackToCart} className="back-to-cart">← Back to Cart</a>
        </div>
      </div>
    </div>
  );
};

export default Payment;
