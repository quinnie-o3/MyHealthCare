import React from "react";

export default function BillTopBar() {
  return (
    <header className="bill-topbar">
      <div className="bill-breadcrumb">Pages / Transactions / Bill list</div>

      <div className="bill-topbar-right">
        <div className="bill-search">
          <input placeholder="Search for something" />
        </div>

        <button className="icon-btn">⚙️</button>
        <button className="icon-btn">🔔</button>

        <div className="bill-user">
          <div className="bill-user-info">
            <div className="bill-user-name">Ahmed Zaid Elsaid</div>
            <div className="bill-user-role">Admin</div>
          </div>
          <div className="bill-user-avatar" />
        </div>
      </div>
    </header>
  );
}
