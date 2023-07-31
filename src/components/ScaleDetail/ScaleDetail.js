import React, { useEffect, useState } from "react";
import { scalesData } from "../../assets/ScalesData";
import "./scaleDetail.scss";
import Note from "../Note/Note";

const debounce = (func, delay) => {
  let debounceTimer;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
};

const getWidthStyle = (windowWidth) => {
  if (windowWidth >= 1240) {
    return "desktop";
  } else if (windowWidth >= 900) {
    return "tablet";
  } else if (windowWidth >= 550) {
    return "mobile";
  } else {
    return "smaller-mobile";
  }
};

const getWidthNote = (windowWidth, note) => {
  if (windowWidth >= 1240) {
    return { left: note.leftDesktop, top: note.topDesktop };
  } else if (windowWidth >= 900) {
    return { left: note.leftTablet, top: note.topTablet };
  } else if (windowWidth >= 550) {
    return { left: note.leftMobile, top: note.topMobile };
  } else {
    return { left: note.leftSmallerMobile, top: note.topSmallerMobile };
  }
};

const ScalesSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="scales-section">
      {scalesData.map((scale) => {
        let style = getWidthStyle(windowWidth);

        return (
          <div
            id={scale.route}
            className={`scales-detail scales-detail-${style}`}
          >
            <h2>{scale.name}</h2>
            <img src={scale.src} alt={scale.name} />
            <p>{scale.info}</p>
            {scale.notes.map((note) => {
              let { left, top } = getWidthNote(windowWidth, note);

              return (
                <Note
                  left={left}
                  top={top}
                  style={`note-${style}`}
                  sound={note.sound}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ScalesSection;
