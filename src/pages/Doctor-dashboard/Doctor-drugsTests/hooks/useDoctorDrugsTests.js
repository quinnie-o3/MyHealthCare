// src/pages/Doctor-drugsTests/hooks/useDoctorDrugsTests.js
import { useState } from "react";

const demoRows = [
  {
    id: 1,
    patientName: "Mariam Ahmed Omar",
    avatar: "👩‍⚕️",
    type: "Syrup",
    typeKey: "syrup",
    content: "3x Drugs",
    date: "13/02/2022",
    notes: "sjkdgajkbasjbdsdsa",
  },
  {
    id: 2,
    patientName: "Mena Ali",
    avatar: "🧑‍🎓",
    type: "Drops",
    typeKey: "drops",
    content: "1x Tests\n1x Drugs",
    date: "13/02/2022",
    notes: "sadsasdasdaddsa",
  },
  {
    id: 3,
    patientName: "Butros Wagdy Botros",
    avatar: "👨‍💼",
    type: "Tablets",
    typeKey: "tablets",
    content: "2x Drugs",
    date: "13/02/2022",
    notes: "ddsgggdsdsdsdsgdg",
  },
];

export function useDoctorDrugsTests() {
  const [mode, setMode] = useState("tests"); // "drugs" | "tests"
  const [search, setSearch] = useState("");
  const [rows] = useState(demoRows);

  const filtered = rows.filter((r) =>
    r.patientName.toLowerCase().includes(search.toLowerCase())
  );

  const resetFilters = () => setSearch("");

  return {
    mode,
    setMode,
    search,
    setSearch,
    rows: filtered,
    resetFilters,
  };
}
