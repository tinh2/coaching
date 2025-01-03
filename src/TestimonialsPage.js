import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import "./css/TestimonialsPage.css";

const testimonials = [
  {
    name: "Alice Johnson",
    text: "Get Tech Offers helped me land a fantastic software role in under 3 months!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Bob Smith",
    text: "Their mock interviews and career advice were game changers for me.",
    image: "https://via.placeholder.com/100",
  },
];

const TestimonialsPage = () => {
  return (
    <>
      <Navbar />
      <div className="testimonials-page">
        <header className="header">
          <h1>
            <FontAwesomeIcon icon={faBoxesStacked} /> Testimonials
          </h1>
        </header>
        <main className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <img
                src={testimonial.image}
                alt={`${testimonial.name} profile`}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
