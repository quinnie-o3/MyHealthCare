// hook/useDoctorBillList.js
import { useState } from "react";

export function useDoctorBillList() {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);

  const weeklyActivity = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    paid: [500, 250, 400, 520, 280, 460, 430],
    unpaid: [200, 120, 180, 230, 150, 210, 190],
  };

  const earnings = {
    labels: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    values: [2800, 3500, 4200, 3800, 5200, 4500],
  };

  const transactions = [
    {
      id: 1,
      description: "Ahmed Tamer Fawzy",
      transactionId: "#12548796",
      type: "Visa",
      status: "Cancelled",
      statusType: "cancelled",
      date: "28 Jan, 12.30 AM",
      amount: "-$2,500",
      positive: false,
    },
    {
      id: 2,
      description: "Eyad Salem El Gendy",
      transactionId: "#12548796",
      type: "Cash",
      status: "Pending",
      statusType: "pending",
      date: "25 Jan, 10.40 PM",
      amount: "+$750",
      positive: true,
    },
    {
      id: 3,
      description: "Amr Alaa Mahrous",
      transactionId: "#12548796",
      type: "Installment",
      status: "Complete",
      statusType: "complete",
      date: "20 Jan, 10.40 PM",
      amount: "-$150",
      positive: false,
    },
    {
      id: 4,
      description: "Omar Sherif Ibrahim",
      transactionId: "#12548796",
      type: "Cash",
      status: "Complete",
      statusType: "complete",
      date: "15 Jan, 03.29 PM",
      amount: "-$1,050",
      positive: false,
    },
    {
      id: 5,
      description: "Moatasem Mohamed",
      transactionId: "#12548796",
      type: "Cash",
      status: "Complete",
      statusType: "complete",
      date: "14 Jan, 10.40 PM",
      amount: "+$840",
      positive: true,
    },
  ];

  // hiện tại chưa lọc thật theo tab, page – để sau nối API
  return {
    activeTab,
    setActiveTab,
    page,
    setPage,
    weeklyActivity,
    earnings,
    transactions,
  };
}
