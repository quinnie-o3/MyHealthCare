import React from "react";
import "./DoctorPatient.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";
import PatientForm from "./components/PatientForm";
import { useDoctorPatientForm } from "./hooks/useDoctorPatientForm";

export default function DoctorAddPatient() {
  const { formData, handleChange, handleSubmit, loading } =
    useDoctorPatientForm();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="patients" activeSub="add-patient" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <PatientForm
            title="Add New Patient"
            submitLabel="Add Now"
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            showAvatar={false}
          />
        </div>
      </div>
    </div>
  );
}
