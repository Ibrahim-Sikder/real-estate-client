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
              ANAA Developers Limited offers construction and interior services
              that meet the requirements of the clients and at the same time,
              maintain superior quality. The company has provided construction
              and interior services to a significant number of clients in the
              country and has already achieved the trust of them by rendering
              quality service.
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
                  <CheckCircleIcon className="text-[#135F4A]" /> Budget Friendly
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="mt-20 bg-gray-100 p-10 rounded shadow-md">
          <h2 className="text-[#135F4A] uppercase text-center">
            Why Choose Us
          </h2>
          <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <CheckCircleIcon className="text-[#135F4A] text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Customizable Solutions</h3>
              <p className="text-gray-600 mt-2">
                Tailored services to meet the specific needs of each client,
                ensuring customer satisfaction.
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="text-[#135F4A] text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Eco-Friendly Approach</h3>
              <p className="text-gray-600 mt-2">
                We prioritize sustainable practices, contributing to a greener
                future.
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="text-[#135F4A] text-5xl mb-4" />
              <h3 className="text-xl font-semibold">Excellent Support</h3>
              <p className="text-gray-600 mt-2">
                24/7 support from our professional team, ensuring timely
                assistance for all your needs.
              </p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-[#135F4A] uppercase text-center">
            Customer Testimonials
          </h2>
          <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white p-6 shadow-lg rounded">
              <p className="text-gray-600">
                ANAA Developers Ltd exceeded our expectations with their
                attention to detail and professionalism. We are extremely
                satisfied with the service!
              </p>
              <p className="text-right mt-4 font-bold">- John Doe</p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <p className="text-gray-600">
                Their team is truly the best. They managed our project
                efficiently and delivered on time!
              </p>
              <p className="text-right mt-4 font-bold">- Sarah Smith</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="mt-20 text-center">
          <h2 className="text-[#135F4A] uppercase">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mt-4">
            Contact us today for a free consultation and see how we can bring
            your vision to life.
          </p>
          <button className="bg-[#135F4A] text-white px-8 py-3 mt-6 rounded">
            Get a Free Quote
          </button>
        </div>

        {/* Recent Projects Section */}
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
