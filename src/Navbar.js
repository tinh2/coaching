import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <img src="/gto-logo.svg" alt="Home" className="navbar-logo" />
        </Link>
      </div>

      <div className="navbar-right">
        <Link to="/calendar">Schedule</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
