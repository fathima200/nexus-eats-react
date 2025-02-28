import React from "react";
import HeroSection from "./HomePage/HeroSection";
import FoodBanner from "./HomePage/FoodBanner";
import WhyUs from "./HomePage/WhyUs";
import Menu from "./HomePage/Menu";
import OurTeam from "./HomePage/OurTeam";
import Reservation from "./HomePage/Reservation";
import About from "./HomePage/About";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <FoodBanner />
      <section id="about">
        <About />
      </section>
      <section id="service">
        <WhyUs />
      </section>
      <section id="menu">
        <Menu />
      </section>
      <OurTeam />
      <Reservation />
      <section id="contact"></section>
    </div>
  );
};

export default HomePage;
