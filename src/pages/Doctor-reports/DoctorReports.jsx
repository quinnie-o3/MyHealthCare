// src/Doctor-reports/DoctorReports.jsx
import React from "react";
import "./DoctorReports.css";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import ReportsStatsGrid from "./components/ReportsStatsGrid";
import ReportsTransactionsChart from "./components/ReportsTransactionsChart";
import ReportsBillStatistics from "./components/ReportsBillStatistics";
import ReportsPatientsChart from "./components/ReportsPatientsChart";
import ReportsSalesAnalytics from "./components/ReportsSalesAnalytics";
import { useDoctorReports } from "./hooks/useDoctorReports";

export default function DoctorReports() {
  const { period, setPeriod, stats } = useDoctorReports();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="reports" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <ReportsStatsGrid stats={stats} />

          <ReportsTransactionsChart
            period={period}
            onChangePeriod={setPeriod}
          />

          <div className="reports-bottom-grid">
            <ReportsBillStatistics />
            <ReportsPatientsChart />
            <ReportsSalesAnalytics />
          </div>
        </div>
      </div>
    </div>
  );
}
