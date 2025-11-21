// src/Doctor-inbox/components/InboxSidebar.jsx
import React from "react";

export default function InboxSidebar() {
  return (
    <div className="inbox-sidebar">
      <button className="inbox-compose-btn">+ Compose</button>

      <div className="inbox-boxes">
        <div className="inbox-box-row inbox-box-row--active">
          <span className="icon">📩</span>
          <span>my Inbox</span>
          <span className="inbox-count">1253</span>
        </div>
        <div className="inbox-box-row">
          <span className="icon">☆</span>
          <span>Starred</span>
          <span className="inbox-count">245</span>
        </div>
        <div className="inbox-box-row">
          <span className="icon">✈️</span>
          <span>Sent</span>
          <span className="inbox-count">24,532</span>
        </div>
        <div className="inbox-box-row">
          <span className="icon">🗑️</span>
          <span>Bin</span>
          <span className="inbox-count">9</span>
        </div>
      </div>

      <div className="inbox-labels">
        <div className="inbox-label-title">Label</div>
        <div className="inbox-label-row">
          <span className="inbox-label-dot inbox-label-dot--primary" />
          <span>Primary</span>
        </div>
        <div className="inbox-label-row">
          <span className="inbox-label-dot inbox-label-dot--social" />
          <span>Social</span>
        </div>
        <div className="inbox-label-row">
          <span className="inbox-label-dot inbox-label-dot--work" />
          <span>Work</span>
        </div>
        <div className="inbox-label-row">
          <span className="inbox-label-dot inbox-label-dot--admin" />
          <span>Admin</span>
        </div>

        <button className="inbox-create-label">+ Create New Label</button>
      </div>
    </div>
  );
}
