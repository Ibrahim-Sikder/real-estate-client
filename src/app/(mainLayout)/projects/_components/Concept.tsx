/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropertyGallery from "./PropertyGallery";
import Modal from "@/components/share/Modal/Modal";
import { useState } from "react";
import { OverviewProps } from "@/types/project";
import ReactHtmlParser from "react-html-parser";
const Concept: React.FC<OverviewProps> = ({ projectData }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const renderContent = (content: string) => {
    const parsedContent = ReactHtmlParser(content);

    return parsedContent.map((element, index) => {
      if (element.type === "h1") {
        return (
          <h1 key={index} className="text-2xl font-bold mb-2 ">
            {element.props.children}
          </h1>
        );
      } else if (element.type === "h2") {
        return (
          <h2 key={index} className="text-xl font-bold mb-2 ">
            {element.props.children}
          </h2>
        );
      } else if (element.type === "h3") {
        return (
          <h3 key={index} className="text-xl font-bold mb-2 ">
            {element.props.children}
          </h3>
        );
      } else if (element.type === "p") {
        return (
          <p key={index} className="mb-2">
            {element.props.children}
          </p>
        );
      } else if (element.type === "ul") {
        return (
          <ul key={index} className="list-disc list-inside mb-2">
            {element.props.children.map((li: any, liIndex: number) => (
              <li key={liIndex} className="mb-1">
                {li.props.children}
              </li>
            ))}
          </ul>
        );
      } else if (element.type === "ol") {
        return (
          <ol key={index} className="list-decimal list-inside mb-2">
            {element.props.children.map((li: any, liIndex: number) => (
              <li key={liIndex} className="mb-1">
                {li.props.children}
              </li>
            ))}
          </ol>
        );
      } else if (element.type === "div" && element.props.className === "ql-align-center") {
        return (
          <div key={index} className="text-center mb-2">
            {element.props.children}
          </div>
        );
      } else if (element.type === "div" && element.props.className === "ql-align-right") {
        return (
          <div key={index} className="text-right mb-2">
            {element.props.children}
          </div>
        );
      } else if (element.type === "div" && element.props.className === "ql-align-left") {
        return (
          <div key={index} className="text-left mb-2">
            {element.props.children}
          </div>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <>
      <div className="lg:w-[1000px]">
        <PropertyGallery projectData={projectData} />

      </div>

      <div className="mt-10 border shadow-lg p-5">
        <h2 className="uppercase">Buy an Apartment on Easy Installments</h2>
        <p className="text-justify mt-3">
          {renderContent(projectData?.overview_description)}

        </p>




        <div className="mt-5">
          <button
            onClick={handleOpenModal}
            className="bg-[#135F4A] px-4 py-2 text-white"
          >
            Buy This Apartment
          </button>
        </div>
      </div>

      <div className="mt-10 shadow-lg border p-5">
        <h2 className="uppercase text-center">Institutes & Nearby Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- mt-5">
          {projectData?.floor_Location?.map((contain, index: number) => (
            <ul key={index} className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> {contain}
              </li>
            </ul>
          )) ?? (
              <p>No nearby locations available.</p>
            )}
        </div>
      </div>
      <Modal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default Concept;
