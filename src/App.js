import React from "react";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { InlineWidget } from "react-calendly";
import "./App.css"; // Add your custom styles here

// Load your Stripe public key
const stripePromise = loadStripe("your-public-stripe-key");

const App = () => {
  const handleCheckout = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sessionData: "example" }),
    });

    const { sessionId } = await response.json();
    const stripe = await stripePromise;

    await stripe.redirectToCheckout({ sessionId });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Tech Offers</h1>
        <p>Helping software engineers land their dream jobs.</p>
      </header>
      <main>
        <section className="calendar-section">
          <h2>
            <FontAwesomeIcon icon={faCalendarAlt} /> Schedule a Session
          </h2>
          <InlineWidget
            url="https://calendly.com/your-calendly-username"
            styles={{ height: "600px", width: "100%" }}
          />
        </section>
        <section className="checkout-section">
          <h2>Secure Your Spot</h2>
          <button onClick={handleCheckout} className="checkout-button">
            Pay & Schedule
          </button>
        </section>
      </main>
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
