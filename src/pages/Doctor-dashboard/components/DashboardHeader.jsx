// src/Doctor/components/DashboardHeader.jsx
import React from "react";
import Logo from "../../../components/Logo/Logo";

export default function DashboardHeader() {
  return (
    <header className="dd-header">
      <div className="dd-header-inner">
        <div className="dd-header-left">
          <Logo />
        </div>
        <div className="dd-header-right">
          <span className="dd-header-path">/ Dashboard</span>
        </div>
      </div>
    </header>
  );
}
