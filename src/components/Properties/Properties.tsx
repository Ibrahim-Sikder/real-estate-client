// components/Tabs.js
import React, { useState } from "react";
import Container from "../share/Container";
import OnGoingProjects from "../OnGoingProjects/OnGoingProjects";
import CompletedProjects from "../CompletedProjects/CompletedProjects";
import UpcomingProjects from "../UpcomingProjects/UpcomingProjects";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Container>
      {/* Tab Header */}
      <div className="lg:w-[800px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
        <button
          className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
            activeTab === "tab1"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          On Going Projects
        </button>
        <button
          className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
            activeTab === "tab2"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Completed Projects
        </button>
        <button
          className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
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
