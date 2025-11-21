import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./PatientDashboard.css";
import { usePatientDashboard } from "./hooks/usePatientDashboard";
import DashboardStats from "./components/DashboardStats";
import DashboardTabs from "./components/DashboardTabs";
import AppointmentList from "./components/appointments/AppointmentList";
import HealthMetricsSummary from "./components/metrics/HealthMetricsSummary";
import PatientProfileCard from "./components/profile/PatientProfileCard";
import MedicalRecordList from "./components/records/MedicalRecordList";

export default function PatientDashboard() {
  const {
    user,
    stats,
    tabs,
    appointments,
    statusOptions,
    activeTab,
    setActiveTab,
    activeStatus,
    setActiveStatus,
  } = usePatientDashboard();

  return (
    <>
      <Header />

      <main className="pd-page">
        {/* Hero section */}
        <section className="pd-hero-card">
          <div className="pd-hero-left">
            <div className="pd-hero-avatar">
              <div className="pd-hero-avatar-inner">
                {user.name.charAt(0)}
              </div>
            </div>
            <div>
              <h1 className="pd-hero-title">Hello, {user.name}!</h1>
              <p className="pd-hero-subtitle">
                Welcome to the MyHealthCare patient portal.
              </p>
            </div>
          </div>

          <div className="pd-hero-right">
            <button type="button" className="pd-primary-btn">
              📅 Book a new appointment
            </button>
          </div>
        </section>

        {/* Stats */}
        <DashboardStats stats={stats} />

        {/* Tabs */}
        <DashboardTabs
          tabs={tabs}
          activeTab={activeTab}
          onChange={setActiveTab}
        />

        {/* Tab content */}
        {activeTab === "appointments" && (
          <AppointmentList
            appointments={appointments}
            statusOptions={statusOptions}
            activeStatus={activeStatus}
            onStatusChange={setActiveStatus}
          />
        )}

        {activeTab !== "appointments" && (
          <div className="pd-card pd-empty-tab">
            The section “{tabs.find((t) => t.id === activeTab)?.label}” will be
            implemented later.
          </div>
        )}
      </main>
    </>
  );
}
