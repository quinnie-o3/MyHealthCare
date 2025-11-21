// src/pages/PatientDashboard/hooks/usePatientDashboard.js
import { useState } from "react";
import { useState, useEffect } from "react";
import { getMyProfile } from "../../../api/patientAPI";
import { useAuth } from "../../../context/AuthContext";

export function usePatientDashboard() {
  const [activeTab, setActiveTab] = useState("appointments");

  const user = {
    name: "Nguyen Van A",
    email: "23521111@gm.uit.edu.vn",
    phone: "+84 987 654 321",
    birthDate: "15/01/1990",
    address: "123 ABC Street, District 1, Ho Chi Minh City",
  };

  const stats = [
    { id: "upcoming", label: "Upcoming appointments", value: 2, icon: "📅" },
    { id: "records", label: "Medical records", value: 3, icon: "📄" },
    { id: "visited", label: "Completed visits", value: 2, icon: "✅" },
    {
      id: "health",
      label: "Health status",
      value: "Good",
      icon: "📈",
      highlight: true,
    },
  ];

  const appointments = [
    {
      id: 1,
      doctorName: "Dr. Nguyen Van Nam",
      specialty: "Internal Medicine",
      date: "15/11/2025",
      time: "10:00",
      status: "Confirmed",
      statusType: "success",
      location: "MyHealthCare Clinic, Branch 1",
      type: "General checkup – flu, medication prescribed",
    },
    {
      id: 2,
      doctorName: "Dr. Tran Thi Lan",
      specialty: "Pediatrics",
      date: "20/11/2025",
      time: "14:30",
      status: "Pending confirmation",
      statusType: "warning",
      location: "MyHealthCare Clinic, Branch 1",
      type: "Pediatric consultation",
    },
  ];

  const records = [
    {
      id: 1,
      title: "Blood test",
      doctorName: "Dr. Le Minh Tuan",
      date: "05/11/2025",
      category: "Lab result",
    },
    {
      id: 2,
      title: "Prescription",
      doctorName: "Dr. Nguyen Van Nam",
      date: "28/10/2025",
      category: "Prescription",
    },
    {
      id: 3,
      title: "Cardiac ultrasound",
      doctorName: "Dr. Le Minh Tuan",
      date: "15/10/2025",
      category: "Imaging",
    },
  ];

  const metrics = {
    bloodPressure: { value: "120/80 mmHg", status: "Normal" },
    heartRate: { value: "72 bpm", status: "Normal" },
    weight: { value: "68 kg", status: "Normal" },
    height: { value: "170 cm", status: "Normal" },
  };

  const profile = {
    fullName: user.name,
    email: user.email,
    phone: user.phone,
    birthDate: user.birthDate,
    address: user.address,
  };

  const tabs = [
    { id: "appointments", label: "Appointments" },
    { id: "records", label: "Medical records" },
    { id: "metrics", label: "Health metrics" },
    { id: "profile", label: "Profile" },
  ];

  return {
    user,
    stats,
    appointments,
    records,
    metrics,
    profile,
    tabs,
    activeTab,
    setActiveTab,
  };
}
