import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <main className="main wrapper">
        <header>
          <h1>tourbees</h1>
          <div className="line"></div>
          <h2>your exclusive tour partner</h2>
          <Link to="/tourmenu">
            <button className="header-btn">find out</button>
          </Link>
        </header>
      </main>
    </div>
  );
}
