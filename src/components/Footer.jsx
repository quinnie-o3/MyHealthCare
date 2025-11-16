// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import Logo from "./Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: brand + mô tả + social */}
        <div className="footer-column footer-brand">
          <Logo clickable={true} />
          <p className="footer-text">
            Your trusted partner in healthcare, providing comprehensive medical
            services with compassion and excellence.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Cột 2: Quick Links */}
        <div className="footer-column">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              {/* tới trang Home và cuộn xuống Services */}
              <a href="/#services">Services</a>
            </li>
            <li>
              <Link to="/specialty">Specialties</Link>
            </li>
            <li>
              {/* mở Gmail compose như nút Contact Us trên */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@myhealthcare.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Cột 3: Services */}
        <div className="footer-column">
          <h3 className="footer-title">Services</h3>
          <ul className="footer-links">
            <li>
              <a href="/medical">Health Checkup</a>
            </li>
            <li>
              <a href="/medical">Cancer Screening</a>
            </li>
            <li>
              <Link to="/specialty">Imaging Diagnosis</Link>
            </li>
            <li>
              <Link to="/specialty">Pediatrics</Link>
            </li>
            <li>
              <Link to="/specialty">Gynecology</Link>
            </li>
          </ul>
        </div>

        {/* Cột 4: Contact */}
        <div className="footer-column">
          <h3 className="footer-title">Contact Us</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} />
              <span>
                123 Healthcare Street, Medical District,
                <br />
                City 12345
              </span>
            </li>
            <li>
              <Phone size={18} />
              <a href="tel:+15551234567">+1 (555) 123-4567</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:info@myhealthcare.com">info@myhealthcare.com</a>
            </li>
            <li>
              <Clock size={18} />
              <span>24/7 Emergency Services</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyHealthCare+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
