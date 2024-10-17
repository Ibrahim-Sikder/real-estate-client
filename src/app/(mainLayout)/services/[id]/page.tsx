import Container from "@/components/share/Container";
import React from "react";
import ServiceBanner from "../ServiceBanner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import img1 from "../../../../..//src/assets/images/services/image (1).jpg";
import Image from "next/image";
import Header from "@/components/share/Header/Header";

const page = () => {
  return (
    <>
      <Header />
      <ServiceBanner />
      <Container className="my-20">
        {/* Services Details Section */}
        <div className="grid grid-cols-1 gap-10 shadow-lg rounded p-5 bg-white">
          <div>
            <Image
              src={img1}
              alt="Construction Services"
              className="h-full lg:h-[500px] rounded"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10 items-center">
            <div className="text-center">
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
            </div>
            {/* Services We Offer - Icon List */}
            <div className="lg:flex md:flex justify-center items-center gap-10 mt-10">
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
              <ul className="text-left space-y-4 lg:mt-0 md:mt-0 mt-4">
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> Contemporary
                  Aesthetics
                </li>
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> On Time
                  Handover
                </li>
                <li>
                  <CheckCircleIcon className="text-[#135F4A]" /> Budget Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Recent Projects Section */}
        <div className="mt-20">
          <h2 className="text-[#135F4A] uppercase text-center">
            Our Recent Projects
          </h2>
          <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Image src={img1} alt="Project 1" className="rounded shadow-lg" />
              <h3 className="text-lg font-semibold mt-4">
                Residential Complex
              </h3>
            </div>
            <div className="text-center">
              <Image src={img1} alt="Project 2" className="rounded shadow-lg" />
              <h3 className="text-lg font-semibold mt-4">Office Building</h3>
            </div>
            <div className="text-center">
              <Image src={img1} alt="Project 3" className="rounded shadow-lg" />
              <h3 className="text-lg font-semibold mt-4">Commercial Plaza</h3>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default page;
