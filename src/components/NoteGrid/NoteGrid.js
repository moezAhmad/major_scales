import React from "react";
import { scalesData } from "../../assets/scales/ScalesData";
import "./noteGrid.scss";
const NoteGrid = () => {
  return (
    <div className="noteGrid">
      <h1 className="noteGrid-heading">Discover the Magic of Major Scales!</h1>

      <div className="noteGrid__container">
        {scalesData.map((scale) => (
          <div key={scale.id} className="noteGrid__container__item">
            <img src={scale.src} alt={scale.name} />
            <h1>{scale.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteGrid;
