import React from "react";
import Image from "next/image"; // If using Next.js
import img1 from "../../../../src/assets/images/properties/p1.jpg";
import img2 from "../../../../src/assets/images/properties/p2.jpg";
import img3 from "../../../../src/assets/images/properties/p3.jpg";
import img4 from "../../../../src/assets/images/properties/p4.jpg";
import img5 from "../../../../src/assets/images/properties/p5.jpg";
import img6 from "../../../../src/assets/images/properties/p6.jpg";
import img7 from "../../../../src/assets/images/properties/p7.jpg";
import img8 from "../../../../src/assets/images/properties/p8.jpg";
import Container from "@/components/share/Container";
import Banner from "@/components/share/Banner/Banner";

// Banner Image
// import bannerImg from "../../../../src/assets/images/banner/banner1.jpg";

const Gallery = () => {
  const images = [
    { id: 1, title: "Beautiful House 1", src: img1 },
    { id: 2, title: "Modern Apartment 2", src: img2 },
    { id: 3, title: "Luxury Villa 3", src: img3 },
    { id: 4, title: "Cozy Cottage 4", src: img4 },
    { id: 5, title: "Spacious Condo 5", src: img5 },
    { id: 6, title: "Elegant Mansion 6", src: img6 },
    { id: 7, title: "Rustic Farmhouse 7", src: img7 },
    { id: 8, title: "Stylish Penthouse 8", src: img8 },
  ];

  return (
    <>
      {/* Banner Section */}
      {/* <div className="relative w-full h-[400px]">
        <Image
          src={bannerImg}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="uppercase text-white">Gallery</h1>
        </div>
      </div> */}
      <Banner />
      {/* Gallery Section */}
      <Container className="my-20">
        <h1 className="text-center text-3xl font-bold text-[#135F4A] mb-10 uppercase">
          Property Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <Image
                src={image.src}
                alt={image.title}
                className="w-full h-[350px] object-cover"
              />
              <p className="text-lg text-center text-white bg-[#135F4A] py-2">
                {image.title}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Gallery;
