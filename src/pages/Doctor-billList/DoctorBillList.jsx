import React from "react";
import "./DoctorBillList.css";
import { useDoctorBillList } from "./hook/useDoctorBillList";

import DoctorSidebar from "../components/DoctorSidebar/DoctorSidebar";
import BillTopBar from "./components/BillTopBar";
import BillWeeklyActivity from "./components/BillWeeklyActivity";
import BillEarnings from "./components/BillEarnings";
import BillTransactions from "./components/BillTransactions";

export default function DoctorBillList() {
  const {
    activeTab,
    setActiveTab,
    page,
    setPage,
    weeklyActivity,
    earnings,
    transactions,
  } = useDoctorBillList();

  return (
    <div className="bill-page">
      <BillSidebar />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content">
          <div className="bill-top-row">
            <BillWeeklyActivity data={weeklyActivity} />
            <BillEarnings data={earnings} />
          </div>

          <BillTransactions
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            page={page}
            setPage={setPage}
            transactions={transactions}
          />
        </div>
      </div>
    </div>
  );
}
