import React from "react";
import "./note.scss";

const Note = ({ left, top, style, sound }) => {
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div
      className={`note ${style}`}
      style={{ left, top }}
      onClick={playSound}
    />
  );
};

export default Note;
