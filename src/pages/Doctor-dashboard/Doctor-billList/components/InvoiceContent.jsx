// src/Doctor-billList/components/InvoiceContent.jsx
import React from "react";

export default function InvoiceContent() {
  return (
    <div className="invoice-card">
      <div className="invoice-header-row">
        <div>
          <h2 className="invoice-title">Invoice</h2>
        </div>
        <div className="invoice-logo">DOCDESK</div>
      </div>

      <div className="invoice-meta-row">
        <div>
          <div className="invoice-label">Invoice From :</div>
          <div className="invoice-name">Virginia Walker</div>
          <div className="invoice-text">
            D 103, Cliniva Hospital, Opp. Town Hall,
          </div>
          <div className="invoice-text">
            Sardar Patel Road, Ahmedabad - 380015
          </div>
        </div>

        <div className="invoice-meta-right">
          <div>
            <div className="invoice-label">Invoice To :</div>
            <div className="invoice-name">Ahmed Hussein</div>
          </div>
          <div className="invoice-date">
            Invoice Date : <span>12 Nov 2019</span>
          </div>
        </div>
      </div>

      <div className="invoice-table-wrapper">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Description</th>
              <th>Total Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#1456456</td>
              <td>عمرو ضييف</td>
              <td>200</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="invoice-actions">
        <button className="invoice-btn icon">🖨</button>
        <button className="invoice-btn primary">Share</button>
        <button className="invoice-btn icon">✈️</button>
      </div>
    </div>
  );
}
