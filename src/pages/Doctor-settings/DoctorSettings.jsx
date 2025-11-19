import React from "react";
import "./DoctorSettings.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import SettingsHUD from "./components/SettingsHUD";
import { useDoctorSettings } from "./hooks/useDoctorSettings";

export default function DoctorSettings() {
  const {
    hud,
    toggleHud,
    currency,
    setCurrency,
    timezone,
    setTimezone,
    handleSave,
  } = useDoctorSettings();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="settings" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content settings-layout">
          <SettingsHUD
            hud={hud}
            toggleHud={toggleHud}
            currency={currency}
            setCurrency={setCurrency}
            timezone={timezone}
            setTimezone={setTimezone}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
