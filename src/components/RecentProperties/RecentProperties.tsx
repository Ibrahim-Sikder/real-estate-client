import React from "react";
import Image from "next/image";
import Container from "../share/Container";
import img from "../../../src/assets/images/properties/1.jpg";
import agent from "../../../src/assets/images/properties/agent.jpg";

const RecentProperties = () => {
  const properties = [
    {
      id: 1,
      image: img,
      title: "Villa on Grand Avenue",
      date: "09/26/2024",
      price: "10000",
      rating: "4.5",
      location: "Merrick Way, Miami, FL 33134, USA",
      user: {
        name: "Nathan James",
        profile: agent,
      },
    },
    {
      id: 2,
      image: img,
      title: "Home in Coral Gables",
      date: "09/24/2024",
      price: "7500",
      rating: "4.7",
      location: "Deering Bay Drive, Coral Gables, FL",
      user: {
        name: "Melissa William",
        profile: agent,
      },
    },
    {
      id: 3,
      image: img,
      title: "Home in Coral Gables",
      date: "09/24/2024",
      price: "7500",
      rating: "4.7",
      location: "Deering Bay Drive, Coral Gables, FL",
      user: {
        name: "Melissa William",
        profile: agent,
      },
    },
  ];

  return (
    <Container className="my-20">
      <div>
        <p className="text-center text-[#135F4A] font-semibold">Recent</p>
        <h1 className="text-center uppercase mt-3">Properties</h1>
        <p className="text-center mt-3">
          Check out some of our latest properties.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {properties.map((property) => (
            <div key={property.id} className="shadow-lg overflow-hidden">
              {/* Property Image with zoom-in effect on hover */}
              <div className="overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover mb-5 transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <div className="flex justify-between mb-2">
                  <span className="text-green-500 font-bold">
                    ${property.price}
                  </span>
                  <span className="text-yellow-500">{property.rating} ★</span>
                </div>
                <p className="text-gray-500 mb-2">Listed on: {property.date}</p>
                <div className="flex items-center mt-4">
                  <Image
                    src={property.user.profile}
                    alt={property.user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-semibold">
                      {property.user.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentProperties;
