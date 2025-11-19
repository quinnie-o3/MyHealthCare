import React from "react";
import "./DoctorAppointment.css";

import DoctorSidebar from "../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import AppointmentForm from "./components/AppointmentForm";
import { useDoctorBookAppointment } from "./hook/useDoctorBookAppointment";

export default function DoctorBookAppointment() {
  const { formData, handleChange, handleSubmit, loading } =
    useDoctorBookAppointment();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="appointments" activeSub="book-appointment" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <AppointmentForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
