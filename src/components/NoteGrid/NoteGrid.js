import React from "react";
import { scalesData } from "../../assets/ScalesData";
import "./noteGrid.scss";
import { Link } from "react-scroll";
import { useSpring, animated } from "react-spring";
import VisibilitySensor from "react-visibility-sensor";
const NoteGrid = () => {
  const [props, set] = useSpring(() => ({
    opacity: 1,
  }));

  const onVisibilityChange = (isVisible) => {
    set({ opacity: isVisible ? 1 : 0 });
  };
  return (
    <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      <animated.section id="scales" style={props} className="noteGrid">
        <h1 className="noteGrid-heading">
          Discover the Magic of Major Scales!
        </h1>

        <div className="noteGrid__container">
          {scalesData.map((scale) => (
            <div
              key={scale.id}
              className={`${
                scale.id === scalesData[0].id
                  ? "noteGrid__container-first-child"
                  : ""
              }`}
            >
              <Link to={`${scale.route}`} smooth={true} duration={500}>
                <div className="noteGrid__container__item">
                  <h1>{`${scale.name}`}</h1>
                  <img src={scale.src} alt={scale.name} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </animated.section>
    </VisibilitySensor>
  );
};

export default NoteGrid;
