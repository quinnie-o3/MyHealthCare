import { useState } from "react";

export function useDoctorReports() {
  const [period, setPeriod] = useState("October");

  const stats = [
    {
      id: 1,
      label: "Total Patients",
      value: "409",
      change: "8.5% Up from yesterday",
      positive: true,
    },
    {
      id: 2,
      label: "New Patients",
      value: "13",
      change: "1.3% Up from past week",
      positive: true,
    },
    {
      id: 3,
      label: "Appointments",
      value: "24",
      change: "1.8% Up from past week",
      positive: true,
    },
    {
      id: 4,
      label: "Earnings",
      value: "27,000 EGP",
      change: "4.3% Down from yesterday",
      positive: false,
    },
  ];

  return {
    period,
    setPeriod,
    stats,
  };
}
