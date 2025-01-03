import React from "react";
import "./css/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>Get Tech Offers</h1>
          <p>Helping software engineers land their dream jobs.</p>
          <button to="/calendar" className="calendly-button">
            Schedule a Call
          </button>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default App;
