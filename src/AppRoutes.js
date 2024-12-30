import React from "react";
import { Routes, Route } from "react-router-dom";
import CalendarPage from "./CalendarPage";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  );
};

export default AppRoutes;
