import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import Medical from "./pages/Services/Medical";

import "./App.css";

// ===== DOCTOR PAGES =====

// Dashboard
import DoctorDashboard from "./pages/Doctor-dashboard/DoctorDashboard";


// Bills
import DoctorBillList from "./pages/Doctor-billList/DoctorBillList";
import DoctorAddBill from "./pages/Doctor-billList/DoctorAddBill";
import DoctorInvoice from "./pages/Doctor-billList/DoctorInvoice";

// Patients
import DoctorPatientList from "./pages/Doctor-patient/DoctorPatientList";
import DoctorAddPatient from "./pages/Doctor-patient/DoctorAddPatient";
import DoctorEditPatient from "./pages/Doctor-patient/DoctorEditPatient";

// Appointments
import DoctorAppointmentLog from "./pages/Doctor-appointments/DoctorAppointmentLog";
import DoctorBookAppointment from "./pages/Doctor-appointments/DoctorBookAppointment";

// Calendar
import DoctorCalendar from "./pages/Doctor-calendar/DoctorCalendar";

// Inbox
import DoctorInbox from "./pages/Doctor-inbox/DoctorInbox";

// Settings
import DoctorProfile from "./pages/Doctor-settings/DoctorProfile";
import DoctorSettings from "./pages/Doctor-settings/DoctorSettings";

// Prescriptions
import DoctorPrescriptionList from "./pages/Doctor-prescriptions/DoctorPrescriptionList";
import DoctorAddPrescription from "./pages/Doctor-prescriptions/DoctorAddPrescription";
// (nếu sau này có Drugs & Tests thì import thêm ở đây)

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

        {/* Bills */}
        <Route path="/doctor/bill-list" element={<DoctorBillList />} />
        <Route path="/doctor/add-bill" element={<DoctorAddBill />} />
        <Route path="/doctor/invoice" element={<DoctorInvoice />} />

        {/* Patients */}
        <Route path="/doctor/patients" element={<DoctorPatientList />} />
        <Route path="/doctor/patients/add" element={<DoctorAddPatient />} />
        <Route path="/doctor/patients/edit/:id" element={<DoctorEditPatient />} />

        {/* Appointments */}
        <Route path="/doctor/appointments" element={<DoctorAppointmentLog />} />
        <Route
          path="/doctor/appointments/book"
          element={<DoctorBookAppointment />}
        />

        {/* Calendar */}
        <Route path="/doctor/calendar" element={<DoctorCalendar />} />

        {/* Inbox */}
        <Route path="/doctor/inbox" element={<DoctorInbox />} />

        {/* Settings */}
        <Route path="/doctor/settings/profile" element={<DoctorProfile />} />
        <Route
          path="/doctor/settings/preferences"
          element={<DoctorSettings />}
        />

        {/* Prescriptions */}
        <Route
          path="/doctor/prescriptions"
          element={<DoctorPrescriptionList />}
        />
        <Route
          path="/doctor/prescriptions/create"
          element={<DoctorAddPrescription />}
        />
      </Routes>
    </Router>
  );
};

export default App;
