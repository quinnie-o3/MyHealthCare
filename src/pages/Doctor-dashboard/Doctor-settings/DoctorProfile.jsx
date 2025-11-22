// src/pages/Doctor-settings/DoctorProfile.jsx
import React from "react";
import "./DoctorSettings.css";

import DoctorSidebar from "../../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import ProfileForm from "./components/ProfileForm";
import { useDoctorProfile } from "./hooks/useDoctorProfile";

export default function DoctorProfile() {
  const { formData, handleChange, handleSave } = useDoctorProfile();

  return (
    <div className="bill-page">
      {/* Fixed left sidebar */}
      <DoctorSidebar activeMenu="settings" />

      {/* Right main area */}
      <div className="bill-main">
        {/* Top bar with search + doctor info (giống các trang Transaction / Patients) */}
        <BillTopBar />

        <div className="bill-content settings-layout">
          <ProfileForm
            formData={formData}
            onChange={handleChange}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
