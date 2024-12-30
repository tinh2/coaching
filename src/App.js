import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Tech Offers</h1>
        <p>Helping software engineers land their dream jobs.</p>
        <button
          onClick={() => navigate("/calendar")}
          className="calendly-button"
        >
          Schedule a Call
        </button>
      </header>
      <main>{/* Add any additional content for the main page here */}</main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Get Tech Offers. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
