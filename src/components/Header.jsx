import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadCart } from "../../cartUtils";

const Header = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartItems = loadCart() || [];
    setCount(cartItems);
  }, []);

  const handleNavClick = (sectionId) => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to ensure navigation happens first
  };

  const handleCartClick = () => {
    navigate("/checkout");
  };

  return (
    <header>
      <div className="logo">
        <i className="fa-solid fa-utensils"></i>
        <p className="Eats">NexusEats</p>
      </div>

      <nav>
        <ul className="nav-links">
          <li>
            <button className="nav-btn" onClick={() => handleNavClick("home")}>
              Home
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => handleNavClick("about")}>
              About
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("service")}
            >
              Service
            </button>
          </li>
          <li>
            <button className="nav-btn" onClick={() => handleNavClick("menu")}>
              Menu
            </button>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="cart">
        {count ? <span className="cart-count">{count}</span> : null}

        <button className="cart-btttn" onClick={handleCartClick}>
          <i className="fa-solid fa-cart-shopping cart-icon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
