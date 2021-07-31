import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import logo from "../images/tourbeeslogo.svg";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <img src={logo} alt="tourbess loso" className="logo" />
          </li>
          <li>
            <img src="" alt="" />
          </li>
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
