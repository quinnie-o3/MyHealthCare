// src/Doctor-calendar/hook/useDoctorCalendar.js
import { useState } from "react";

export function useDoctorCalendar() {
  const [viewMode, setViewMode] = useState("Month");
  const [monthLabel] = useState("January 2025");

  // demo events
  const events = [
    { id: 1, day: 5, title: "Design Conference" },
    { id: 2, day: 20, title: "Weekend Festival" },
    { id: 3, day: 27, title: "Glastonbury Festival" },
  ];

  // days for a 7x6 grid (some empty)
  const days = [
    null, null, null, null, null, null, 1,
    2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15,
    16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29,
    30, 31, null, null, null, null, null,
  ];

  return { viewMode, setViewMode, monthLabel, days, events };
}
