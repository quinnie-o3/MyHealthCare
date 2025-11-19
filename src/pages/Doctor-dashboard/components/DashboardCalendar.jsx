// src/Doctor/components/DashboardCalendar.jsx
import React from "react";

export default function DashboardCalendar({ calendar }) {
  const daysHeader = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // layout giống fix cứng như design, không cần logic phức tạp
  const days = [
    null,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
  ];

  return (
    <div className="dd-calendar-card">
      <div className="dd-card-header dd-card-header--between">
        <h3>Calendar</h3>
        <span className="dd-calendar-month">{calendar.monthLabel}</span>
      </div>
      <div className="dd-calendar-grid">
        {daysHeader.map((d) => (
          <div
            key={d}
            className="dd-calendar-day dd-calendar-day--muted"
          >
            {d}
          </div>
        ))}

        {days.map((day, index) => {
          if (!day) {
            return <div key={"empty-" + index} className="dd-calendar-day" />;
          }

          const isActive = day === calendar.activeDay;
          const hasDot = calendar.dotDays.includes(day);

          let className = "dd-calendar-day";
          if (isActive) className += " dd-calendar-day--active";
          if (hasDot) className += " dd-calendar-day--dot";

          return (
            <div key={day} className={className}>
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
