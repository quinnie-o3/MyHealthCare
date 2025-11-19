// src/pages/Doctor-drugsTests/components/DrugsTestsTable.jsx
import React from "react";

export default function DrugsTestsTable({ rows }) {
  return (
    <div className="dt-table-card">
      <table className="dt-table">
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Type</th>
            <th>Content</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td className="dt-cell-patient">
                <div className="dt-patient">
                  <div className="dt-avatar">{r.avatar}</div>
                  <span>{r.patientName}</span>
                </div>
              </td>
              <td>
                <span
                  className={
                    "dt-type-pill dt-type-pill--" + r.typeKey
                  }
                >
                  {r.type}
                </span>
              </td>
              <td>
                {r.content.split("\n").map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </td>
              <td>{r.date}</td>
              <td className="dt-notes">{r.notes}</td>
              <td className="dt-actions">
                <button className="icon-btn small">✏️</button>
                <button className="icon-btn small">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="dt-footer-row">
        <span className="dt-showing">Showing 1-09 of 78</span>
        <div className="dt-pagination">
          <button>{"<"}</button>
          <button>⭘</button>
          <button>{">"}</button>
        </div>
      </div>
    </div>
  );
}
