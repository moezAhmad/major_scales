// HeroSection.js

import React from "react";
import "./heroSection.scss";
import Hero from "../../assets/scales/Hero.png";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";

const HeroSection = () => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
  }));

  const onVisibilityChange = (isVisible) => {
    set({ opacity: isVisible ? 1 : 0 });
  };
  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      <animated.section style={props} className="hero">
        <div className="hero__text">
          <h1>Welcome to Music Land!</h1>
          <p>
            Did you know? Whales in the ocean sing songs in major scales just
            like our favorite tunes! Dive into a world of music, swim with the
            melodies, and learn the language that even the giants of the sea
            understand!
          </p>
        </div>
        <div className="hero__logo">
          {/* Replace with your actual logo */}
          <img src={Hero} alt="Music Land Logo" />
        </div>
      </animated.section>
    </VisibilitySensor>
  );
};

export default HeroSection;
