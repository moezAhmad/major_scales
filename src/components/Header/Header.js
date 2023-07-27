// Header.js

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./header.scss";
import { scalesData } from "../../assets/scales/ScalesData";

const Header = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      setLastScrollTop(st <= 0 ? 0 : st);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <header className={`header ${headerVisible ? "" : "hidden"}`}>
      <nav className="header__nav">
        <ul className="header__nav-list">
          {scalesData.map((scale, index) => {
            return (
              <li key={index} className="header__nav-item">
                <Link to={`${scale.route}`} smooth={true} duration={500}>
                  {scale.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link
          to="scales"
          smooth={true}
          duration={500}
          className="header__nav-item "
        >
          Scales Overview
        </Link>
      </nav>
    </header>
  );
};

export default Header;
