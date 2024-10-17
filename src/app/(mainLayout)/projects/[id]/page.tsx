"use client";
import Container from "@/components/share/Container";
import React, { useState } from "react";
import Header from "@/components/share/Header/Header";
import CommonBanner from "../_components/CommonBanner";
import Overview from "../_components/Overview";
import Concept from "../_components/Concept";
import Floor from "../_components/Floor";
import Map from "../_components/Map";
import VirtualTour from "../_components/VirtualTour";
import Contact from "../_components/Contact";

const PropertyDetails = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <Header />
      <CommonBanner />
      <Container className="my-20">
        <div className="lg:flex gap-10">
          {/* Responsive Horizontal Scrollable Tabs */}
          <div className="lg:w-[250px] h-full mx-auto flex lg:flex-col gap-3 sticky lg:top-20 top-16 z-10 bg-[#76B486] overflow-x-auto lg:overflow-visible whitespace-nowrap">
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab1" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab1")}
            >
              OVERVIEW
            </button>
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab2" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab2")}
            >
              Concept
            </button>
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab3" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab3")}
            >
              FLOOR PLAN
            </button>
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab4" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab4")}
            >
              LOCATION MAP
            </button>
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab5" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab5")}
            >
              VIRTUAL TOUR
            </button>
            <button
              className={`p-2 text-center uppercase flex-shrink-0 ${activeTab === "tab6" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => setActiveTab("tab6")}
            >
              CONTACT NOW
            </button>
          </div>

          {/* Tab Content */}
          <div className="w-full mt-5 lg:mt-0">
            {activeTab === "tab1" && <Overview />}
            {activeTab === "tab2" && <Concept />}
            {activeTab === "tab3" && <Floor />}
            {activeTab === "tab4" && <Map />}
            {activeTab === "tab5" && <VirtualTour />}
            {activeTab === "tab6" && <Contact />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyDetails;
