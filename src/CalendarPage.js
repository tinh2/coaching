import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { InlineWidget } from "react-calendly";
import "./css/CalendarPage.css";

const CalendarPage = () => {
  return (
    <>
      <Navbar />
      <div className="calendar-page">
        <header className="header">
          <h1>
            <FontAwesomeIcon icon={faCalendarAlt} /> Schedule a Session
          </h1>
        </header>
        <InlineWidget
          url="https://calendly.com/unitysky"
          styles={{ height: "100%", width: "100%" }}
        />
      </div>
      <Footer />
    </>
  );
};

export default CalendarPage;
