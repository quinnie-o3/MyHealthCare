import { useState } from "react";

export function useDoctorViewPatient() {
  const [patient] = useState({
    firstName: "Ahmed",
    lastName: "Tamer Fawzy",
    email: "tayseer123@gmail.com",
    phone: "01233443453",
    age: "22",
    gender: "Male",
    records: "No files attached",
  });

  const [history] = useState([
    {
      id: 1,
      type: "Appointment",
      billType: "-",
      title: "Checkup",
      date: "14 Feb 2019",
      invoice: "-",
      status: "Pending",
      statusType: "pending",
    },
    {
      id: 2,
      type: "Transaction",
      billType: "Cash",
      title: "-",
      date: "14 Feb 2019",
      invoice: "#126234",
      status: "Cancelled",
      statusType: "cancelled",
    },
    {
      id: 3,
      type: "Transaction",
      billType: "Cash",
      title: "-",
      date: "14 Feb 2019",
      invoice: "#143243",
      status: "Complete",
      statusType: "complete",
    },
    {
      id: 4,
      type: "Prescription",
      billType: "-",
      title: "Severe Fever",
      date: "14 Feb 2019",
      invoice: "-",
      status: "-",
      statusType: "none",
    },
  ]);

  return { patient, history };
}
