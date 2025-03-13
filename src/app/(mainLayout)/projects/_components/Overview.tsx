/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PropertyGallery from "./PropertyGallery";
import Common from "@/components/Common/Common";
import Modal from "@/components/share/Modal/Modal";
import ReactHtmlParser from "react-html-parser";
import { OverviewProps } from "@/types/project";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import SpecialOfferCountdown from "./SpecialOfferCountdown";

const Overview: React.FC<OverviewProps> = ({ projectData }) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
      } else if (
        element.type === "div" &&
        element.props.className === "ql-align-center"
      ) {
        return (
          <div key={index} className="text-center mb-2">
            {element.props.children}
          </div>
        );
      } else if (
        element.type === "div" &&
        element.props.className === "ql-align-right"
      ) {
        return (
          <div key={index} className="text-right mb-2">
            {element.props.children}
          </div>
        );
      } else if (
        element.type === "div" &&
        element.props.className === "ql-align-left"
      ) {
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
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };
  const isExpired = new Date(projectData.project_date) < new Date()
  return (
    <>
      {/* <div className="flex justify-center text-[#135F4A] bg-gray-200 rounded-lg content-center items-center py-5 mb-4">
        <div className="flex justify-center text-[#135F4A] bg-gray-200 rounded-lg content-center items-center py-5 mb-4">
          <div className="flex flex-col justify-center items-center text-center font-bold space-y-2">
            <h4 className="text-lg">Excited Offer Exists Until:</h4>
            <div className="bg-white shadow-lg rounded-lg py-4 px-6">
              <p className="text-2xl font-bold text-[#135F4A]">
                {formatDateTime(projectData.project_date)}
              </p>
            </div>
          </div>
        </div>
      </div>
       */}
      {/* <SpecialOfferCountdown expiryDate={projectData.project_date} isExpired={isExpired} /> */}
      <div className="lg:w-[1000px] lg:mt-0 mt-10">
        <div className="space-y-5">
          <h2 className="uppercase text-[#135F4A]">{projectData?.title}</h2>
          <p className="text-justify">{projectData.short_description}</p>
          <h2 className="uppercase text-[#135F4A]">{projectData.sub_title}</h2>
          <p className="text-justify">{projectData.sub_short_description}</p>
        </div>

        <div className="">
          <PropertyGallery projectData={projectData} />
        </div>
      </div>

      <div className="bg-white shadow-lg p-5 border mt-10" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-4">
            <h4 className="font-semibold">Project Type:</h4>
            <p>{projectData.project_type}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Project Address:</h4>
            <p>{projectData.project_address}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Land Area:</h4>
            <p>{projectData.land_area}</p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Storied:</h4>
            <p>{projectData.storied}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="mb-4">
            <h4 className="font-semibold">Apartment Contains:</h4>
            {projectData?.apartment_contains.map((contain, index: number) => (
              <ul key={index} className="space-y-2 mt-2">
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> {contain}
                </li>
              </ul>
            ))}
          </div>
          <div className="mb-4">
            <h4 className="font-semibold">Special Amenities:</h4>
            {projectData?.special_amenities.map((contain, index: number) => (
              <ul key={index} className="space-y-2 mt-2">
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> {contain}
                </li>
              </ul>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Common Features:</h4>
            {projectData?.common_features.map((contain, index: number) => (
              <ul key={index} className="space-y-2 mt-2">
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> {contain}
                </li>
              </ul>
            ))}
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Home Loan Partner:</h4>
            {projectData?.home_loan_partner.map((contain, index: number) => (
              <ul key={index} className="space-y-2 mt-2">
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> {contain}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border shadow-lg p-5" data-aos="fade-up">
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
      <div className="mt-10 shadow-lg border p-5" data-aos="fade-up">
        <h2 className="uppercase text-center">Institutes & Nearby Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap- mt-5">
          {projectData?.floor_Location?.map((contain, index: number) => (
            <ul key={index} className="space-y-2 mt-2">
              <li>
                <CheckCircleIcon className="text-[#135F4A]" /> {contain}
              </li>
            </ul>
          )) ?? <p>No nearby locations available.</p>}
        </div>
      </div>
      <Common />
      <Modal open={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default Overview;
