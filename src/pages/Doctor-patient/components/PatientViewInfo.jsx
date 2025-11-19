import React from "react";

export default function PatientViewInfo({ patient }) {
  return (
    <section className="patient-view-section">
      <h2 className="patient-subtitle">Personal Information</h2>

      <div className="patient-view-header">
        <div className="patient-view-avatar">😊</div>

        <div className="patient-view-grid">
          <div className="patient-field">
            <label>First Name</label>
            <input
              className="patient-input patient-input--readonly"
              value={patient.firstName}
              readOnly
            />
          </div>

          <div className="patient-field">
            <label>Last Name</label>
            <input
              className="patient-input patient-input--readonly"
              value={patient.lastName}
              readOnly
            />
          </div>

          <div className="patient-field">
            <label>Email</label>
            <input
              className="patient-input patient-input--readonly patient-input--link"
              value={patient.email}
              readOnly
            />
          </div>

          <div className="patient-field">
            <label>Phone Number*</label>
            <input
              className="patient-input patient-input--readonly patient-input--link"
              value={patient.phone}
              readOnly
            />
          </div>

          <div className="patient-field">
            <label>Age*</label>
            <input
              className="patient-input patient-input--readonly patient-input--small"
              value={patient.age}
              readOnly
            />
          </div>

          <div className="patient-field">
            <label>Gender*</label>
            <div className="patient-input patient-input--readonly patient-input--select">
              {patient.gender}
              <span className="patient-select-arrow">▾</span>
            </div>
          </div>

          <div className="patient-field">
            <label>Records</label>
            <div className="patient-input patient-input--readonly patient-input--link">
              {patient.records}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
