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
import banner from "../../../../src/assets/images/banner/banner.jpg";

import "./Slider.css";
import Container from "../Container";

const slides = [
  {
    img: banner,
  },
  {
    img: banner,
  },
  {
    img: banner,
  },
];

const Slider = () => {
  return (
    <>
      {/* <Container>
        <div className="lg:h-[500px] mt-5">
          <Image src={banner} alt="" className="h-full w-full" />
        </div>
      </Container> */}
      <Container>
        <div className=" -py-20">
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
              <SwiperSlide key={index} className="h-[1200px]">
                <div className="relative w-full h-auto md:h-[400px] lg:h-[1200px]">
                  <Image
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    objectFit="cover"
                    className="slide-image h-auto md:h-[400px] lg:h-[1200px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default Slider;

