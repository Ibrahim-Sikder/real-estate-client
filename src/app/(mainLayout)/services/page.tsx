import React from "react";
import Image from "next/image";
import img5 from "../../../../src/assets/images/services/image (5).jpg";
import img2 from "../../../../src/assets/images/banner/1.jpeg";
import img3 from "../../../../src/assets/images/about/2.jpg";
import img4 from "../../../../src/assets/images/banner/2.jpg";
import Container from "@/components/share/Container";
import Affiliation from "@/components/Affiliation/Affiliation";
import ServiceBanner from "./ServiceBanner";
import Link from "next/link";
import Header from "@/components/share/Header/Header";

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
    <>
      <Header />
      <div className="bg-gray-100">
        <ServiceBanner />
        <Container className="py-20">
          <h1 className="text-3xl font-bold text-center uppercase">
            Our Services
          </h1>
          <div className="lg:w-28 mx-auto h-1 bg-[#135F4A] rounded-full mt-2 mb-7" />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded"
              >
                <div>
                  <Image
                    src={service.image}
                    alt=""
                    className="h-full rounded"
                  />
                </div>
                <div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#135F4A]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-gray-700 text-justify">
                    {service.description.slice(0, 120)}
                  </p>
                  <Link href="/services/id">
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
