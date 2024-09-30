// components/Tabs.js
import React, { useState } from "react";
import Container from "../share/Container";
import OnGoingProjects from "../OnGoingProjects/OnGoingProjects";
import CompletedProjects from "../CompletedProjects/CompletedProjects";
import UpcomingProjects from "../UpcomingProjects/UpcomingProjects";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Container className="my-20">
      {/* Tab Header */}
      <div className="lg:w-[700px] mx-auto grid grid-cols-3 mb-10 bg-[#76B486]">
        <button
          className={`py-3 lg:text-sm text-xs text-center border-r ${
            activeTab === "tab1"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          On Going Projects
        </button>
        <button
          className={`py-3 lg:text-sm text-xs text-center border-r ${
            activeTab === "tab2"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Completed Projects
        </button>
        <button
          className={`py-3 lg:text-sm text-xs text-center ${
            activeTab === "tab3"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
          }`}
          onClick={() => setActiveTab("tab3")}
        >
          Upcoming Projects
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "tab1" && <OnGoingProjects />}
        {activeTab === "tab2" && <CompletedProjects />}
        {activeTab === "tab3" && <UpcomingProjects />}
      </div>
    </Container>
  );
};

export default Tabs;
