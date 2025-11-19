import { useState } from "react";

const emptyPatient = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  age: "",
  gender: "Male",
};

export function useDoctorPatientForm(initialData) {
  const [formData, setFormData] = useState(initialData || emptyPatient);
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

    // TODO: gọi API thật sau này
    setTimeout(() => {
      console.log("Patient form submit:", formData);
      setLoading(false);
      alert("Saved (demo)");
    }, 700);
  };

  return { formData, handleChange, handleSubmit, loading };
}
