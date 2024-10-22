/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Modal from "@/components/share/Modal/Modal";
import ReactHtmlParser from "react-html-parser";
import { OverviewProps } from "@/types/project";
const Map: React.FC<OverviewProps> = ({ projectData }) => {
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

  const googleMapEmbedURL = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    projectData.location || "Dhaka, Bangladesh"
  )}`;
  
  return (
    <div>
      <div className="mb-10">
        <h4 className="text-center text-[#135F4A]">ANAA Developers Limited</h4>
        <h2 className="uppercase text-center">
          {projectData.title}
        </h2>
      </div>
      {
        projectData?.overviewImages?.slice(0, 1).map((mapImg, i: number) => (
          <Image width={500} height={10000} key={i} src={mapImg} alt="" className="w-full" />
        )

        )
      }

      <div className="mt-10 border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1075.1518268683578!2d90.42238324968673!3d23.820644750680454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c700ff992a63%3A0xbdcb1d9ae66b2d5c!2sSoftypi%20Technology!5e0!3m2!1sen!2sbd!4v1711790838610!5m2!1sen!2sbd"
          // src={googleMapEmbedURL}
          className="map w-full h-[450px]"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
    </div>
  );
};

export default Map;
