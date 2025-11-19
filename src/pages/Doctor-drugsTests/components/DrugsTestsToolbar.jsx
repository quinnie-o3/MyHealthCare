// src/pages/Doctor-drugsTests/components/DrugsTestsToolbar.jsx
import React from "react";

export default function DrugsTestsToolbar({
  mode,
  search,
  setSearch,
  onReset,
}) {
  const title = mode === "tests" ? "Tests" : "Drugs";

  return (
    <div className="dt-toolbar">
      <h2 className="dt-title">{title}</h2>

      <div className="dt-toolbar-right">
        <div className="dt-search">
          <span className="icon">🔍</span>
          <input
            placeholder="Search Patient's name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="dt-filter-bar">
          <button className="dt-filter-btn">
            <span className="icon">⚲</span> Filter By
          </button>
          <button className="dt-filter-pill">14 Feb 2025 ▾</button>
          <button className="dt-filter-pill">Type ▾</button>
          <button className="dt-filter-pill">Patient ▾</button>
          <button type="button" className="dt-reset" onClick={onReset}>
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  );
}
