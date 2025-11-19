import React from "react";
import Logo from "../../components/Logo/Logo";

export default function BillSidebar() {
  return (
    <aside className="bill-sidebar">
      <div className="bill-sidebar-logo">
        <Logo />
      </div>

      <nav className="bill-sidebar-nav">
        <button className="nav-item">
          <span className="nav-icon">🏠</span>
          <span>Dashboard</span>
        </button>

        <button className="nav-item nav-item--active">
          <span className="nav-icon">💳</span>
          <span>Transactions</span>
        </button>

        <div className="nav-sub">
          <button className="nav-sub-item nav-sub-item--active">
            Bill list
          </button>
          <button className="nav-sub-item">Add Bill</button>
          <button className="nav-sub-item">Invoice</button>
        </div>

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
