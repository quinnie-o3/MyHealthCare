// src/Doctor-billList/components/AddBillForm.jsx
import React from "react";

export default function AddBillForm({
  formData,
  onChange,
  onSubmit,
  loading,
}) {
  return (
    <form className="addbill-form" onSubmit={onSubmit}>
      <div className="addbill-grid">
        {/* Select Patient */}
        <div className="addbill-field">
          <label>
            Select Patient<span className="asterisk">*</span>
          </label>
          <div className="addbill-input addbill-select">
            <span>{formData.patient}</span>
            <span className="addbill-select-arrow">▾</span>
          </div>
        </div>

        {/* Payment Method */}
        <div className="addbill-field">
          <label>
            Payment Method<span className="asterisk">*</span>
          </label>
          <input
            className="addbill-input"
            value={formData.paymentMethod}
            onChange={(e) => onChange("paymentMethod", e.target.value)}
          />
        </div>

        {/* Total Amount */}
        <div className="addbill-field">
          <label>
            Total Amount<span className="asterisk">*</span>
          </label>
          <input
            className="addbill-input"
            value={formData.totalAmount}
            onChange={(e) => onChange("totalAmount", e.target.value)}
          />
        </div>

        {/* Payment Status */}
        <div className="addbill-field">
          <label>
            Payment Status<span className="asterisk">*</span>
          </label>
          <input
            className="addbill-input addbill-status"
            value={formData.paymentStatus}
            onChange={(e) => onChange("paymentStatus", e.target.value)}
          />
        </div>
      </div>

      <div className="addbill-footer">
        <button
          type="submit"
          className="addbill-submit-btn"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create Invoice"}
        </button>
      </div>
    </form>
  );
}
