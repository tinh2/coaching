import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/calendar" className="calendly-link">
          Schedule
        </Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  );
};

export default Navbar;
