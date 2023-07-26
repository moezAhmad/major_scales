// Header.js

import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { scalesData } from "../../assets/scales/ScalesData";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          {scalesData.map((scale, index) => {
            return (
              <li key={index} className="header__nav-item">
                <NavLink to={`${scale.route}`}>{scale.name}</NavLink>
              </li>
            );
          })}{" "}
        </ul>
        <NavLink to="/scales" className="header__nav-item ">
          Scales Overview
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
