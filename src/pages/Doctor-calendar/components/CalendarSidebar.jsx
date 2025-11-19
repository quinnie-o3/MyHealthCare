// src/Doctor-calendar/components/CalendarSidebar.jsx
import React from "react";

export default function CalendarSidebar() {
  return (
    <div className="cal-sidebar">
      <h2 className="cal-title">Calendar</h2>

      <div className="cal-section">
        <div className="cal-section-label">Draggable Events</div>
        <div className="cal-draggable-list">
          <div className="cal-block cal-block--purple" />
          <div className="cal-block cal-block--orange" />
          <div className="cal-block cal-block--blue" />
          <div className="cal-block cal-block--green" />
          <div className="cal-block cal-block--pink" />
          <div className="cal-block cal-block--teal" />
        </div>
      </div>

      <div className="cal-section">
        <div className="cal-section-label">Create Event</div>
        <div className="cal-color-row">
          <span className="cal-dot cal-dot--red" />
          <span className="cal-dot cal-dot--green" />
          <span className="cal-dot cal-dot--yellow" />
          <span className="cal-dot cal-dot--brown" />
          <span className="cal-dot cal-dot--blue" />
          <span className="cal-dot cal-dot--purple" />
          <span className="cal-dot cal-dot--pink" />
        </div>

        <div className="cal-create-row">
          <input
            className="cal-input"
            placeholder="Enter event title"
          />
          <button className="cal-add-btn">Add</button>
        </div>
      </div>
    </div>
  );
}
