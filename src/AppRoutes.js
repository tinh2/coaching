import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import CalendarPage from "./CalendarPage";
import AboutPage from "./AboutPage";
import TestimonialsPage from "./TestimonialsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
    </Routes>
  );
};

export default AppRoutes;
