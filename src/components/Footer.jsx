import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock
} from "lucide-react";
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
              Your trusted partner in healthcare, providing comprehensive medical services with compassion and excellence.
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
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Services</a></li>
              <li><a href="#specialties" className="footer-link">Specialties</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-list">
              <li><a href="#" className="footer-link">Health Checkup</a></li>
              <li><a href="#" className="footer-link">Cancer Screening</a></li>
              <li><a href="#" className="footer-link">Imaging Diagnosis</a></li>
              <li><a href="#" className="footer-link">Pediatrics</a></li>
              <li><a href="#" className="footer-link">Gynecology</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-list">
              <li className="contact-item">
                <MapPin className="contact-icon" />
                <span className="contact-text">123 Healthcare Street, Medical District, City 12345</span>
              </li>
              <li className="contact-item">
                <Phone className="contact-icon" />
                <span className="contact-text">+1 (555) 123-4567</span>
              </li>
              <li className="contact-item">
                <Mail className="contact-icon" />
                <span className="contact-text">info@myhealthcare.com</span>
              </li>
              <li className="contact-item">
                <Clock className="contact-icon" />
                <span className="contact-text">24/7 Emergency Services</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 MyHealthCare+. All rights reserved.
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