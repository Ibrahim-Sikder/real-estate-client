import React from "react";
import Image from "next/image";
import img1 from "../../../../../../src/assets/images/properties/p1.jpg";
import img2 from "../../../../../../src/assets/images/properties/p2.jpg";
import img3 from "../../../../../../src/assets/images/properties/p3.jpg";
import img4 from "../../../../../../src/assets/images/properties/p4.jpg";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import Container from "@/components/share/Container";
import Banner from "../_components/Banner";

const page = () => {
  const properties = [
    {
      id: 1,
      image: img1,
      title: "Villa on Grand Avenue",
      date: "09/26/2024",
      price: "10000",
      location: "Mirpur",
    },
    {
      id: 2,
      image: img2,
      title: "Home in Coral Gables",
      date: "09/24/2024",
      rating: "4.7",
      location: "Gulshan",
    },
    {
      id: 3,
      image: img3,
      title: "Home in Coral Gables",
      date: "09/24/2024",
      location: "Banani",
    },
    {
      id: 4,
      image: img4,
      title: "Home in Coral Gables",
      date: "09/24/2024",
      location: "Uttara",
    },
  ];

  return (
    <>
      <Banner />
      <Container className="my-10">
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
      </Container>
    </>
  );
};

export default page;
