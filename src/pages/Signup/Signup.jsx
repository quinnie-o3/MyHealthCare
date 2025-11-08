import React, { useState } from "react";
import "./signup.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Khi người dùng nhập
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Khi submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    // TODO: Gọi API đăng ký, hoặc chuyển hướng sang Login
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="signup-group">
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

          <div className="signup-group">
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

          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>

        <div className="signin-link">
          Have an account? <a href="#">Sign in</a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
