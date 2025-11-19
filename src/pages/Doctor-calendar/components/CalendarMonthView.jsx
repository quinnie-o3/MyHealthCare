// src/Doctor-calendar/components/CalendarMonthView.jsx
import React from "react";

export default function CalendarMonthView({
  viewMode,
  setViewMode,
  monthLabel,
  days,
  events,
}) {
  const getEventForDay = (day) =>
    events.filter((e) => e.day === day);

  return (
    <div className="cal-main-card">
      <div className="cal-main-header">
        <div className="cal-main-top-left">
          <button className="cal-today-btn">Today</button>
        </div>

        <div className="cal-month-switcher">
          <button className="cal-arrow-btn">{"<"}</button>
          <span className="cal-month-label">{monthLabel}</span>
          <button className="cal-arrow-btn">{">"}</button>
        </div>

        <div className="cal-view-toggle">
          {["Day", "Week", "Month"].map((mode) => (
            <button
              key={mode}
              className={
                "cal-view-btn" +
                (viewMode === mode ? " cal-view-btn--active" : "")
              }
              onClick={() => setViewMode(mode)}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      <div className="cal-weekdays-row">
        {["MON", "TUE", "WED", "THE", "FRI", "SAT", "SUN"].map((d) => (
          <div key={d} className="cal-weekday">
            {d}
          </div>
        ))}
      </div>

      <div className="cal-grid">
        {days.map((day, idx) => {
          const dayEvents = day ? getEventForDay(day) : [];
          const isStriped =
            !day && idx < 7; // vùng crosshatch trên cùng

          return (
            <div
              key={idx}
              className={
                "cal-cell" + (isStriped ? " cal-cell--striped" : "")
              }
            >
              {day && (
                <>
                  <div className="cal-day-number">{day}</div>
                  <div className="cal-events-cell">
                    {dayEvents.map((ev) => (
                      <div
                        key={ev.id}
                        className="cal-event-pill"
                        title={ev.title}
                      >
                        {ev.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
