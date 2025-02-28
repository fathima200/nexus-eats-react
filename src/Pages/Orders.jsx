import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const [meal, setMeals] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/meals/${id}`)
      .then((response) => response.json())
      .then((data) => setMeals(data.data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(meal);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/checkout");
  };

  const imageUrl = `/${meal?.profileImage}`;

  if (!meal) return <p>Loading...</p>;

  return (
    
    <div className="checkout">
      <div className="image-container">
        <img src={imageUrl || ""} className="cartimage" alt={meal.name} />
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

        <button className="ccarrt" onClick={handleAddToCart}>
          Add to Cart
        </button>
        <button className="ccarrt" onClick={() => navigate("/#menu")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Orders;
