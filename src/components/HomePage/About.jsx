import React from "react";
import imagee from "../../assets/image010.png";
import inage from "../../assets/image012.png";
import imaage from "../../assets/image013.png";
import inagee from "../../assets/image011.png";



const About = () => {
  return (
    <div>
      <section id="coontainer" className="coontainer">
        <div className={imagee}>
          <img
            className="imagee"
            src={inage}
            alt="Restaurant Interior"
          />
          <img
            className="inage"
            src={inage}
            alt="Restaurant Interior"
          />
          <img
            className="inage"
            src={imaage}
            alt="Food Serving"
          />
          <img
            className="imagee"
            src={inagee}
            alt="Delicious Platter"
          />
        </div>
        <div className="content">
          <h3 className="about">------About Us-------</h3>
          <h1 className="title">
            Welcome to <i className="fa-solid fa-utensils" /> Neural Eat
          </h1>
          <p>
            <i>
              Welcome to our restaurant, where we serve the finest dishes made
              from fresh ingredients. Our chefs bring passion and expertise to
              every meal.
            </i>
          </p>
          <p>
            <i>
              We believe in providing an unforgettable dining experience,
              combining great food with a warm and inviting atmosphere..
            </i>
          </p>
          <h2 className="visit">
            <i>Visit us and taste the difference!</i>
          </h2>
          <div className="info">
            <div className="years">
              <h2>05</h2>
              <p>
                Years of <strong>EXPERIENCE</strong>
              </p>
            </div>
            <div className="chefs">
              <h2>10</h2>
              <p>
                Popular <strong>MASTER CHEFS</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
