// src/Doctor-billList/hook/useDoctorAddBill.js
import { useState } from "react";

export function useDoctorAddBill() {
  const [formData, setFormData] = useState({
    patient: "Charlene Reed",
    paymentMethod: "Visa",
    totalAmount: "45962",
    paymentStatus: "Paid",
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

    // TODO: sau này gọi API tạo bill
    setTimeout(() => {
      console.log("Create invoice payload:", formData);
      setLoading(false);
      alert("Invoice created (demo)!");
    }, 700);
  };

  return { formData, handleChange, handleSubmit, loading };
}
