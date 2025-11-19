// src/pages/Doctor-prescriptions/hooks/useDoctorPrescriptionList.js
import { useState } from "react";

const demoPrescriptions = [
  {
    id: 1,
    patientName: "Mariam Ahmed Omar",
    avatar: "🧑‍⚕️",
    category: "Syrup",
    categoryType: "syrup",
    content: "3x Drugs",
    date: "13/02/2022",
    notes: "sjkdgajkbasjbdsdsa",
  },
  {
    id: 2,
    patientName: "Mena Ali",
    avatar: "🧑‍🎓",
    category: "Drops",
    categoryType: "drops",
    content: "1x Tests  •  1x Drugs",
    date: "13/02/2022",
    notes: "sadsasdasdaddsa",
  },
  {
    id: 3,
    patientName: "Butros Wajdi Botros",
    avatar: "👨‍💼",
    category: "Tablets",
    categoryType: "tablets",
    content: "2x Drugs",
    date: "13/02/2022",
    notes: "ddsgggdsdsdsdsgdg",
  },
];

export function useDoctorPrescriptionList() {
  const [search, setSearch] = useState("");
  const [items] = useState(demoPrescriptions);

  const filtered = items.filter((p) =>
    p.patientName.toLowerCase().includes(search.toLowerCase())
  );

  const resetFilters = () => {
    setSearch("");
    // sau này thêm date/type/patient filter thì clear ở đây
  };

  return { search, setSearch, prescriptions: filtered, resetFilters };
}
