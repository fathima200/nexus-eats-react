import React from "react";
import  User from "../../assets/user.png";
import Fork from "../../assets/Fork.png";
import Orders from "../../assets/orders.png";
import hours from "../../assets/24-hours.png";

const WhyUs = () => {
  return (
    <div>
      <section className="flashcards">
        <h2>Why Choose Us?-----</h2>
        <div className="mycard">
          <div id="card">
            <img src={User} alt id="icon" />
            <h3>Master Chefs</h3>
            <p>
              Our master chef is the driving force behind our culinary
              excellence.{" "}
            </p>
          </div>
          <div id="card" className="firt">
            <img src={Fork} alt id="icon" />
            <h3>Quality Food</h3>
            <p>
              We're committed to serving only the freshest, quality ingredients.{" "}
            </p>
          </div>
          <div id="card">
            <img src={Orders} alt id="icon" />
            <h3>Online Order</h3>
            <p>
              Enjoy your favorite dishes from the comfort of your own home.{" "}
            </p>
          </div>
          <div id="card" className="firt">
            <img src={hours} alt id="icon" />
            <h3>24/7 service</h3>
            <p> Our 24/7 service ensures that you can satisfy your cravings </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
