import { useState } from "react";

export function useDoctorBookAppointment() {
  const [formData, setFormData] = useState({
    patient: "",
    firstName: "",
    lastName: "",
    dateTime: "01/09/2025 12:30",
    status: "Pending",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // TODO: call API thật sau này
    setTimeout(() => {
      console.log("Book appointment:", formData);
      setLoading(false);
      alert("Booked (demo)!");
    }, 700);
  };

  return { formData, handleChange, handleSubmit, loading };
}
