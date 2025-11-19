// src/pages/Doctor-prescriptions/DoctorPrescriptionList.jsx
import React from "react";
import "./DoctorPrescriptions.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import PrescriptionToolbar from "./components/PrescriptionToolbar";
import PrescriptionTable from "./components/PrescriptionTable";
import { useDoctorPrescriptionList } from "./hooks/useDoctorPrescriptionList";

export default function DoctorPrescriptionList() {
  const { search, setSearch, prescriptions, resetFilters } =
    useDoctorPrescriptionList();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="prescriptions" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <PrescriptionToolbar
            search={search}
            setSearch={setSearch}
            onReset={resetFilters}
          />
          <PrescriptionTable prescriptions={prescriptions} />
        </div>
      </div>
    </div>
  );
}
