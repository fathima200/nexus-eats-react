import React, { useState, useEffect } from "react";
import { useNavigate , useParams } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [meal, setMeals] = useState(null);
  const {id} = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, [id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(meal);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/checkout");
  };

  if (!meal) return <p>Loading...</p>;

  return (
    
    <div className="checkout">
      <h1>Your Orders</h1>
      <div className="image-container">
        <img className="cartimage" src={meal.image} alt={meal.name} />
      </div>
      <div className="details-container">
        <h1>{meal.name}</h1>
        <p className="price">N{meal.price}</p>
        <p className="description">{meal.description}</p>

        <p className="select">Select your size</p>
        <button className="butoon">Small</button>
        <button className="butoon">Medium</button>
        <button className="butoon">Large</button>

        <br />
        <label htmlFor="qty">Qty:</label>
        <input type="number" id="qty" name="qty" min={1} defaultValue={1} />

        <button className="cart" onClick={handleAddToCart}>Add to Cart</button>
        <button className="cart" onClick={() => navigate("/#menu")}>Continue Shopping</button>
      </div>
    </div>
  );
};


export default Orders;

