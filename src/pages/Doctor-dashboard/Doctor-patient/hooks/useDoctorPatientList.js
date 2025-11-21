import { useState } from "react";

export function useDoctorPatientList() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const patients = [
    {
      id: 1,
      name: "Ahmed Tamer Fawzy",
      gender: "Male",
      number: "012378912343",
      age: 63,
      email: "abc@sdgmail.com",
      avatarColor: "#f97316",
    },
    {
      id: 2,
      name: "Mona El Shazly",
      gender: "Female",
      number: "0123464335",
      age: 13,
      email: "abc@sdgmail.com",
      avatarColor: "#6b7280",
    },
    {
      id: 3,
      name: "Ashraf Abd El Baky",
      gender: "Male",
      number: "02333211111",
      age: 635,
      email: "abc@sdgmail.com",
      avatarColor: "#ef4444",
    },
    {
      id: 4,
      name: "Salma Abu Seif",
      gender: "Female",
      number: "123123232332",
      age: 67,
      email: "abc@sdgmail.com",
      avatarColor: "#3b82f6",
    },
    {
      id: 5,
      name: "Amad Diallo",
      gender: "Male",
      number: "123213312231",
      age: 52,
      email: "abc@sdgmail.com",
      avatarColor: "#facc15",
    },
  ];

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    search,
    setSearch,
    page,
    setPage,
    patients: filteredPatients,
  };
}
