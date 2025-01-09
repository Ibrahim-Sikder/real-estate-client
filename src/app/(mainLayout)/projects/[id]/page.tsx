/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Container from "@/components/share/Container";
import React, { useEffect, useState } from "react";
import CommonBanner from "../_components/CommonBanner";
import Overview from "../_components/Overview";
import Concept from "../_components/Concept";
import Floor from "../_components/Floor";
import Map from "../_components/Map";
import VirtualTour from "../_components/VirtualTour";
import Contact from "../_components/Contact";
import { TProject } from "@/types/project";
import Loader from "@/components/share/Loader/Loader";
import BrowshareDownload from "../_components/BrowshareDownload";
import AOS from "aos";
import "aos/dist/aos.css";

interface PageProps {
  params: {
    id: string;
  };
}

interface ProjectResponse {
  data: TProject;
}

const ProjectDetails: React.FC<PageProps> = ({ params }) => {
  const { id } = params;

  const [activeTab, setActiveTab] = useState("tab1");
  const [projectData, setProjectData] = useState<ProjectResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project/${id}`,
          {
            cache: "no-store",
          }
        );
        const data = await response.json();
        setProjectData(data);
      } catch (err: any) {
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, [id]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo(0, 400);
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        {error}
      </h1>
    );
  }

  if (!projectData) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        Oops! Project data not found!
      </h1>
    );
  }


  console.log('single project data', projectData)
  return (
    <>
      <CommonBanner />
      <Container className="my-20">
        <div id="project" className="lg:flex gap-10">
          <div className="lg:w-[250px] h-full mx-auto flex lg:flex-col sticky lg:top-20 top-16 z-10 bg-[#76B486] overflow-x-auto lg:overflow-visible whitespace-nowrap">
            <button
              className={`text-center uppercase flex-shrink-0 border-b-2 p-3 ${activeTab === "tab1" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab1")}
            >
              OVERVIEW
            </button>

            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab2" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab2")}
            >
              Concept
            </button>
            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab3" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab3")}
            >
              FLOOR PLAN
            </button>
            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab4" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab4")}
            >
              LOCATION MAP
            </button>
            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab5" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab5")}
            >
              VIRTUAL TOUR
            </button>
            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab6" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab6")}
            >
              Download brochure
            </button>
            <button
              className={`p-3 text-center uppercase flex-shrink-0 border-b-2 ${activeTab === "tab7" ? "bg-[#135F4A] text-white" : ""
                }`}
              onClick={() => handleTabClick("tab7")}
            >
              CONTACT NOW
            </button>
          </div>

          {/* Tab Content */}
          <div className="w-full lg:mt-0" data-aos="fade-left">
            {activeTab === "tab1" && (
              <Overview projectData={projectData.data} />
            )}
            {activeTab === "tab2" && <Concept projectData={projectData.data} />}
            {activeTab === "tab3" && <Floor projectData={projectData.data} />}
            {activeTab === "tab4" && <Map projectData={projectData.data} />}
            {activeTab === "tab5" && (
              <VirtualTour projectData={projectData.data} />
            )}
            {activeTab === "tab6" && (
              <BrowshareDownload projectData={projectData.data} />
            )}
            {activeTab === "tab7" && <Contact />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectDetails;
