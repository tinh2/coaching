import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { InlineWidget } from "react-calendly";
import "./CalendarPage.css";

const CalendarPage = () => {
  return (
    <div className="calendar-page">
      <dev className="header">
        <h1>
          <FontAwesomeIcon icon={faCalendarAlt} /> Schedule a Session
        </h1>
      </dev>
      <InlineWidget
        url="https://calendly.com/unitysky"
        styles={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default CalendarPage;
