import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import Logo from "./Logo/Logo";
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Logo />

           <div className="header-right"> 
            <nav className="nav-menu">
              <Link
                to="/"
                className="nav-link"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                Home
              </Link>

              <Link to="/about" className="nav-link">
                About us
              </Link>

              {/* Services Dropdown */}
              <div
                className="dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="dropdown-toggle" type="button">
                  Services
                  <ChevronDown className="dropdown-icon" />
                </button>

                {dropdownOpen && (
                  <div className="dropdown-menu">
                    <Link to="/medical" className="dropdown-item">
                      Medical
                    </Link>
                    <Link to="/specialty" className="dropdown-item">
                      Specialties
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/signup" className="nav-link">
                Booking
              </Link>
            </nav>

            {/* Search & Auth */}
            <div className="header-actions">
              <div className="auth-buttons">
                <Link to="/login" className="btn-login">Log in</Link>
                <Link to="/signup" className="btn-signup">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
