import React, { useState } from "react";
import "./login.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Khi nhấn nút Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // TODO: Gọi API đăng nhập hoặc điều hướng
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Sign In</h1>
        <p className="subtitle">Welcome to MyHealthCare!</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Phone / Patient ID</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your phone number or ID"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>

        <div className="footer-text">
          <a href="#">Forgot password?</a>
        </div>

        <div className="signup-link">
          Don't have an account? <a href="#">Sign up now</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
