import React from "react";
import "./DoctorAppointment.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import AppointmentActivityTable from "./components/AppointmentActivityTable";
import { useDoctorAppointmentList } from "./hooks/useDoctorAppointmentList";

export default function DoctorAppointmentLog() {
  const { rows, search, setSearch } = useDoctorAppointmentList();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="appointments" activeSub="activity-log" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <AppointmentActivityTable
            rows={rows}
            search={search}
            setSearch={setSearch}
          />
        </div>
      </div>
    </div>
  );
}
