import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { addToCart } from '../../../cartUtils';
// import rice from "../../../upLoads/Pncakes.png"

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const payload = {
      _id: "1",
      name: "Pancakes with Honey & Fried Plantain",
      price: 5000,
      profileImage: "../../../upLoads/Pncakes.png",
      description: "Grilled chicken on a bed of greens, tomatoes, and avocado, drizzled with a Nigerian dressing.",
      category: "Popular Breakfast"
    }
    // fetch("createMeal" , payload)
    fetch('/meals')
      .then((response) => response.json())
      .then((data) => setMeals(data.data))
      .catch((error) => console.error('Error fetching meals:', error));
  }, []);

  const handleOrderNow = (meal) => {
    navigate(`/orders/${meal._id}`);
  };

  return (
    <div>
      {/* <img src={rice} alt="" /> */}
      <div className="menu-container">
        <h1 id="menu">Menu</h1>
        <div className="categories">
          <button className="active">All</button>
          <button>Popular Breakfast</button>
          <button>Special Lunch</button>
          <button>Lovely Dinner</button>
        </div>
      </div>
      <section id="Menu" className="menu">
        <h1 className="pb">-----Popular Breakfast-----</h1>
        <div className="menuu-container">
          {meals
            .filter((meal) => meal.category === "Popular Breakfast")
            .map((meal) => (
              <div key={meal._id} className="menu-card">
                <img src={meal.profileImage || ""} alt={meal.name} />
                <div className="menu-info">
                  <h3>{meal.name}</h3>
                  <p>{meal.description}</p>
                  <span>N{meal.price}</span>
                  <button onClick={() => handleOrderNow(meal)}>Order Now</button>
                </div>
              </div>
            ))}
        </div>
        <h1 id="Special-Lunch" className="pb">------Special Lunch------</h1>
        <div className="menuu-container">
          {meals
            .filter((meal) => meal.category === "Special Lunch")
            .map((meal) => (
              <div key={meal._id} className="menu-card">
                <img src={meal.profileImage || ""} alt={meal.name} />
                <div className="menu-info">
                  <h3>{meal.name}</h3>
                  <p>{meal.description}</p>
                  <span>N{meal.price}</span>
                  <button onClick={() => handleOrderNow(meal)}>Order Now</button>
                </div>
              </div>
            ))}
        </div>
        <h1 className="pb">-----Lovely Dinner-----</h1>
        <div className="menuu-container">
          {meals
            .filter((meal) => meal.category === "Lovely Dinner")
            .map((meal) => (
              <div key={meal._id} className="menu-card">
                <img src={meal.profileImage || ""} alt={meal.name} />
                <div className="menu-info">
                  <h3>{meal.name}</h3>
                  <p>{meal.description}</p>
                  <span>N{meal.price}</span>
                  <button onClick={() => handleOrderNow(meal)}>Order Now</button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
