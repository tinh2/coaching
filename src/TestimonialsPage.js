import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxesStacked } from "@fortawesome/free-solid-svg-icons";
import "./css/TestimonialsPage.css";

const testimonials = [
  {
    name: "Carlton Etienne",
    text: "Tho Le has been instrumental in my academic growth. From the very beginning, he recognized that I am a visual learner and adapted his teaching methods to fit my needs. His ability to break down both fundamental and complex concepts into clear, visual explanations made the learning process engaging and effective. His commitment to my success went above and beyond, always ensuring I fully understood the material and felt confident in applying it. His personalized approach and dedication truly set him apart as an exceptional educator.",
    image: "/carlton.jpg",
  },
  {
    name: "Adam Erb",
    text: "I can't thank Tho enough for helping me go from zero experience to landing my first dev job in just six months. His mentorship was exactly what I needed—he broke down complex concepts, guided me through interview prep, and gave me the confidence to tackle real-world coding challenges. Tho doesn't just teach you how to code; he teaches you how to think like a software engineer and approach problems with a professional mindset. If you're serious about breaking into tech or are an experienced developer looking to improve your skills, Tho is the mentor you are looking for!",
    image: "/adam.jpg",
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
          {testimonials
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((testimonial, index) => (
              <div className="testimonial" key={index}>
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} profile`}
                  className="testimonial-image"
                />
                <h3>{testimonial.name}</h3>
                <hr />
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
