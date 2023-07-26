// App.js

import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import NoteGrid from "./components/NoteGrid/NoteGrid";
import ScaleDetail from "./components/ScaleDetail/ScaleDetail";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <NoteGrid />
      <ScaleDetail />
    </div>
  );
};

export default App;
