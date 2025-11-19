import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";
import Medical from "./pages/Services/Medical";
import DoctorDashboard from "./Doctor-dashboard/Doctor-dashboard";
import DoctorBillList from "./Doctor-billList/DoctorBillList";
import DoctorAddBill from "./Doctor-billList/DoctorAddBill";
import DoctorInvoice from "./Doctor-billList/DoctorInvoice";
import DoctorPatientList from "./Doctor-patient/DoctorPatientList";
import DoctorAddPatient from "./Doctor-patient/DoctorAddPatient";
import DoctorEditPatient from "./Doctor-patient/DoctorEditPatient";
import DoctorAppointmentLog from "./Doctor-appointments/DoctorAppointmentLog";
import DoctorBookAppointment from "./Doctor-appointments/DoctorBookAppointment";
import DoctorCalendar from "./Doctor-calendar/DoctorCalendar";
import DoctorInbox from "./Doctor-inbox/DoctorInbox";
import DoctorProfile from "./pages/Doctor-settings/DoctorProfile";
import DoctorSettings from "./pages/Doctor-settings/DoctorSettings";
import DoctorPrescriptionList from "./pages/Doctor-prescriptions/DoctorPrescriptionList";
import DoctorAddPrescription from "./pages/Doctor-prescriptions/DoctorAddPrescription";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/medical" element={<Medical />} />

        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/bill-list" element={<DoctorBillList />} />
        <Route path="/doctor/add-bill" element={<DoctorAddBill />} />
        <Route path="/doctor/invoice" element={<DoctorInvoice />} />
        <Route path="/doctor/patients" element={<DoctorPatientList />} />
        <Route path="/doctor/patients/add" element={<DoctorAddPatient />} />
        <Route path="/doctor/patients/edit/:id" element={<DoctorEditPatient />} />
         <Route
          path="/doctor/patients/edit/:id"
          element={<DoctorEditPatient />}
        />
        <Route
          path="/doctor/appointments"
          element={<DoctorAppointmentLog />}
        />
        <Route
          path="/doctor/appointments/book"
          element={<DoctorBookAppointment />}
        />
        <Route path="/doctor/calendar" element={<DoctorCalendar />} />

        <Route path="/doctor/inbox" element={<DoctorInbox />} />
        <Route path="/doctor/settings/profile" element={<DoctorProfile />} />
        <Route path="/doctor/settings/preferences" element={<DoctorSettings />} />
        <Route path="/doctor/prescriptions" element={<DoctorPrescriptionList />} />
        <Route path="/doctor/prescriptions/create" element={<DoctorAddPrescription />} />

      </Routes>
    </Router>
  );
};

export default App;
