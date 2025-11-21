// src/Doctor-reports/components/ReportsPatientsChart.jsx
import React from "react";

export default function ReportsPatientsChart() {
  return (
    <div className="reports-card reports-mini">
      <h4 className="reports-mini-title">Patients</h4>
      <div className="reports-patients-body">
        <div className="reports-donut-placeholder" />
        <div className="reports-patients-stats">
          <div className="reports-patient-number">34,249</div>
          <div className="reports-patient-label">New Patients</div>
          <div className="reports-patient-number">1,420</div>
          <div className="reports-patient-label">Repeated</div>
        </div>
      </div>
    </div>
  );
}
