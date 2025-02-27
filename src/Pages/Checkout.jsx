import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadCart, clearCart } from '../../cartUtils';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  const calculateTotal = (cart) => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  };

  useEffect(() => {
    const cart = loadCart();
    
    const updatedCart = cart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
      subtotal: (item.price || 0) * (item.quantity || 1),
    }));

    setCartItems(updatedCart);
    setTotalPrice(calculateTotal(updatedCart));  
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    setTotalPrice(calculateTotal(updatedCart));  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
    setTotalPrice(0);
  };

  const handleProceedToCheckout = () => {
    navigate('/Payment');
  };

  return (
    <div>
      <section className="main">
        <div className="shopping">
          <h1>Shopping Cart</h1>
          <a href="/" className="continue-shopping">
            Continue Shopping
          </a>
        </div> 
        <main>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Sub Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="cart-items">
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={`../images/${item.image}`} className="cart-image" alt={item.name} /></td>
                  <td>{item.name}</td>
                  <td>N{(item.price || 0).toLocaleString()}</td>
                  <td>{item.quantity}</td>
                  <td>N{(item.subtotal).toLocaleString()}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleRemoveItem(item.id)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-summary">
            <h2>Total: N{(totalPrice || 0).toLocaleString()}</h2>  
            <button className="clear-cart" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className="checkoutt" onClick={handleProceedToCheckout}>
              Proceed to Checkout
            </button> 
          </div>
        </main>
      </section>
    </div>
  );
};

export default Checkout;
