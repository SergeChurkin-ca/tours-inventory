import React from "react";
import { Link } from "react-router-dom";
// import "../styles/styles.css";
import logo from "../images/tourbeeslogo.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <i className="fa fa-bars"></i>
        <input type="checkbox" id="toggle" name="toggle" />
        <div className="logo-wrapper">
          <img src={logo} alt="tourbess logo" className="logo" />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tourmenu">Tours</Link>
          </li>
          <li>
            <Link to="/manageinventory">Manage Inventory</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
