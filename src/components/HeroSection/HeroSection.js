// HeroSection.js

import React from "react";
import "./heroSection.scss";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__text">
        <h1>Welcome to Music Land!</h1>
        <p>
          Did you know? The world's largest piano was built by Adrian Mann, a
          piano tuner from New Zealand. It measures an impressive 5.7 meters
          long and has brought a whole new depth to the phrase "grand piano"!
        </p>
      </div>
      <div className="hero__logo">
        {/* Replace with your actual logo */}
        <img src="logo.svg" alt="Music Land Logo" />
      </div>
    </section>
  );
};

export default HeroSection;
