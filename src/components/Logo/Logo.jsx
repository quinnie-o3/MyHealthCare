import React from "react";
import { Link } from "react-router-dom";
import { Stethoscope } from "lucide-react";
import "./Logo.css";

const Logo = ({ clickable = true, className = "" }) => {
  const logoContent = (
    <div className={`logo-wrapper ${className}`}>
      <div className="logo-icon">
        <Stethoscope className="logo-icon-svg" />
      </div>
      <h1 className="logo">
        <span className="logo-myhealth">MyHealth</span>
        <span className="logo-care">Care</span>
      </h1>
    </div>
  );

  return clickable ? (
    <Link to="/" className="logo-container">
      {logoContent}
    </Link>
  ) : (
    <div className="logo-container">
      {logoContent}
    </div>
  );
};

export default Logo;