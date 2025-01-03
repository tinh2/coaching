import React from "react";
import Writer from "./Writer";
import { useNavigate } from "react-router-dom";
import "./css/App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const App = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="App">
        <header className="App-header">
          <h1>Get Tech Offers</h1>
          <p>
            <Writer text="Helping software engineers land their dream jobs." />
          </p>
          <button
            onClick={() => navigate("/calendar")}
            className="calendly-button"
          >
            Schedule a Call
          </button>
        </header>
      </div>
      <Footer />
    </>
  );
};

export default App;
