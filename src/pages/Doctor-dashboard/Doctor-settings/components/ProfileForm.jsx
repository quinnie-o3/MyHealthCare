import React from "react";

export default function ProfileForm({ formData, onChange, onSave }) {
  return (
    <form className="profile-card" onSubmit={onSave}>
      <div className="profile-header-row">
        <h2 className="profile-title">Edit Profile</h2>
      </div>

      <div className="profile-content">
        {/* Avatar */}
        <div className="profile-avatar-col">
          <div className="profile-avatar">
            {/* demo icon mặt cười, sau này thay ảnh doctor */}
            <span role="img" aria-label="avatar">
              🙂
            </span>
          </div>
          <button type="button" className="profile-avatar-edit">
            ✎
          </button>
        </div>

        {/* Form fields */}
        <div className="profile-form-grid">
          {/* Name & Email */}
          <div className="profile-field">
            <label>Your Name</label>
            <input
              className="profile-input"
              value={formData.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>

          <div className="profile-field">
            <label>Email address</label>
            <input
              className="profile-input profile-input--readonly"
              value={formData.email}
              readOnly
            />
          </div>

          {/* Passwords */}
          <div className="profile-field">
            <label>Current Password</label>
            <input
              className="profile-input profile-input--readonly"
              type="password"
              value={formData.currentPassword}
              readOnly
            />
          </div>

          <div className="profile-field">
            <label>New Password</label>
            <input
              className="profile-input"
              type="password"
              value={formData.newPassword}
              onChange={(e) => onChange("newPassword", e.target.value)}
            />
          </div>

          {/* DOB & Role */}
          <div className="profile-field">
            <label>Date of Birth</label>
            <div className="profile-input profile-input--select">
              <span>{formData.dob}</span>
              <span className="profile-select-arrow">▾</span>
            </div>
          </div>

          <div className="profile-field">
            <label>Role</label>
            <div className="profile-input profile-input--pill">
              {formData.role}
            </div>
          </div>

          {/* Country & City */}
          <div className="profile-field">
            <label>Country</label>
            <input
              className="profile-input"
              value={formData.country}
              onChange={(e) => onChange("country", e.target.value)}
            />
          </div>

          <div className="profile-field">
            <label>City</label>
            <input
              className="profile-input"
              value={formData.city}
              onChange={(e) => onChange("city", e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="profile-footer">
        <button type="submit" className="profile-save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
