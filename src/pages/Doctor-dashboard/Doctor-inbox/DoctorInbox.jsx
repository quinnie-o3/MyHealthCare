// src/Doctor-inbox/DoctorInbox.jsx
import React from "react";
import "./DoctorInbox.css";
import BillTopBar from "../Doctor-billList/components/BillTopBar";

import DoctorSidebar from "../../components/DoctorSidebar/DoctorSidebar";
import InboxList from "./components/InboxList";
import InboxConversation from "./components/InboxConversation";
import { useDoctorInbox } from "./hooks/useDoctorInbox";

export default function DoctorInbox() {
  const {
    view,
    search,
    setSearch,
    messages,
    selectedMessage,
    thread,
    openConversation,
    backToList,
  } = useDoctorInbox();

  return (
    <div className="bill-page">
      <DoctorSidebar activeMenu="inbox" />

      <div className="bill-main">
        <BillTopBar />

        <div className="bill-content inbox-layout">
          <InboxSidebar />

          {view === "list" ? (
            <InboxList
              messages={messages}
              search={search}
              setSearch={setSearch}
              onSelect={openConversation}
            />
          ) : (
            <InboxConversation
              message={selectedMessage}
              thread={thread}
              onBack={backToList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
