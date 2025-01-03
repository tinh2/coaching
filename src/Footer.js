import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} GetTechOffers.com All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
