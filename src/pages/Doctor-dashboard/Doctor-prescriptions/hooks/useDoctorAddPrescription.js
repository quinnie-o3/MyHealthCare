// src/pages/Doctor-prescriptions/hooks/useDoctorAddPrescription.js
import { useState } from "react";

export function useDoctorAddPrescription() {
  const [formData, setFormData] = useState({
    patient: "",
    title: "",
    drug: {
      selectDrug: "",
      name: "",
      category: "",
      dosageType: "",
      description: "",
      duration: "",
      dosage: "",
      mgml: "",
      notes: "",
    },
    test: {
      selectTest: "",
    },
  });

  const handleChange = (path, value) => {
    // path dạng "drug.name", "patient"
    const parts = path.split(".");
    if (parts.length === 1) {
      setFormData((prev) => ({ ...prev, [parts[0]]: value }));
    } else {
      const [group, field] = parts;
      setFormData((prev) => ({
        ...prev,
        [group]: {
          ...prev[group],
          [field]: value,
        },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New prescription:", formData);
    alert("Created prescription (demo)");
  };

  return { formData, handleChange, handleSubmit };
}
