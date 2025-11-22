// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

// ==== PUBLIC PAGES ====
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import Medical from "./pages/Medical/Medical";

// ==== PATIENT SIDE ====
import PatientDashboard from "./pages/PatientDashboard/PatientDashboard";

// ==== DOCTOR SIDE - DASHBOARD ROOT ====
import DoctorDashboard from "./pages/Doctor-dashboard/DoctorDashboard";

// ==== DOCTOR SIDE - TRANSACTIONS (Bills) ====
import DoctorBillList from "./pages/Doctor-dashboard/Doctor-billList/DoctorBillList";
import DoctorAddBill from "./pages/Doctor-dashboard/Doctor-billList/DoctorAddBill";
import DoctorInvoice from "./pages/Doctor-dashboard/Doctor-billList/DoctorInvoice";

// ==== DOCTOR SIDE - PATIENTS ====
import DoctorPatientList from "./pages/Doctor-dashboard/Doctor-patient/DoctorPatientList";
import DoctorAddPatient from "./pages/Doctor-dashboard/Doctor-patient/DoctorAddPatient";
import DoctorEditPatient from "./pages/Doctor-dashboard/Doctor-patient/DoctorEditPatient";
// nếu bạn có ViewPatient thì import thêm ở đây

// ==== DOCTOR SIDE - APPOINTMENTS ====
import DoctorAppointmentLog from "./pages/Doctor-dashboard/Doctor-appointments/DoctorAppointmentLog";
import DoctorBookAppointment from "./pages/Doctor-dashboard/Doctor-appointments/DoctorBookAppointment";

// ==== DOCTOR SIDE - CALENDAR ====
import DoctorCalendar from "./pages/Doctor-dashboard/Doctor-calendar/DoctorCalendar";

// ==== DOCTOR SIDE - PRESCRIPTIONS ====
import DoctorPrescriptionList from "./pages/Doctor-dashboard/Doctor-prescriptions/DoctorPrescriptionList";
import DoctorAddPrescription from "./pages/Doctor-dashboard/Doctor-prescriptions/DoctorAddPrescription";

// ==== DOCTOR SIDE - INBOX / MESSAGES ====
import DoctorInbox from "./pages/Doctor-dashboard/Doctor-inbox/DoctorInbox";

// ==== DOCTOR SIDE - REPORTS ====
import DoctorReports from "./pages/Doctor-dashboard/Doctor-reports/DoctorReports";

// ==== DOCTOR SIDE - SETTINGS ====
import DoctorProfile from "./pages/Doctor-dashboard/Doctor-settings/DoctorProfile";
import DoctorSettings from "./pages/Doctor-dashboard/Doctor-settings/DoctorSettings";
// (DoctorSettings = trang HUD / General settings)


const App = () => {
  return (
    <Router>
      <Routes>
        {/* ===== PUBLIC / PATIENT ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/medical" element={<Medical />} />

        {/* Patient dashboard (sau login user) */}
        <Route path="/dashboard" element={<PatientDashboard />} />

        {/* ===== DOCTOR SIDE ===== */}
        {/* Dashboard chính của doctor */}
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

        {/* Transactions / Bills */}
        <Route path="/doctor/bill-list" element={<DoctorBillList />} />
        <Route path="/doctor/add-bill" element={<DoctorAddBill />} />
        <Route path="/doctor/invoice" element={<DoctorInvoice />} />

        {/* Patients */}
        <Route path="/doctor/patients" element={<DoctorPatientList />} />
        <Route path="/doctor/patients/add" element={<DoctorAddPatient />} />
        <Route
          path="/doctor/patients/edit/:id"
          element={<DoctorEditPatient />}
        />
        {/* Nếu có view: <Route path="/doctor/patients/view/:id" element={<DoctorViewPatient />} /> */}

        {/* Appointments */}
        <Route
          path="/doctor/appointments"
          element={<DoctorAppointmentLog />}
        />
        <Route
          path="/doctor/appointments/book"
          element={<DoctorBookAppointment />}
        />

        {/* Calendar */}
        <Route path="/doctor/calendar" element={<DoctorCalendar />} />

        {/* Prescriptions */}
        <Route
          path="/doctor/prescriptions"
          element={<DoctorPrescriptionList />}
        />
        <Route
          path="/doctor/prescriptions/create"
          element={<DoctorAddPrescription />}
        />

        {/* Inbox / Messages */}
        <Route path="/doctor/inbox" element={<DoctorInbox />} />

        {/* Reports */}
        <Route path="/doctor/reports" element={<DoctorReports />} />

        {/* Settings */}
        <Route
          path="/doctor/settings/profile"
          element={<DoctorProfile />}
        />
        <Route
          path="/doctor/settings/preferences"
          element={<DoctorSettings />}
        />
      </Routes>
    </Router>
  );
};

export default App;
