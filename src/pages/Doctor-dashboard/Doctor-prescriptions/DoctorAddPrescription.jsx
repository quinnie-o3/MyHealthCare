// src/pages/Doctor-prescriptions/DoctorAddPrescription.jsx
import React from "react";
import "./DoctorPrescriptions.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import PrescriptionForm from "./components/PrescriptionForm";
import { useDoctorAddPrescription } from "./hooks/useDoctorAddPrescription";

export default function DoctorAddPrescription() {
  const { formData, handleChange, handleSubmit } =
    useDoctorAddPrescription();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="prescriptions" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <PrescriptionForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
}
