"use client";
import React, { useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import img1 from "../../../../src/assets/images/banner/banner1.jpg";
import img2 from "../../../../src/assets/images/banner/banner2.jpg";
import img3 from "../../../../src/assets/images/banner/banner3.jpg";
import img4 from "../../../../src/assets/images/banner/banner3.jpg";
import img5 from "../../../../src/assets/images/banner/banner3.jpg";
import { Swiper as SwiperType } from "swiper";

const slides = [
  { img: img1 },
  { img: img2 },
  { img: img3 },
  { img: img4 },
  { img: img5 },
];

const Slider = () => {
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-auto md:h-[400px] lg:h-[500px]">
              <Image
                src={slide.img}
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
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100px]">
              <Image
                src={slide.img}
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

export default Slider;
