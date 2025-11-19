// src/Doctor-inbox/components/InboxList.jsx
import React from "react";

export default function InboxList({
  messages,
  search,
  setSearch,
  onSelect,
}) {
  return (
    <div className="inbox-main-card">
      <div className="inbox-list-search-row">
        <div className="inbox-search-input">
          <span className="icon">🔍</span>
          <input
            placeholder="Search mail"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="inbox-toolbar">
          <button className="icon-btn small">☑️</button>
          <button className="icon-btn small">📩</button>
          <button className="icon-btn small">🗑️</button>
        </div>
      </div>

      <div className="inbox-table-wrapper">
        <table className="inbox-table">
          <tbody>
            {messages.map((m) => (
              <tr
                key={m.id}
                className={m.unread ? "inbox-row inbox-row--unread" : "inbox-row"}
                onClick={() => onSelect(m.id)}
              >
                <td className="inbox-cell-select">
                  <input type="checkbox" />
                </td>
                <td className="inbox-cell-star">
                  <button className="star-btn">
                    {m.starred ? "★" : "☆"}
                  </button>
                </td>
                <td className="inbox-cell-sender">{m.sender}</td>
                <td className="inbox-cell-label">
                  <span className={`inbox-label-pill inbox-label-pill--${m.labelType}`}>
                    {m.label}
                  </span>
                </td>
                <td className="inbox-cell-subject">{m.subject}</td>
                <td className="inbox-cell-time">{m.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
