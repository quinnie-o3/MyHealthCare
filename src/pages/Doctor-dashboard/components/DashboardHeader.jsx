// src/pages/Doctor-dashboard/components/DashboardHeader.jsx
import React from "react";
import { Link } from "react-router-dom"; // ⬅️ THÊM DÒNG NÀY
import Logo from "../../../components/Logo/Logo";

const DashboardHeader = () => {
  return (
    <header className="dd-header">
      <div className="dd-header-inner">
        <div className="dd-header-left">
          <Logo />
        </div>
        <div className="dd-header-right">
          {/* Nếu đây là breadcrumb cho bác sĩ thì path nên là /doctor/dashboard */}
          <Link to="/doctor/dashboard" className="dd-header-path">
            / Dashboard
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
