import React from "react";
import { scalesData } from "../../assets/scales/ScalesData";
import "./scaleDetail.scss";

const ScalesSection = () => {
  return (
    <div className="scales-section">
      {scalesData.map((scale) => (
        <div id={scale.route} className="scales-detail">
          <h2>{scale.name}</h2>
          <img src={scale.src} alt={scale.name} />
          <p>{scale.info}</p>{" "}
          {/* Assuming each scale object has an 'info' property with a fun fact about the scale */}
        </div>
      ))}
    </div>
  );
};

export default ScalesSection;
