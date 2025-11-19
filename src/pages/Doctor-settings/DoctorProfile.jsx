import React from "react";
import "./DoctorSettings.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import ProfileForm from "./components/ProfileForm";
import { useDoctorProfile } from "./hooks/useDoctorProfile";

export default function DoctorProfile() {
  const { formData, handleChange, handleSave } = useDoctorProfile();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="settings" />

      <div className="bill-main">
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
