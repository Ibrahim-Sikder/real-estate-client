/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./PropertyGallery.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import img1 from "../../../../assets/images/gallery/gallery (1).jpg";
import img2 from "../../../../assets/images/gallery/gallery (2).jpg";
import img3 from "../../../../assets/images/gallery/gallery (3).jpg";
import img4 from "../../../../assets/images/gallery/gallery (4).jpg";
import img5 from "../../../../assets/images/gallery/gallery (5).jpg";
import { Swiper as SwiperType } from "swiper";
import { OverviewProps } from "@/types/project";


const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
];

const PropertyGallery: React.FC<OverviewProps> = ({ projectData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <>
      {/* Main Swiper for large images */}
      <SwiperComponent
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {projectData?.overviewImages?.slice(0, 1).map((slide, index: number) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-auto md:h-[400px] lg:h-[500px]">
              <Image
                width={10000}
                height={500}
                src={slide}
                alt={`Slide ${index + 1}`}
                objectFit="cover"
                className="h-auto md:h-[400px] lg:h-[500px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>

      {/* Thumbnail Swiper */}
      <SwiperComponent
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {projectData?.overviewImages?.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100px]">
              <Image
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                width={100}
                height={100}
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
    </>
  );
};

export default PropertyGallery;
