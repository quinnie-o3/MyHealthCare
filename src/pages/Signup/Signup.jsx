// src/pages/Signup/Signup.jsx
import React, { useState } from "react";
import { Heart, Shield, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import Logo from "../../components/Logo/Logo"; // ← Thêm import này
import { Link, useNavigate } from "react-router-dom"; // ← Thêm Link nếu chưa có
import "./signup.css";
import { register } from "../../api/authAPI"

export default function () {

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_num: "",
    date_of_birth: "",
    password: "",
    password_confirm: "",
    gender: "",
    role: "patient",
    address: "",
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone_num.trim()) newErrors.phone_num = "Phone number is required";
    if (!formData.date_of_birth) newErrors.date_of_birth = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required"; //Gender is choice.
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    if (formData.password !== formData.password_confirm)
      newErrors.password_confirm = "Passwords do not match";
    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms and conditions";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    //Thực hiện validation và lấy lỗi
    e.preventDefault();
    const validationErrors = validateForm();
    //Cập nhật state errors
    setErrors(validationErrors);

    //Kiểm tra nếu có bất kí lỗi nào
    if (Object.keys(validationErrors).length > 0){
      //Nếu có lỗi, không gọi API, và không setSubmitted(true)
      //user sẽ thấy các thông báo lỗi trên form
      return;
    }
    const dataWithRole = { 
        ...formData, 
        role: "patient" 
    };

    const {
      termsAccepted, 
      ...dataToSend
    } = dataWithRole;
    //Bắt đầu gọi API
    setLoading(true); //kích hoạt trạng thái loading
    setErrors({}); // Clear errors trước khi submit
    try {
      const response = await register(dataToSend);
      console.log("✅ Register API call thành công - không có exception");
      console.log("Register response:", response);
      console.log("Register response type:", typeof response);
      console.log("Register response keys:", response && typeof response === 'object' ? Object.keys(response) : 'no keys');
      console.log("Register response.success:", response?.success);
 
      // Nếu không có exception, nghĩa là đăng ký thành công (backend đã tạo user)
      // KHÔNG lưu tokens khi sign up - user phải login lại để bảo mật hơn
      // Backend có thể trả về tokens nhưng chúng ta không sử dụng
      
      // Hiển thị thông báo thành công và redirect về login
      // Ưu tiên message từ backend, nếu không có thì dùng message mặc định
      const successMessage = response?.message || 
                           response?.detail || 
                           "Register successfully! Please log in to continue.";
      
      console.log("✅ Đăng ký thành công! User cần login để tiếp tục...");
      alert(successMessage);
      navigate("/login");
      
    } catch (error) {
      // CHỈ vào đây khi có exception (lỗi validation hoặc lỗi server)
      console.error("❌ Register error - có exception:", error);
      console.error("Error type:", typeof error);
      console.error("Error value:", error);
      console.error("Error keys:", error && typeof error === 'object' && !Array.isArray(error) ? Object.keys(error) : 'no keys');

      // Xử lý lỗi từ backend
      // Lưu ý: authAPI.js throw error.response.data, không phải error object đầy đủ
      const backendData = error; // error đã là error.response.data từ authAPI.js
      const backendErrors = {};

      // Xử lý các trường hợp error khác nhau
      if (!backendData) {
        // Error null/undefined
        setErrors({ general: 'Network error. Please check your connection and try again.' });
      }
        else if (Array.isArray(backendData)) {
        // Error là array
        setErrors({ general: backendData[0] || 'Register failed. Please try again.' });
      } else if (typeof backendData === 'object') {
        // Error là object - xử lý như bình thường
        Object.keys(backendData).forEach((key) => {
          if (Array.isArray(backendData[key])) {
            // Lấy lỗi đầu tiên trong mảng (theo chuẩn DRF)
            backendErrors[key] = backendData[key][0]; 
          } else if (typeof backendData[key] === 'string') {
            // Xử lý các lỗi dạng string
            backendErrors[key] = backendData[key];
          } else if (backendData[key] !== null && backendData[key] !== undefined) {
            // Xử lý các lỗi không phải dạng mảng hoặc string
            backendErrors[key] = JSON.stringify(backendData[key]);
          }
        });

        // Xử lý lỗi chung (không thuộc về field nào) mà DRF hay trả về
        if (backendErrors.detail) {
            backendErrors.general = backendErrors.detail;
            delete backendErrors.detail;
        }
        if (backendErrors.non_field_errors) {
            backendErrors.general = backendErrors.non_field_errors;
            delete backendErrors.non_field_errors;
        }
        if (backendErrors.message) {
            backendErrors.general = backendErrors.message;
            delete backendErrors.message;
        }

        // Nếu có lỗi email (email đã tồn tại), clear email và password fields
        if (backendErrors.email) {
          setFormData((prev) => ({
            ...prev,
            email: '', // Clear email để user phải nhập lại
            password: '', // Clear password để bảo mật
            password_confirm: '', // Clear confirm password
          }));
        }

        // Nếu có lỗi phone (phone đã tồn tại), clear phone field
        if (backendErrors.phone_num) {
          setFormData((prev) => ({
            ...prev,
            phone_num: '',
          }));
        }

        // Nếu không có lỗi nào được set, hiển thị lỗi chung
        if (Object.keys(backendErrors).length === 0) {
          setErrors({ general: 'Register failed. Please check your information and try again.' });
        } else {
          setErrors(backendErrors); // Cập nhật state errors với lỗi từ backend
        }
      } else {
        // Lỗi không xác định
        console.error("Unknown error format:", backendData);
        setErrors({ general: 'An unexpected error occurred. Please try again later.' });
      }

    } finally {
      setLoading(false); //kết thúc trạng thái loading
    }
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

          <h2> Create Account</h2>
          <p>Join us to start your healthcare journey</p>
          <form onSubmit={handleSubmit}>
            {errors.general && (
              <div className="general-error">
                <AlertCircle className="error-icon" />
                <span>{errors.general}</span>
              </div>
            )}
            {/* Hàng 1: Full Name */}
            <div className="row">
              <div className="col">
                <label>Full Name</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Nguyen Van A"
                  className={errors.full_name ? 'error' : ''}
                />
                {errors.full_name && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.full_name}
                  </span>
                )}
              </div>
            </div>

            {/* Hàng 2: Email */}
            <div className="row">
              <div className="col">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className={errors.email ? 'error' : ''} />
                {errors.email && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.email}
                  </span>
                )}
              </div>
            </div>

            {/* Hàng 3: Phone Number */}
            <div className="row">
              <div className="col">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone_num"
                  value={formData.phone_num}
                  onChange={handleChange}
                  placeholder="0901234567"
                  className={errors.phone_num ? 'error' : ''}
                />
                {errors.phone_num && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.phone_num}
                  </span>
                )}
              </div>
            </div>

            {/* Hàng 4: Gender và Date of Birth (Đã hợp nhất) */}
            <div className="row">
              <div className="col">
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={errors.gender ? 'error' : ''}
                >
                  <option value="" disabled>--Choose your gender--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.gender}
                  </span>
                )}
              </div>
          </div>
            <div className="row">
              <div className="col">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="date_of_birth"
                  value={formData.date_of_birth}
                  onChange={handleChange}
                  className={errors.date_of_birth ? 'error' : ''}
                />
                {errors.date_of_birth && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.date_of_birth}
                  </span>
                )}
              </div>
            </div>
{/* Hàng Mới: Address */}
<div className="row">
    <div className="col">
        <label>Address</label>
        <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="123 Example Street, City, Country"
            className={errors.address ? 'error' : ''}
        />
        {errors.address && (
          <span className="error-text">
            <XCircle className="error-icon-small" />
            {errors.address}
          </span>
        )}
    </div>
</div>
            {/* Hàng 5: Password */}
            <div className="row">
              <div className="col">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Mật khẩu (ít nhất 8 ký tự)"
                  className={errors.password ? 'error' : ''}
                />
                {errors.password && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.password}
                  </span>
                )}
              </div>
            </div>

            {/* Hàng 6: Confirm Password */}
            <div className="row">
              <div className="col">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleChange}
                  placeholder="Nhập lại mật khẩu"
                  className={errors.password_confirm ? 'error' : ''}
                />
                {errors.password_confirm && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.password_confirm}
                  </span>
                )}
              </div>
            </div>

            {/* Hàng 7: Checkbox */}
            <div className="row">
              <div className="col">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  <span>
                    I agree to the **Terms of Service and Privacy Policy**, including HIPAA authorization
                  </span>
                </label>
                {errors.termsAccepted && (
                  <span className="error-text">
                    <XCircle className="error-icon-small" />
                    {errors.termsAccepted}
                  </span>
                )}
              </div>
            </div>

            {/* Nút Submit và Link */}
            <button type="submit" className="btn-primary" disabled={loading}> 
              {loading ? 'Processing...' : 'Create Account'}
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