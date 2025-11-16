import React, { useState } from "react";
import { CheckCircle2, Eye, EyeOff } from "lucide-react";
import Logo from "../../components/Logo/Logo";
import "./Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [loginMethod, setLoginMethod] = useState("phone"); // mặc định: phone
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (loginMethod === "phone") {
      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      }
    }

    if (loginMethod === "email") {
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email is invalid";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // sau này bạn thay chỗ này bằng gọi API
      setSignedIn(true);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleLoginMethodChange = (method) => {
    setLoginMethod(method);
    // clear lỗi & giá trị input kia cho gọn
    setErrors({});
  };

  if (signedIn) {
    return (
      <div className="signin-success">
        <div className="success-box">
          <CheckCircle2 className="success-icon" />
          <h2>Welcome Back!</h2>
          <p>You have successfully signed in to MyHealthCare+</p>
          <Link to="/" className="btn-back">
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="signin-container">
      <div className="signin-left">
        <Logo clickable={true} className="login-logo" />
        <h2>Welcome Back</h2>
        <p>Sign in to access your health dashboard</p>
      </div>

      <div className="signin-right">
        <h2><b>Sign In</b></h2>

        {/* Tabs: chỉ còn Phone & Email */}
        <div className="signin-tabs">
          {["phone", "email"].map((method) => (
            <button
              key={method}
              type="button"
              className={loginMethod === method ? "active" : ""}
              onClick={() => handleLoginMethodChange(method)}
            >
              {method === "phone"
                ? "Phone"
                : method.charAt(0).toUpperCase() + method.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          {loginMethod === "phone" && (
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "input-error" : ""}
              />
              {errors.phone && (
                <span className="error-text">{errors.phone}</span>
              )}
            </div>
          )}

          {loginMethod === "email" && (
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && (
                <span className="error-text">{errors.email}</span>
              )}
            </div>
          )}

          <div className="form-group password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "input-error" : ""}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
            {errors.password && (
              <span className="error-text">{errors.password}</span>
            )}
          </div>

          {/* (tuỳ chọn) Remember me */}
          {/* <label className="remember-me">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            Remember me
          </label> */}

          <button type="submit" className="btn-signin">
            Sign In
          </button>
        </form>

        <p className="signin-footer">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
