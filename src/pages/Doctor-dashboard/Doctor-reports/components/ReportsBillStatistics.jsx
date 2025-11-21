// src/Doctor-reports/components/ReportsBillStatistics.jsx
import React from "react";

export default function ReportsBillStatistics() {
  return (
    <div className="reports-card reports-mini">
      <h4 className="reports-mini-title">Bill Statistics</h4>
      <div className="reports-pie-placeholder">
        30% Cash • 15% Visa • 20% Cancelled • 35% Pending
      </div>
    </div>
  );
}
