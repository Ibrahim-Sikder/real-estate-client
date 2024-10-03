"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import banner from "../../../../src/assets/images/banner/adl.jpg";


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
    {
        img: banner,
    },
];

const Slider = () => {

    return (
        <>
            <Container>
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
                            <SwiperSlide key={index}>
                                <div className="relative w-full lg:h-[600px] md:[400px] h-[300px] ">
                                    <Image
                                        src={slide.img}
                                        alt={`Slide ${index + 1}`}
                                        // layout="fill"
                                        // objectFit="cover"
                                        className="lg:h-[600px] md:[400px] h-[300px] slider-image"
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