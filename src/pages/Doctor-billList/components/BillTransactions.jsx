import React from "react";

export default function BillTransactions({
  activeTab,
  setActiveTab,
  page,
  setPage,
  transactions,
}) {
  return (
    <div className="card trans-card">
      <div className="trans-header">
        <h3>Recent Transactions</h3>

        <div className="trans-filters-right">
          <div className="trans-select-group">
            <button className="filter-btn">Filter By</button>
            <select>
              <option>14 Feb 2025</option>
            </select>
            <select>
              <option>Bill Type</option>
            </select>
            <select>
              <option>Bill Status</option>
            </select>
          </div>
          <button className="reset-btn">Reset Filter</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="trans-tabs">
        {["all", "week", "month"].map((tab) => (
          <button
            key={tab}
            className={
              "trans-tab " + (activeTab === tab ? "trans-tab--active" : "")
            }
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all"
              ? "All Transactions"
              : tab === "week"
              ? "Last Week"
              : "Last Month"}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="trans-table-wrapper">
        <table className="trans-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t) => (
              <tr key={t.id}>
                <td>
                  <div className="trans-desc">
                    <span className="trans-radio" />
                    <span>{t.description}</span>
                  </div>
                </td>
                <td>{t.transactionId}</td>
                <td>{t.type}</td>
                <td>
                  <span
                    className={
                      "status-pill status-pill--" + t.statusType
                    }
                  >
                    {t.status}
                  </span>
                </td>
                <td>{t.date}</td>
                <td
                  className={
                    "trans-amount " +
                    (t.positive ? "trans-amount--pos" : "trans-amount--neg")
                  }
                >
                  {t.amount}
                </td>
                <td>
                  <div className="trans-actions">
                    <button className="icon-btn small">✏️</button>
                    <button className="icon-btn small">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="trans-footer">
          <span>Showing 1 to 5 of 10 entries</span>
          <div className="trans-pagination">
            <button className="pager-btn">&lt; Previous</button>
            <button className="page-number page-number--active">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <button className="page-number">4</button>
            <button className="pager-btn">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
