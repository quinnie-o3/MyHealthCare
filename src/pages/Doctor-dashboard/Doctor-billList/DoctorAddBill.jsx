// src/Doctor-billList/DoctorAddBill.jsx
import React from "react";
import "./DoctorBillList.css"; // dùng chung CSS transactions

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "./components/BillTopBar";
import AddBillForm from "./components/AddBillForm";
import { useDoctorAddBill } from "./hooks/useDoctorAddBill";

export default function DoctorAddBill() {
  const { formData, handleChange, handleSubmit, loading } =
    useDoctorAddBill();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="transactions" activeSub="add-bill" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <div className="addbill-card">
            <h2 className="addbill-title">Add Bill</h2>

            <AddBillForm
              formData={formData}
              onChange={handleChange}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
