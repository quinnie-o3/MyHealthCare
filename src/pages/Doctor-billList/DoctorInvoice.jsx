// src/Doctor-billList/DoctorInvoice.jsx
import React from "react";
import "./DoctorBillList.css";

import DoctorSidebar from "../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "./components/BillTopBar";
import InvoiceContent from "./components/InvoiceContent";

export default function DoctorInvoice() {
  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="transactions" activeSub="invoice" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <InvoiceContent />
        </div>
      </div>
    </div>
  );
}
