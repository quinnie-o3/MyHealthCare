// src/pages/Doctor-prescriptions/components/PrescriptionTable.jsx
import React from "react";

export default function PrescriptionTable({ prescriptions }) {
  return (
    <div className="presc-table-card">
      <table className="presc-table">
        <thead>
          <tr>
            <th>Patient name</th>
            <th>Category</th>
            <th>Content</th>
            <th>Date</th>
            <th>Notes</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((p) => (
            <tr key={p.id}>
              <td className="presc-cell-patient">
                <div className="presc-patient">
                  <div className="presc-avatar">{p.avatar}</div>
                  <span>{p.patientName}</span>
                </div>
              </td>
              <td>
                <span
                  className={
                    "presc-category-pill presc-category-pill--" +
                    p.categoryType
                  }
                >
                  {p.category}
                </span>
              </td>
              <td>{p.content}</td>
              <td>{p.date}</td>
              <td className="presc-notes">{p.notes}</td>
              <td className="presc-actions">
                <button className="icon-btn small">✏️</button>
                <button className="icon-btn small">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="presc-footer-row">
        <span className="presc-showing">Showing 1-09 of 78</span>
        <div className="presc-pagination">
          <button>{"<"}</button>
          <button>⭘</button>
          <button>{">"}</button>
        </div>
      </div>

      <button className="presc-fab">＋</button>
    </div>
  );
}
