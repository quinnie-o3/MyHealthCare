// src/Doctor/hooks/useDoctorDashboard.js
export function useDoctorDashboard() {
  const greeting = {
    name: "Zaid",
    subText:
      "Have a nice day and don't forget to take care of your health!",
    quote: "Good things take time.",
  };

  const stats = [
    {
      id: "totalPatients",
      label: "Total Patients",
      value: "409",
      trend: "+8.5%",
      trendDirection: "up",
      trendText: "Up from yesterday",
    },
    {
      id: "newPatients",
      label: "New Patients",
      value: "13",
      trend: "+1.3%",
      trendDirection: "up",
      trendText: "Up from past week",
    },
    {
      id: "earnings",
      label: "Earnings",
      value: "27,000 EGP",
      trend: "-4.3%",
      trendDirection: "down",
      trendText: "Down from yesterday",
    },
    {
      id: "appointments",
      label: "Appointments",
      value: "24",
      trend: "+1.8%",
      trendDirection: "up",
      trendText: "Up from past week",
    },
  ];

  const activity = {
    // bạn chưa cần dùng dữ liệu chi tiết, chỉ cần để đây để sau này nối chart lib
    points: [
      { x: 0, y: 30 },
      { x: 10, y: 25 },
      { x: 20, y: 28 },
      { x: 30, y: 15 },
      { x: 40, y: 10 },
      { x: 50, y: 25 },
      { x: 60, y: 20 },
      { x: 70, y: 30 },
      { x: 80, y: 18 },
      { x: 90, y: 22 },
      { x: 100, y: 14 },
    ],
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  };

  const transactions = [
    {
      id: 1,
      type: "card",
      title: "Deposit from my Card",
      date: "28 January 2021",
      amount: "-$850",
      positive: false,
    },
    {
      id: 2,
      type: "paypal",
      title: "Mohamed Amir",
      date: "25 January 2025",
      amount: "+$2,500",
      positive: true,
    },
    {
      id: 3,
      type: "user",
      title: "Hussein Alnashat",
      date: "21 January 2025",
      amount: "+$5,400",
      positive: true,
    },
  ];

  const calendar = {
    monthLabel: "April 2025 ▾",
    // những ngày có chấm đỏ
    dotDays: [4, 8, 11, 14],
    activeDay: 8,
  };

  const upcoming = {
    name: "Ahmed Tamer Fawzy",
    dateText: "8 August, 2025 • 04:00 PM",
  };

  return {
    greeting,
    stats,
    activity,
    transactions,
    calendar,
    upcoming,
  };
}
