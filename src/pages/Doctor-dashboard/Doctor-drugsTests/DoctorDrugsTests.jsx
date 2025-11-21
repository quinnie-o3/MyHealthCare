// src/pages/Doctor-drugsTests/DoctorDrugsTests.jsx
import React from "react";
import "./DoctorDrugsTests.css";

import DoctorSidebar from "../../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import DrugsTestsToolbar from "./components/DrugsTestsToolbar";
import DrugsTestsTable from "./components/DrugsTestsTable";
import DrugsTestsToggle from "./components/DrugsTestsToggle";
import { useDoctorDrugsTests } from "./hooks/useDoctorDrugsTests";

export default function DoctorDrugsTests() {
  const { mode, setMode, search, setSearch, rows, resetFilters } =
    useDoctorDrugsTests();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="drugsTests" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <DrugsTestsToolbar
            mode={mode}
            search={search}
            setSearch={setSearch}
            onReset={resetFilters}
          />
          <DrugsTestsTable rows={rows} />

          <DrugsTestsToggle mode={mode} setMode={setMode} />

          <button className="dt-fab">＋</button>
        </div>
      </div>
    </div>
  );
}
