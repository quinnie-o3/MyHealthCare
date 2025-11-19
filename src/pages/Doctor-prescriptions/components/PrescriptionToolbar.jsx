// src/pages/Doctor-prescriptions/components/PrescriptionToolbar.jsx
import React from "react";

export default function PrescriptionToolbar({
  search,
  setSearch,
  onReset,
}) {
  return (
    <div className="presc-toolbar">
      <h2 className="presc-title">Prescriptions List</h2>

      <div className="presc-toolbar-right">
        <div className="presc-search">
          <span className="icon">🔍</span>
          <input
            placeholder="Search Patient's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="presc-filter-bar">
          <button className="presc-filter-btn">
            <span className="icon">⚲</span> Filter By
          </button>
          <button className="presc-filter-pill">14 Feb 2025 ▾</button>
          <button className="presc-filter-pill">Type ▾</button>
          <button className="presc-filter-pill">Patient ▾</button>
          <button className="presc-reset" type="button" onClick={onReset}>
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
}
