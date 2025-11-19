import React from "react";
import "./DoctorDashboard.css";
import { useDoctorDashboard } from "./hooks/useDoctorDashboard";

import DashboardHeader from "./components/DashboardHeader";
import DashboardHero from "./components/DashboardHero";
import DashboardStatsGrid from "./components/DashboardStatsGrid";
import DashboardActivity from "./components/DashboardActivity";
import DashboardTransactions from "./components/DashboardTransactions";
import DashboardCalendar from "./components/DashboardCalendar";
import DashboardUpcoming from "./components/DashboardUpcoming";

export default function DoctorDashboard() {
  const { greeting, stats, activity, transactions, calendar, upcoming } =
    useDoctorDashboard();

  return (
    <div className="dd-page">
      <DashboardHeader />

      <main className="dd-main">
        <div className="dd-layout">
          {/* Cột trái */}
          <section className="dd-left">
            <DashboardHero greeting={greeting} />
            <DashboardStatsGrid stats={stats} />
            <div className="dd-bottom-row">
              <DashboardActivity activity={activity} />
              <DashboardTransactions
                transactions={transactions}
                variant="desktop"
              />
            </div>
          </section>

          {/* Cột phải */}
          <section className="dd-right">
            <DashboardCalendar calendar={calendar} />
            <DashboardUpcoming upcoming={upcoming} />
            <DashboardTransactions
              transactions={transactions}
              variant="mobile"
            />
          </section>
        </div>
      </main>
    </div>
  );
}
