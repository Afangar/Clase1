import React from "react";
import logo from "../logo.svg";
import "./nav.scss";

let nav = () => {
  return (
    <div className="nav">
      <nav>
        <div className="logo">
          <img src={logo}></img>
        </div>
        <ul>
          <li>
            <a class="active" href="#portafolio">
              PORTAFOLIO
            </a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default nav;
