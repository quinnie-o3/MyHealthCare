import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About */}
          <div className="footer-section">
            <Logo clickable={false} className="footer-logo-custom" />
            <p className="footer-description">
              Your trusted partner in health and wellness.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Linkedin className="social-icon" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/medical" className="footer-link">Services</Link></li>
              <li><Link to="/booking" className="footer-link">Booking</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">General Medicine</a></li>
              <li><a href="#" className="footer-link">Pediatrics</a></li>
              <li><a href="#" className="footer-link">Cardiology</a></li>
              <li><a href="#" className="footer-link">Dermatology</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">+1 (555) 123-4567</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <span className="contact-text">info@myhealthcare.com</span>
              </li>
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span className="contact-text">123 Health St, Medical City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 MyHealthCare. All rights reserved.
            </p>
            <div className="footer-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
