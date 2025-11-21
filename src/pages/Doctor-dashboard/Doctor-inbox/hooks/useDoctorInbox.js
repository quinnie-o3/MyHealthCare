// src/Doctor-inbox/hook/useDoctorInbox.js
import { useState } from "react";

const demoMessages = [
  {
    id: 1,
    sender: "Jullu Jalal",
    label: "Primary",
    labelType: "primary",
    subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    starred: false,
    unread: true,
  },
  {
    id: 2,
    sender: "Minerva Barnett",
    label: "Work",
    labelType: "work",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    starred: true,
    unread: false,
  },
  {
    id: 3,
    sender: "Peter Lewis",
    label: "Friends",
    labelType: "friends",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    starred: false,
    unread: false,
  },
  {
    id: 4,
    sender: "Anthony Briggs",
    label: "Primary",
    labelType: "primary",
    subject: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    starred: true,
    unread: false,
  },
];

const demoThread = [
  {
    id: 1,
    from: "other",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    time: "6:30 pm",
  },
  {
    id: 2,
    from: "me",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
    time: "6:34 pm",
  },
  {
    id: 3,
    from: "other",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text, it is the model text for your company.",
    time: "6:38 pm",
  },
];

export function useDoctorInbox() {
  const [messages] = useState(demoMessages);
  const [selectedId, setSelectedId] = useState(2); // Minerva Barnett
  const [view, setView] = useState<"list" | "conversation">("list");
  const [search, setSearch] = useState("");

  const filtered = messages.filter((m) =>
    m.sender.toLowerCase().includes(search.toLowerCase())
  );

  const selectedMessage = messages.find((m) => m.id === selectedId);
  const thread = demoThread; // demo, sau này lấy theo id

  const openConversation = (id) => {
    setSelectedId(id);
    setView("conversation");
  };

  const backToList = () => setView("list");

  return {
    view,
    search,
    setSearch,
    messages: filtered,
    selectedMessage,
    thread,
    openConversation,
    backToList,
  };
}
