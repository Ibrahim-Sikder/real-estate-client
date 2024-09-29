"use client";
import Container from "@/components/share/Container";
import React, { useState } from "react";
import Overview from "../_components/Overview";
import Contact from "../_components/Contact";
import Map from "../_components/Map";
import Concept from "../_components/Concept";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Container className="my-20">
      <div className="lg:flex gap-10">
        <div className="lg:w-[250px] h-full mx-auto grid grid-cols-1 gap-3 lg:sticky top-20 bg-[#76B486]">
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab1" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            OVERVIEW
          </button>
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab2" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Concept
          </button>
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab3" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            FLOOR PLAN
          </button>
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab4" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            LOCATION MAP
          </button>
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab5" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab5")}
          >
            VIRTUAL TOUR
          </button>
          <button
            className={`p-2 text-center uppercase ${
              activeTab === "tab6" ? "bg-[#135F4A] text-white" : ""
            }`}
            onClick={() => setActiveTab("tab6")}
          >
            CONTACT NOW
          </button>
        </div>

        {/* Tab Content */}
        <div className="w-full">
          {activeTab === "tab1" && <Overview />}
          {activeTab === "tab2" && <Concept />}
          {activeTab === "tab3" && <div>Tab 3</div>}
          {activeTab === "tab4" && <Map />}
          {activeTab === "tab5" && <div>Tab 5</div>}
          {activeTab === "tab6" && <Contact />}
        </div>
      </div>
    </Container>
  );
};

export default PropertyDetails;
