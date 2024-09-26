"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import img1 from "../../../assets/images/banner/banner.jpg";

import "./Slider.css";

const slides = [
  {
    img: img1,
  },
  {
    img: img1,
  },
  {
    img: img1,
  },
];

const Slider = () => {
  return (
    <>
      <div className="slider-container">
        <Swiper
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          spaceBetween={0}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="">
              <div className="relative w-full h-auto md:h-[400px] lg:h-[600px]">
                <Image
                  src={slide.img}
                  alt={`Slide ${index + 1}`}
                  objectFit="cover"
                  className="slide-image h-auto md:h-[400px] lg:h-[600px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
