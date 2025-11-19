// src/Doctor/components/DashboardUpcoming.jsx
import React from "react";

export default function DashboardUpcoming({ upcoming }) {
  return (
    <div className="dd-upcoming-card">
      <div className="dd-card-header dd-card-header--between">
        <h3>Upcoming</h3>
        <button className="dd-link-button">View All</button>
      </div>
      <div className="dd-upcoming-item">
        <div className="dd-upcoming-avatar" />
        <div className="dd-upcoming-main">
          <p className="dd-upcoming-name">{upcoming.name}</p>
          <p className="dd-upcoming-meta">{upcoming.dateText}</p>
        </div>
      </div>
    </div>
  );
}
