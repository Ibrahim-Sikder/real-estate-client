import Container from "@/components/share/Container";
import React from "react";
import img1 from "../../../../src/assets/images/projects/04 twin tower hajaribag.jpg";
import img2 from "../../../../src/assets/images/projects/Jolchaya 04.jpg";
import img3 from "../../../../src/assets/images/projects/Pubayan City_01.jpg";
import img4 from "../../../../src/assets/images/projects/SHOPNODEEP UTTARA  (3).jpg";
import img5 from "../../../../src/assets/images/projects/Jolchaya 07.jpg";
import img6 from "../../../../src/assets/images/projects/SHOPNODEEP.jpg";
import img7 from "../../../../src/assets/images/projects/Pubayan City_03.jpg";
import img8 from "../../../../src/assets/images/projects/05 bagan bilash mirpur.jpg";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import ProjectsBanner from "./ProjectsBanner";
import Affiliation from "@/components/Affiliation/Affiliation";

const page = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      title: "Twin Tower",
      date: "09/26/2024",
      price: "10000",
      location: "Hazaribag",
    },
    {
      id: 2,
      image: img2,
      title: "Jolchaya",
      date: "09/24/2024",
      rating: "4.7",
      location: "Hazaribag",
    },
    {
      id: 3,
      image: img3,
      title: "Pubayan City",
      date: "09/24/2024",
      location: "Shatarkul Badda",
    },
    {
      id: 4,
      image: img4,
      title: "Shopnodeep",
      date: "09/24/2024",
      location: "Uttara",
    },
    {
      id: 5,
      image: img5,
      title: "Twin Tower",
      date: "09/26/2024",
      price: "10000",
      location: "Hazaribag",
    },
    {
      id: 6,
      image: img6,
      title: "Jolchaya",
      date: "09/24/2024",
      rating: "4.7",
      location: "Hazaribag",
    },
    {
      id: 7,
      image: img7,
      title: "Pubayan City",
      date: "09/24/2024",
      location: "Shatarkul Badda",
    },
    {
      id: 8,
      image: img8,
      title: "Shopnodeep",
      date: "09/24/2024",
      location: "Uttara",
    },
  ];
  return (
    <div>
      <ProjectsBanner />
      <Container>
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {properties.map((data) => (
              <div key={data.id} className="relative group">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] via-transparent to-transparent"></div>

                {/* Content */}
                <div className="absolute lg:top-80 md:top-96 top-80 left-10">
                  <h3 className="text-white text-lg font-semibold">
                    {data.title}
                  </h3>
                  <p className="text-white text-sm">{data.location}</p>
                </div>

                {/* Button with background color */}
                <Link
                  href={`/properties/completed-projects/${data.id}`}
                  className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <button className="text-white bg-transparent group-hover:bg-[rgba(0,0,0,0.7)] transition duration-300 p-2 rounded-full">
                    <EastIcon />
                  </button>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-7">
            <button className="bg-[#135F4A] px-6 py-2 text-white">
              Load More
            </button>
          </div>
        </div>
        <Affiliation />
      </Container>
    </div>
  );
};

export default page;
