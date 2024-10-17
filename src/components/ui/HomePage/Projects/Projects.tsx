/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import Container from "@/components/share/Container";
import OnGoingProject from "./_components/OnGoingProject";
import CompletedProject from "./_components/CompletedProject";
import UpcomingProject from "./_components/UpcomingProject";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/project`, {
          cache: "no-store",
        });
        const data = await response.json();
        setProjectData(data);
        console.log(data); // Now projectData should log to console
      } catch (err:any) {
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (loading) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl">Loading...</h1>;
  }

  if (error) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl">{error}</h1>;
  }

  if (!projectData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl">Oops! Project data not found!</h1>;
  }

  return (
    <Container className="my-20">
      <div className="mb-7">
        <h4 className="uppercase text-center text-[#135F4A] mb-3">Our Projects</h4>
        <h2 className="text-center">
          Properties (Home | Residential | Commercial) in the City
        </h2>
        <p className="lg:w-[400px] mx-auto text-center mt-5">
          We offer a wide variety of residential and commercial properties in
          Dhaka. Find your dream home or commercial space from the pool of nicely built properties.
        </p>
      </div>

      {/* Tab Header */}
      <div className="lg:w-[700px] mx-auto grid grid-cols-3 mb-10 bg-[#76B486]">
        <button
          className={`p-3 lg:text-sm text-xs text-center uppercase border-r ${activeTab === "tab1"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
            }`}
          onClick={() => setActiveTab("tab1")}
        >
          On Going Projects
        </button>
        <button
          className={`p-3 lg:text-sm text-xs text-center uppercase border-r ${activeTab === "tab2"
              ? "bg-[#135F4A] text-white"
              : "hover:bg-[#135F4A] hover:text-white"
            }`}
          onClick={() => setActiveTab("tab2")}
        >
          Completed Projects
        </button>
        <button
          className={`p-3 lg:text-sm text-xs text-center uppercase ${activeTab === "tab3"
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
        {activeTab === "tab1" && <OnGoingProject projectData={projectData}/>}
        {activeTab === "tab2" && <CompletedProject projectData={projectData}/>}
        {activeTab === "tab3" && <UpcomingProject projectData={projectData}/>}
      </div>
    </Container>
  );
};

export default Projects;
