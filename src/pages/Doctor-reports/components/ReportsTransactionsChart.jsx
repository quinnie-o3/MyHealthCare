// src/Doctor-reports/components/ReportsTransactionsChart.jsx
import React from "react";

export default function ReportsTransactionsChart({ period, onChangePeriod }) {
  return (
    <div className="reports-card reports-transactions">
      <div className="reports-card-header">
        <h3>Transactions Details</h3>
        <select
          className="reports-select"
          value={period}
          onChange={(e) => onChangePeriod(e.target.value)}
        >
          <option>October</option>
          <option>September</option>
          <option>August</option>
        </select>
      </div>

      <div className="reports-chart-line">
        <div className="reports-chart-background" />
        <div className="reports-chart-tooltip">64,366.47</div>
      </div>
    </div>
  );
}
