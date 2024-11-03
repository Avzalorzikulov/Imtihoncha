/* eslint-disable no-unused-vars */
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
 function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <ul className="header__list">
              <li>
                <Link to={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/popular"}>
                  Popular
                </Link>
              </li>
              <li>
                <Link to={"/toprated"}>
                  Toprated
                </Link>
              </li>
              <li>
                <Link to={"/upcoming"}>
                  Upcoming
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header
