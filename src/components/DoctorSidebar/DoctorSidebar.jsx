import React from "react";
import "./DoctorSidebar.css";
import Logo from "../Logo/Logo";

export default function DoctorSidebar({ activeMenu, activeSub }) {
  return (
    <aside className="bill-sidebar">
      <div className="bill-sidebar-logo">
        <Logo />
      </div>

      <nav className="bill-sidebar-nav">
        <button
          className={
            "nav-item" + (activeMenu === "dashboard" ? " nav-item--active" : "")
          }
        >
          <span className="nav-icon">🏠</span>
          <span>Dashboard</span>
        </button>

        <button
          className={
            "nav-item" +
            (activeMenu === "transactions" ? " nav-item--active" : "")
          }
        >
          <span className="nav-icon">💳</span>
          <span>Transactions</span>
        </button>

        {/* submenu Transactions */}
        {activeMenu === "transactions" && (
          <div className="nav-sub">
            <button
              className={
                "nav-sub-item" +
                (activeSub === "bill-list" ? " nav-sub-item--active" : "")
              }
            >
              Bill list
            </button>
            <button
              className={
                "nav-sub-item" +
                (activeSub === "add-bill" ? " nav-sub-item--active" : "")
              }
            >
              Add Bill
            </button>
            <button
              className={
                "nav-sub-item" +
                (activeSub === "invoice" ? " nav-sub-item--active" : "")
              }
            >
              Invoice
            </button>
          </div>
        )}

        {/* các menu khác */}
        <button className="nav-item">
          <span className="nav-icon">👥</span>
          <span>Patients</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📅</span>
          <span>Appointments</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📆</span>
          <span>Calendar</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">💊</span>
          <span>Prescriptions</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">💬</span>
          <span>Messages</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">📊</span>
          <span>Reports</span>
        </button>
      </nav>

      <div className="bill-sidebar-bottom">
        <button className="nav-item">
          <span className="nav-icon">⚙️</span>
          <span>Settings</span>
        </button>
        <button className="nav-item">
          <span className="nav-icon">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
