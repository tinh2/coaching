import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./css/AboutPage.css";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <header className="about-header">
          <h1>
            <FontAwesomeIcon icon={faUser} /> About Me
          </h1>
        </header>

        <main className="about-container">
          <p>
            Hello, I’m Tho. I’m a dedicated software engineering professional
            with over 10 years of industry experience and a passion for helping
            fellow developers achieve their career goals.
          </p>
          <p>
            Throughout my journey, I’ve worked on projects of various sizes—from
            fast-paced startups to large enterprise solutions—giving me deep
            insights into what tech companies look for in top engineering
            talent. Over the years, I’ve led technical interviews, mentored
            junior and mid-level engineers, and refined countless resumes. This
            first-hand exposure to hiring practices allows me to guide aspiring
            and experienced software engineers through every step of the job
            search process.
          </p>
          <p>
            Whether you’re preparing for challenging technical interviews,
            looking to enhance your professional profile, or aiming to negotiate
            the best possible offer, I’m here to share proven strategies,
            actionable feedback, and encouragement. My ultimate goal is to
            empower you to showcase your unique strengths, stand out in the
            competitive tech market, and land the role you’ve always wanted.
            Let’s work together to accelerate your path to success.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
