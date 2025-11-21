import React from "react";

export default function AppointmentActivityTable({
  rows,
  search,
  setSearch,
}) {
  return (
    <div className="appt-card">
      <div className="appt-header-row">
        <h2 className="appt-title">Activity Log</h2>

        <div className="appt-header-right">
          <div className="appt-search-input">
            <span className="icon">🔍</span>
            <input
              placeholder="Search Patient's name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="appt-add-btn">＋</button>

          <div className="appt-filters">
            <button className="filter-btn">Filter By</button>
            <select>
              <option>14 Feb 2025</option>
            </select>
            <select>
              <option>Status</option>
            </select>
            <button className="reset-btn">Reset Filter</button>
          </div>
        </div>
      </div>

      <div className="appt-table-wrapper">
        <table className="appt-table">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Status</th>
              <th>Notes</th>
              <th>Time</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>
                  <div className="appt-patient-cell">
                    <div
                      className="appt-avatar"
                      style={{ background: r.avatarColor }}
                    />
                    <span>{r.patient}</span>
                  </div>
                </td>
                <td>
                  <span
                    className={
                      "status-pill status-pill--" + r.statusType
                    }
                  >
                    {r.status}
                  </span>
                </td>
                <td>{r.notes}</td>
                <td>{r.time}</td>
                <td>{r.date}</td>
                <td>
                  <div className="appt-actions">
                    <button className="icon-btn small">✏️</button>
                    <button className="icon-btn small">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="appt-footer">
          <span>Showing 1–09 of 78</span>
          <div className="appt-pagination">
            <button className="pager-btn">{"<"}</button>
            <button className="pager-btn">{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
