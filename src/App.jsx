import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import Medical from "./pages/Medical/Medical";

import "./App.css";

// Dashboard
import DoctorDashboard from "./pages/Doctor-dashboard/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard/PatientDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* USER SIDE */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/medical" element={<Medical />} />

        {/* DOCTOR SIDE */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

        {/* PATIENT SIDE */}
        <Route path="/dashboard" element={<PatientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
