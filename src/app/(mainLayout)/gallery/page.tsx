import React from "react";
import Image from "next/image";
import img1 from "../../../../src/assets/images/projects/04 twin tower hajaribag.jpg";
import img2 from "../../../../src/assets/images/projects/Jolchaya 04.jpg";
import img3 from "../../../../src/assets/images/projects/Pubayan City_01.jpg";
import img4 from "../../../../src/assets/images/projects/SHOPNODEEP UTTARA  (3).jpg";
import img5 from "../../../../src/assets/images/projects/Jolchaya 07.jpg";
import img6 from "../../../../src/assets/images/projects/SHOPNODEEP.jpg";
import img7 from "../../../../src/assets/images/projects/Pubayan City_03.jpg";
import img8 from "../../../../src/assets/images/projects/05 bagan bilash mirpur.jpg";
import Container from "@/components/share/Container";
import GalleryBanner from "./GalleryBanner";
import Affiliation from "@/components/Affiliation/Affiliation";
import Header from "@/components/share/Header/Header";

const Gallery = () => {
  const gallery = [
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
    <>
    <Header/>
      <GalleryBanner />
      <Container className="my-20">
        <h1 className="text-center text-3xl font-bold text-[#135F4A] mb-10 uppercase">
          Property Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {gallery.map((data) => (
            <div key={data.id} className="relative group">
              <Image
                src={data.image}
                alt={data.title}
                className="w-full h-[350px] object-cover"
              />
              <p className="text-lg text-center text-white bg-[#135F4A] py-2">
                {data.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-7">
          <button className="bg-[#135F4A] px-6 py-2 text-white">
            Load More
          </button>
        </div>
        <Affiliation/>
      </Container>
    </>
  );
};

export default Gallery;
