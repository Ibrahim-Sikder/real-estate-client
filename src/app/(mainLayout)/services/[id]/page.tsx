/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/share/Container";
import React from "react";
import ServiceBanner from "../ServiceBanner";

import Image from "next/image";
import Header from "@/components/share/Header/Header";
import ReactHtmlParser from "react-html-parser";
import SingleServiceCard from "../_components/SingleServiceCard";
interface PageProps {
  params: {
    id: string;
  };
}
const page = async ({ params }: PageProps) => {
  const { id } = params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/service/${id}`, {
    cache: "no-store",
  });
  const serviceData = await res.json();

  if (!serviceData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Service data not found! </h1>

  }
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


  console.dir(serviceData)



  return (
    <>
      <Header />
      <ServiceBanner />
      <Container className="my-20">
        {/* Services Details Section */}
        <div className="grid grid-cols-1 gap-10">
          <div>
            {
              serviceData?.data?.images.slice(0, 1).map((img:any) => (
                <>
                  <Image
                    height={1000}
                    width={10000}
                    src={img}
                    alt="Construction Services"
                    className="h-full object-fill lg:h-[500px] rounded"
                  />
                </>
              ))
            }
          </div>
          <div className="text-center">
            <h2 className="text-[#135F4A] uppercase">{serviceData?.data?.title}</h2>
            <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
            <p className="mt-6 text-gray-600 text-justify">
              {renderContent(serviceData?.data?.description)}
            </p>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="mt-20">
          <h2 className="text-[#135F4A] uppercase text-center">
            Our Recent Projects
          </h2>
          <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <SingleServiceCard />
        </div>
      </Container>
    </>
  );
};

export default page;
