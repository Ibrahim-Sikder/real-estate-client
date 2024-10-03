import React from "react";
import Image from "next/image";
import img1 from "../../../src/assets/images/projects/04 twin tower hajaribag.jpg";
import img2 from "../../../src/assets/images/projects/Jolchaya 04.jpg";
import img3 from "../../../src/assets/images/projects/Pubayan City_01.jpg";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const Common = () => {
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
  ];

  return (
    <>
      <div className="my-20">
        <h2 className="uppercase text-center mb-7 text-[#135F4A]">
          Ready Flat & Apartment Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div className="absolute lg:top-[370px] md:top-96 top-80 left-10">
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
      </div>
    </>
  );
};

export default Common;
