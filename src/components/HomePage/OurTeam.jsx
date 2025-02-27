import React from "react";
// import Ourteam from "../../assets/OurTeam";
import chef from "../../assets/chef.jpg";

const OurTeam = () => {
  return (
    <div>
      <section className="team">
        <p>-----Team members------</p>
        <h2>Our Master Chefs</h2>
        <div className="tmember">
          <div className="member">
            <img src={chef} alt />
            <h3>Fatima Aliyu</h3>
            <p>Executive chef</p>
          </div>

          <div className="member">
            <img src={chef} alt />
            <h3>Aminat Olagunju</h3>
            <p>Head Chef</p>
          </div>
          
          <div className="member">
            <img src={chef} alt />
            <h3>Usman Usman</h3>
            <p>Marketing Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
