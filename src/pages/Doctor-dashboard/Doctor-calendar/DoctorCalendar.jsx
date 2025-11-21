// src/Doctor-calendar/DoctorCalendar.jsx
import React from "react";
import "./DoctorCalendar.css";

import DoctorSidebar from "../../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import CalendarSidebar from "./components/CalendarSidebar";
import CalendarMonthView from "./components/CalendarMonthView";
import { useDoctorCalendar } from "./hooks/useDoctorCalendar";

export default function DoctorCalendar() {
  const { viewMode, setViewMode, monthLabel, days, events } =
    useDoctorCalendar();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="calendar" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content cal-layout">
          <CalendarSidebar />
          <CalendarMonthView
            viewMode={viewMode}
            setViewMode={setViewMode}
            monthLabel={monthLabel}
            days={days}
            events={events}
          />
        </div>
      </div>
    </div>
  );
}
