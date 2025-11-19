import React from "react";
import "./DoctorPatient.css";

import DoctorSidebar from "../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";
import PatientListTable from "./components/PatientListTable";
import { useDoctorPatientList } from "./hook/useDoctorPatientList";

export default function DoctorPatientList() {
  const { patients } = useDoctorPatientList();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="patients" activeSub="patient-list" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <PatientListTable patients={patients} />
        </div>
      </div>
    </div>
  );
}
