import React from "react";
import Image from "next/image";
import img1 from "../../../../src/assets/images/collage/image (1).jpg";
import img2 from "../../../../src/assets/images/banner/1.jpeg";
import img3 from "../../../../src/assets/images/about/2.jpg";
import img4 from "../../../../src/assets/images/banner/2.jpg";
import img5 from "../../../../src/assets/images/banner/banner5.jpg";
import Container from "@/components/share/Container";
import Banner from "@/components/share/Banner/Banner";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Affiliation from "@/components/Affiliation/Affiliation";

// Service Data Array
const services = [
  {
    title: "Construction Services",
    description:
      "Our concern ANAA Engineering & Constructions Ltd. is a leading construction company in Dhaka, Bangladesh. Our highly talented architects and designers ensure state-of-the-art construction services.",
    image: img2,
  },
  {
    title: "Interior Services",
    description:
      "ANAA Interior is the home of creative designers skilled in the latest design technologies. We make the best use of your property's space and come up with a superior work designed to meet your particular requirements.",
    image: img3,
  },
  {
    title: "Renovation Services",
    description:
      "We offer renovation services that can transform your existing space into something modern and functional, ensuring minimal disruption to your daily life.",
    image: img4,
  },
  {
    title: "Landscape Design",
    description:
      "Our landscape design services bring nature into your surroundings. We create aesthetic outdoor spaces that enhance the beauty of your property.",
    image: img5,
  },
];

const page = () => {
  return (
    <div className="bg-gray-100">
      <Banner />
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
            <p className="mt-6 text-gray-600 text-justify">
              ANAA Developers Limited offers construction and interior services that meet
              the requirements of the clients and at the same time, maintain
              superior quality. The company has provided construction and
              interior services to a significant number of clients in the
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

        {/* Construction, Interior, and Additional Services */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded"
            >
              <div>
                <Image src={service.image} alt="" className="h-full rounded" />
              </div>
              <div>
                <h3 className="mt-4 text-2xl font-semibold text-[#135F4A]">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-700 text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <Affiliation/>
    </div>
  );
};

export default page;
