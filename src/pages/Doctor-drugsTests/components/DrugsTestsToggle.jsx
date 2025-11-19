// src/pages/Doctor-drugsTests/components/DrugsTestsToggle.jsx
import React from "react";

export default function DrugsTestsToggle({ mode, setMode }) {
  return (
    <div className="dt-toggle-bar">
      <button
        className={
          "dt-toggle-btn" + (mode === "drugs" ? " dt-toggle-btn--active-black" : "")
        }
        onClick={() => setMode("drugs")}
        type="button"
      >
        <span className="dt-toggle-dot dt-toggle-dot--drugs" />
        <span>Drugs</span>
      </button>

      <button
        className={
          "dt-toggle-btn" + (mode === "tests" ? " dt-toggle-btn--active-green" : "")
        }
        onClick={() => setMode("tests")}
        type="button"
      >
        <span className="dt-toggle-dot dt-toggle-dot--tests" />
        <span>Tests</span>
      </button>
    </div>
  );
}
