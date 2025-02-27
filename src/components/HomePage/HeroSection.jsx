import React from "react";

const HeroSection = () => {
  return (
    <div>
      <section className="banner">
        {/* <img src="images/Restron image2.jpg" alt=""> */}
        <div id="welcome">
          <h1>
            JOIN US
            <br />
            for an unforgettable dining experience
          </h1>
          <p>
            Indulge in the reach flavour of Africa, <br />
            carefully crafted to transport your taste buds across the continent.{" "}
            <br />
            From classic dishes to modern twist, our menu is designed to
            delight.
          </p>
          <button>BOOK A TABLE</button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
