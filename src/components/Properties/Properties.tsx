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
      <div className="mb-7">
        <h4 className="uppercase text-center text-[#135F4A] mb-3">
          Our Projects
        </h4>
        <h2 className="text-center">
          Properties ( Home | Residential | Commercial ) in the City
        </h2>
        <p className="lg:w-[400px] mx-auto text-center mt-5">
          We offer a wide variety of residential and commercial properties in
          Dhaka. Find your dream home or commercial space from the pull of
          nicely built properties.
        </p>
      </div>
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
