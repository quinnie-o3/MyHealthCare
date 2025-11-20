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

          {/* Navigation */}
          <nav className="nav-menu">
            <Link to="/" className="nav-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About us
            </Link>
            <Link to="/medical" className="nav-link">
              Medical services
            </Link>
            <Link to="/signup" className="nav-link">
              Booking
            </Link>
          </nav>

          {/* Search & Auth */}
          <div className="header-actions">
            {/* <div className="search-box">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="search-input"
              />
            </div> */}
            
            <div className="auth-buttons">
              <Link to="/login" className="btn-login">
                Log in
              </Link>
              <Link to="/signup" className="btn-signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;