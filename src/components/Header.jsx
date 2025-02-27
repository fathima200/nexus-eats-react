import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleNavClick = (sectionId) => {
        navigate('/');  
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);  // Delay to ensure navigation happens first
    };

    const handleCartClick = () => {
        navigate('/checkout');  
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <i className="fa-solid fa-utensils"></i>
                    <p className="Eats">NexusEats</p>
                </div>
                <ul className="nav-links">
                    <li><button className="nav-btn" onClick={() => handleNavClick('home')}>Home</button></li>
                    <li><button className="nav-btn" onClick={() => handleNavClick('about')}>About</button></li>
                    <li><button className="nav-btn" onClick={() => handleNavClick('service')}>Service</button></li>
                    <li><button className="nav-btn" onClick={() => handleNavClick('menu')}>Menu</button></li>
                    <li><button className="nav-btn" onClick={() => handleNavClick('contact')}>Contact</button></li>
                </ul>
            </nav>
            <button className="cart-btttn" onClick={handleCartClick}>
                <i className="fa-solid fa-cart-shopping"></i>
            </button>
        </header>
    );
};

export default Header;
