// HeroSection.js

import React from "react";
import "./heroSection.scss";
import Hero from "../../assets/scales/Hero.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Welcome to Music Land!</h1>
        <p>
          Did you know? Whales in the ocean sing songs in major scales just like
          our favorite tunes! Dive into a world of music, swim with the
          melodies, and learn the language that even the giants of the sea
          understand!
        </p>
      </div>
      <div className="hero__logo">
        {/* Replace with your actual logo */}
        <img src={Hero} alt="Music Land Logo" />
      </div>
    </section>
  );
};

export default HeroSection;
