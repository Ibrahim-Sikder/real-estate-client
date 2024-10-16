import React from "react";
import Image from "next/image";
import img1 from "../../../../src/assets/images/services/image (1).jpg";

import Container from "@/components/share/Container";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Affiliation from "@/components/Affiliation/Affiliation";
import ServiceBanner from "./ServiceBanner";
import Link from "next/link";
import Header from "@/components/share/Header/Header";
import ReactHtmlParser from "react-html-parser";
export type TServices = {
  _id: string,
  title: string;
  description: string,
  image: string,
  slug: string,
  date: string,
  meta_title: string;
  meta_keywords: string[];
  meta_description: string;
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
    }

    // else if (element.type === "img") {
    //   return (
    //     <img
    //       key={index}
    //       className="w-full h-auto object-cover mb-4 hidden "
    //       src={element.props.src}
    //       alt="Blog Image"
    //     />
    //   );
    // }
    else if (
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

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/service`, {
    cache: "no-store",
  });
  const serviceData = await response.json()

  console.log(serviceData)

  if (!serviceData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Review data not found! </h1>

  }
  return (
    <>
      <Header />
      <div className="bg-gray-100">
        <ServiceBanner />
        <Container className="py-20">
          {/* Services We Offer Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 shadow-lg rounded p-5 bg-white">
            <div>
              <Image
                src={img1}
                alt="Construction Services"
                className="h-full rounded"
              />
            </div>
            <div className="text-center mb-12">
              <h2 className="text-[#135F4A] uppercase">Services We Offer</h2>
              <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
              <p className="mt-6 text-gray-600 text-justify">
                ANAA Developers Limited offers construction and interior
                services that meet the requirements of the clients and at the
                same time, maintain superior quality. The company has provided
                construction and interior services to a significant number of
                clients in the country and has already achieved the trust of
                them by rendering quality service.
              </p>
              {/* Services We Offer - Icon List */}
              <div className="flex justify-center items-center gap-10 mt-10">
                <ul className="text-left space-y-4">
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> Expert
                    Professionals
                  </li>
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> Latest
                    Technologies
                  </li>
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> Quality
                    Assurance
                  </li>
                </ul>
                <ul className="text-left space-y-4">
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> Contemporary
                    Aesthetics
                  </li>
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> On Time
                    Handover
                  </li>
                  <li>
                    <CheckCircleIcon className="text-[#135F4A]" /> Budget
                    Friendly
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Construction, Interior, and Additional Services */}
          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {serviceData?.data?.services?.map((service: TServices, index: number) => (
              <div
                key={index}
                className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded"
              >
                <div>
                  <Image
                    src={service.image}
                    alt=""
                    className="h-[200px] object-cover rounded"
                    width={500}
                    height={500}
                  />
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#135F4A]">
                    {service.title}
                  </h3>
                  <div className="mt-2 text-gray-700 text-justify">

                    {renderContent(service.description.slice(0, 120))}
                  </div>
                  <Link href={`/services/${service._id}`}>
                    <button className="bg-[#135F4A] text-white px-4 py-2 rounded mt-4 text-sm">
                      See Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
        <Affiliation />
      </div>
    </>
  );
};

export default page;
