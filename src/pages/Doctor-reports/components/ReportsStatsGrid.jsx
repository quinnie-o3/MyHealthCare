// src/Doctor-reports/components/ReportsStatsGrid.jsx
import React from "react";

export default function ReportsStatsGrid({ stats }) {
  return (
    <div className="reports-stats-grid">
      {stats.map((s, idx) => (
        <div key={s.id} className="reports-stat-card">
          <div className="reports-stat-top">
            <div className="reports-stat-label">{s.label}</div>
            <div className="reports-stat-icon">{idx + 1}</div>
          </div>
          <div className="reports-stat-value">{s.value}</div>
          <div
            className={
              "reports-stat-change " +
              (s.positive ? "reports-stat-change--up" : "reports-stat-change--down")
            }
          >
            <span className="reports-arrow">{s.positive ? "↑" : "↓"}</span>
            {s.change}
          </div>
        </div>
      ))}
    </div>
  );
}
