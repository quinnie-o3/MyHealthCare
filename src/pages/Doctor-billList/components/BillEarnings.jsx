import React from "react";

export default function BillEarnings({ data }) {
  return (
    <div className="card earnings-card">
      <div className="card-header">
        <h3>My Earnings</h3>
        <div className="earnings-value">$12,500</div>
      </div>

      <div className="earnings-chart">
        {data.labels.map((label, idx) => (
          <div key={label} className="earnings-bar-group">
            <div className="earnings-bar" />
            <span className="earnings-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
