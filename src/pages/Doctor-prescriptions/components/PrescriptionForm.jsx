// src/pages/Doctor-prescriptions/components/PrescriptionForm.jsx
import React from "react";

export default function PrescriptionForm({
  formData,
  onChange,
  onSubmit,
}) {
  const { patient, title, drug, test } = formData;

  return (
    <form className="presc-create-card" onSubmit={onSubmit}>
      <h2 className="presc-create-title">Create New Prescriptions</h2>

      {/* Header row: Select patient + Title */}
      <div className="presc-create-header-row">
        <div className="presc-field">
          <label>
            Select Patient<span className="required">*</span>
          </label>
          <div className="presc-input presc-input--select presc-input--error">
            <span>{patient || "Select Patient"}</span>
            <span className="presc-select-arrow">▾</span>
          </div>
        </div>

        <div className="presc-field">
          <label>Title</label>
          <input
            className="presc-input presc-input--green"
            value={title}
            onChange={(e) => onChange("title", e.target.value)}
          />
        </div>
      </div>

      {/* Add Drug */}
      <div className="presc-section">
        <h3 className="presc-section-title">Add Drug</h3>

        <div className="presc-drug-grid">
          <div className="presc-field">
            <label>Select Drug</label>
            <div className="presc-input presc-input--select">
              <span>{drug.selectDrug || "-"}</span>
              <span className="presc-select-arrow">▾</span>
            </div>
          </div>

          <div className="presc-field">
            <label>Name</label>
            <input
              className="presc-input presc-input--green"
              value={drug.name}
              onChange={(e) => onChange("drug.name", e.target.value)}
            />
          </div>

          <div className="presc-field">
            <label>Category</label>
            <input
              className="presc-input presc-input--green"
              value={drug.category}
              onChange={(e) => onChange("drug.category", e.target.value)}
            />
          </div>

          <div className="presc-field">
            <label>Dosage type</label>
            <input
              className="presc-input presc-input--green"
              value={drug.dosageType}
              onChange={(e) => onChange("drug.dosageType", e.target.value)}
            />
          </div>

          <div className="presc-field presc-field--wide">
            <label>Description</label>
            <input
              className="presc-input presc-input--green"
              value={drug.description}
              onChange={(e) => onChange("drug.description", e.target.value)}
            />
          </div>

          <div className="presc-field">
            <label>Duration</label>
            <input
              className="presc-input presc-input--green"
              value={drug.duration}
              onChange={(e) => onChange("drug.duration", e.target.value)}
            />
          </div>

          <div className="presc-field">
            <label>Dosage</label>
            <input
              className="presc-input presc-input--green"
              value={drug.dosage}
              onChange={(e) => onChange("drug.dosage", e.target.value)}
            />
          </div>

          <div className="presc-field">
            <label>Mg/ML</label>
            <input
              className="presc-input presc-input--green"
              value={drug.mgml}
              onChange={(e) => onChange("drug.mgml", e.target.value)}
            />
          </div>
        </div>

        <div className="presc-field presc-field--notes">
          <label>Additional Notes</label>
          <textarea
            className="presc-input presc-input--notes"
            placeholder="Write your Notes here..."
            value={drug.notes}
            onChange={(e) => onChange("drug.notes", e.target.value)}
          />
        </div>
      </div>

      {/* Add Test */}
      <div className="presc-section">
        <h3 className="presc-section-title">Add Test</h3>

        <div className="presc-field presc-field--test">
          <label>Select Test</label>
          <div className="presc-input presc-input--select">
            <span>{test.selectTest || "-"}</span>
            <span className="presc-select-arrow">▾</span>
          </div>
        </div>
      </div>

      <div className="presc-create-footer">
        <button type="submit" className="presc-confirm-btn">
          confirm
        </button>
      </div>
    </form>
  );
}
