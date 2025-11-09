import React, { useState } from 'react';
import { Shield, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import Logo from '../../components/Logo/Logo'; // ← Thêm import này
import './login.css'; 
import { Link } from 'react-router-dom';

export default function Login() {
  const [loginMethod, setLoginMethod] = useState('patientId');
  const [formData, setFormData] = useState({
    patientId: '',
    phone: '',
    email: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [signedIn, setSignedIn] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (loginMethod === 'patientId' && !formData.patientId.trim()) {
      newErrors.patientId = 'Patient ID is required';
    }
    if (loginMethod === 'phone' && !formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    if (loginMethod === 'email' && !formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) setSignedIn(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleLoginMethodChange = (method) => setLoginMethod(method);

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
        <Logo clickable={true} className="login-logo" /> {/* ← Thay thế h1 */}
        <h2>Welcome Back</h2>
        <p>Sign in to access your health dashboard</p>
      </div>

      <div className="signin-right">
        <h2>Sign In</h2>
        <div className="signin-tabs">
          {['patientId', 'phone', 'email'].map((method) => (
            <button
              key={method}
              className={loginMethod === method ? 'active' : ''}
              onClick={() => handleLoginMethodChange(method)}
            >
              {method === 'patientId'
                ? 'Patient ID'
                : method.charAt(0).toUpperCase() + method.slice(1)}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="signin-form">
          {loginMethod === 'patientId' && (
            <input
              type="text"
              name="patientId"
              placeholder="Enter your Patient ID"
              value={formData.patientId}
              onChange={handleChange}
            />
          )}
          {loginMethod === 'phone' && (
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone"
              value={formData.phone}
              onChange={handleChange}
            />
          )}
          {loginMethod === 'email' && (
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

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