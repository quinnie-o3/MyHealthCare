import { useState } from "react";

export function useDoctorAppointmentList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rows = [
    {
      id: 1,
      patient: "Ahmed Hesham Elsayed",
      status: "Pending",
      statusType: "pending",
      notes: "Checkup",
      time: "07:00",
      date: "01/11/2025",
      avatarColor: "#f97316",
    },
    {
      id: 2,
      patient: "Mona El Shazly",
      status: "Pending",
      statusType: "pending",
      notes: "New Patient",
      time: "06:30",
      date: "01/11/2025",
      avatarColor: "#6b7280",
    },
    {
      id: 3,
      patient: "Ashraf Abd El Baky",
      status: "Cancelled",
      statusType: "cancelled",
      notes: "Surgery",
      time: "20:30",
      date: "08/08/2025",
      avatarColor: "#ef4444",
    },
    {
      id: 4,
      patient: "Ahmed Hesham Elsayed",
      status: "Complete",
      statusType: "complete",
      notes: "N/A",
      time: "21:00",
      date: "04/07/2025",
      avatarColor: "#3b82f6",
    },
    {
      id: 5,
      patient: "Amad Diallo",
      status: "Cancelled",
      statusType: "cancelled",
      notes: "Weekly Checkup",
      time: "52",
      date: "03/07/2025",
      avatarColor: "#facc15",
    },
    {
      id: 6,
      patient: "Nossier Mazrawy",
      status: "Complete",
      statusType: "complete",
      notes: "N/A",
      time: "13",
      date: "11/06/2025",
      avatarColor: "#0ea5e9",
    },
    {
      id: 7,
      patient: "Hady Maguire",
      status: "Complete",
      statusType: "complete",
      notes: "Consultation",
      time: "635",
      date: "28/04/2025",
      avatarColor: "#22c55e",
    },
  ];

  const filtered = rows.filter((row) =>
    row.patient.toLowerCase().includes(search.toLowerCase())
  );

  return { rows: filtered, search, setSearch, page, setPage };
}
