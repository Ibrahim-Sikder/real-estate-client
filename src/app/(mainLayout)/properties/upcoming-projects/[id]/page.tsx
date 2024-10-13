"use client";
import Container from "@/components/share/Container";
import React, { useState } from "react";
import Overview from "../_components/Overview";
import Header from "@/components/share/Header/Header";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <Header/>
      <Container className="my-20">
      <div className="flex items-center gap-10">
        <div className="lg:w-[400px] h-full mx-auto grid grid-cols-1 gap-3">
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab1"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            OVERVIEW
          </button>
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab2"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Concept
          </button>
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab3"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            FLOOR PLAN
          </button>
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab4"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            LOCATION MAP
          </button>
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab5"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab5")}
          >
            VIRTUAL TOUR
          </button>
          <button
            className={`p-2 text-center uppercase text-gray-600 border border-[#135F4A] ${
              activeTab === "tab6"
                ? "bg-[#135F4A] text-white"
                : "hover:bg-[#135F4A] hover:text-white"
            }`}
            onClick={() => setActiveTab("tab6")}
          >
            CONTACT NOW
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full bg-gray-100">
          {activeTab === "tab1" && <Overview />}
          {activeTab === "tab2" && <div>Tab 2</div>}
          {activeTab === "tab3" && <div>Tab 3</div>}
          {activeTab === "tab4" && <div>Tab 4</div>}
          {activeTab === "tab5" && <div>Tab 5</div>}
          {activeTab === "tab6" && <div>Tab 6</div>}
        </div>
      </div>
    </Container>
    </>
  );
};

export default PropertyDetails;
