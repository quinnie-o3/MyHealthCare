import React from "react";

export default function BillWeeklyActivity({ data }) {
  return (
    <div className="card weekly-card">
      <div className="card-header">
        <h3>Weekly Activity</h3>
        <div className="weekly-legend">
          <span className="dot dot--paid" /> Paid
          <span className="dot dot--unpaid" /> unPaid
        </div>
      </div>

      <div className="weekly-chart">
        {data.labels.map((label, idx) => (
          <div key={label} className="weekly-bar-group">
            <div className="weekly-bar weekly-bar--paid" />
            <div className="weekly-bar weekly-bar--unpaid" />
            <span className="weekly-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
