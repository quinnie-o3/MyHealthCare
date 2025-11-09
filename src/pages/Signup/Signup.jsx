// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import { Heart, Shield, CheckCircle2 } from "lucide-react";
import Logo from "../../components/Logo/Logo"; // ← Thêm import này
import { Link } from "react-router-dom"; // ← Thêm Link nếu chưa có
import "./signup.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  if (submitted) {
    return (
      <div className="signup-page success">
        <div className="success-box">
          <div className="success-icon">
            <CheckCircle2 className="icon" />
          </div>
          <h2>Welcome to MyHealthCare+</h2>
          <p>
            Your account has been created successfully. Please check your email to verify your
            account.
          </p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">
            Back to Sign Up
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-left">
          <div>
            <Logo clickable={true} className="signup-logo" /> {/* ← Thay thế h1.brand */}
            <h2>Your Health, Our Priority</h2>
            <p>Join thousands of patients who trust us with their healthcare needs.</p>
          </div>
          <div className="left-info">
            <div className="info-item">
              <Shield className="icon" />
              <div>
                <h4>HIPAA Compliant</h4>
                <p>Your medical data is encrypted and secure.</p>
              </div>
            </div>
            <div className="info-item">
              <CheckCircle2 className="icon" />
              <div>
                <h4>24/7 Support</h4>
                <p>Our healthcare team is always here to help.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <div className="mobile-header">
            <Logo clickable={false} className="mobile-logo" /> {/* ← Thay thế phần mobile header */}
          </div>

          <h2>Create Account</h2>
          <p>Join us to start your healthcare journey</p>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && <p className="error">{errors.firstName}</p>}
              </div>

              <div className="col">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && <p className="error">{errors.lastName}</p>}
              </div>
            </div>

            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Phone</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <label>Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
            />
            {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}

            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

            <label className="checkbox">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
              <span>
                I agree to the Terms of Service and Privacy Policy, including HIPAA authorization
              </span>
            </label>
            {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>

            <p className="signin-text">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}