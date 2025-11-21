// src/Doctor-reports/components/ReportsSalesAnalytics.jsx
import React from "react";

export default function ReportsSalesAnalytics() {
  return (
    <div className="reports-card reports-mini">
      <h4 className="reports-mini-title">Sales Analytics</h4>
      <div className="reports-sales-chart">
        <div className="reports-sales-line reports-sales-line--one" />
        <div className="reports-sales-line reports-sales-line--two" />
        <div className="reports-sales-axis">
          <span>2015</span>
          <span>2016</span>
          <span>2017</span>
          <span>2018</span>
          <span>2019</span>
        </div>
      </div>
    </div>
  );
}
