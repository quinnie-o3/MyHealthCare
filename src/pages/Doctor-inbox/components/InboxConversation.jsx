// src/Doctor-inbox/components/InboxConversation.jsx
import React from "react";

export default function InboxConversation({
  message,
  thread,
  onBack,
}) {
  if (!message) return null;

  return (
    <div className="inbox-main-card inbox-conversation-card">
      <div className="inbox-conv-header">
        <button className="conv-back-btn" onClick={onBack}>
          ←
        </button>
        <div className="conv-title">
          <div className="conv-name">{message.sender}</div>
          <span className="inbox-label-pill inbox-label-pill--friends">
            Friends
          </span>
        </div>
        <div className="conv-header-actions">
          <button className="icon-btn small">🖨</button>
          <button className="icon-btn small">⭐</button>
          <button className="icon-btn small">🗑️</button>
        </div>
      </div>

      <div className="inbox-conv-body">
        {thread.map((m) => (
          <div
            key={m.id}
            className={
              "conv-bubble-row " +
              (m.from === "me" ? "conv-bubble-row--me" : "")
            }
          >
            <div
              className={
                "conv-bubble " +
                (m.from === "me" ? "conv-bubble--me" : "conv-bubble--other")
              }
            >
              <p>{m.text}</p>
              <div className="conv-time">{m.time}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="inbox-conv-footer">
        <button className="icon-btn small">🎤</button>
        <input
          className="conv-input"
          placeholder="Write message"
        />
        <button className="icon-btn small">📎</button>
        <button className="conv-send-btn">Send ➤</button>
      </div>
    </div>
  );
}
