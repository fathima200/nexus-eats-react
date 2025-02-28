import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/meals`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data.data);
      })
      .catch((error) => console.error("Error fetching meals:", error));
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
                  <button
                    className="order-now"
                    onClick={() => handleOrderNow(meal)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
        </div>
        <h1 id="Special-Lunch" className="pb">
          ------Special Lunch------
        </h1>
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
                  <button
                    className="order-now"
                    onClick={() => handleOrderNow(meal)}
                  >
                    Order Now
                  </button>
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
                  <button
                    className="order-now"
                    onClick={() => handleOrderNow(meal)}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
