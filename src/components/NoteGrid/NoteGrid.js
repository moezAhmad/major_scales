import React from "react";
import { scalesData } from "../../assets/scales/ScalesData";
import "./noteGrid.scss";
import { Link } from "react-scroll";
const NoteGrid = () => {
  return (
    <div id="scales" className="noteGrid">
      <h1 className="noteGrid-heading">Discover the Magic of Major Scales!</h1>

      <div className="noteGrid__container">
        {scalesData.map((scale) => (
          <Link to={`${scale.route}`} smooth={true} duration={500}>
            <div key={scale.id} className="noteGrid__container__item">
              <img src={scale.src} alt={scale.name} />
              <h1>{scale.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NoteGrid;
