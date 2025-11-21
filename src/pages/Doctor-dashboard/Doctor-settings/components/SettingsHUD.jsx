import React from "react";

export default function SettingsHUD({
  hud,
  toggleHud,
  currency,
  setCurrency,
  timezone,
  setTimezone,
  onSave,
}) {
  const renderToggle = (label, key) => (
    <div className="settings-toggle-row" key={key}>
      <span>{label}</span>
      <button
        type="button"
        className={
          "settings-toggle " +
          (hud[key] ? "settings-toggle--on" : "settings-toggle--off")
        }
        onClick={() => toggleHud(key)}
      >
        <span className="settings-toggle-knob" />
        <span className="settings-toggle-text">
          {hud[key] ? "ON" : "OFF"}
        </span>
      </button>
    </div>
  );

  return (
    <form className="settings-card" onSubmit={onSave}>
      <div className="settings-header-row">
        <h2 className="settings-title">HUD</h2>
      </div>

      <div className="settings-grid">
        <div className="settings-column">
          {renderToggle("Transactions", "transactions")}
          {renderToggle("Appointments", "appointments")}
          {renderToggle("Prescriptions", "prescriptions")}
          {renderToggle("Reports", "reports")}
        </div>

        <div className="settings-column">
          {renderToggle("Patients", "patients")}
          {renderToggle("Calendar", "calendar")}
          {renderToggle("Inbox", "inbox")}
          {renderToggle("Store", "store")}
        </div>
      </div>

      <div className="settings-section-title">General Settings</div>

      <div className="settings-general-grid">
        <div className="settings-field">
          <label>Currency</label>
          <div className="settings-input settings-input--select">
            <span>{currency}</span>
            <span className="settings-select-arrow">▾</span>
          </div>
        </div>

        <div className="settings-field">
          <label>Time Zone</label>
          <div className="settings-input settings-input--select">
            <span>{timezone}</span>
            <span className="settings-select-arrow">▾</span>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button type="submit" className="settings-save-btn">
          Save
        </button>
      </div>
    </form>
  );
}
