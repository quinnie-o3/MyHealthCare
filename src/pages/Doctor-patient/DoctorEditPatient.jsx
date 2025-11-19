import React from "react";
import "./DoctorPatient.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";
import PatientForm from "./components/PatientForm";
import { useDoctorPatientForm } from "./hooks/useDoctorPatientForm";

export default function DoctorEditPatient() {
  const initial = {
    firstName: "Ahmed",
    lastName: "Tamer Fawzy",
    email: "tayseer123@gmail.com",
    phone: "01233443453",
    age: "22",
    gender: "Male",
  };

  const { formData, handleChange, handleSubmit, loading } =
    useDoctorPatientForm(initial);

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="patients" activeSub="add-patient" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <PatientForm
            title="Edit Patient Details"
            submitLabel="Save"
            formData={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            loading={loading}
            showAvatar={true}
          />
        </div>
      </div>
    </div>
  );
}
