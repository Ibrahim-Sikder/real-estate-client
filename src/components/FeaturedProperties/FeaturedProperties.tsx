import React from "react";
import Container from "../share/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Styles.css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import img1 from "../../../src/assets/images/featured/1.jpg";
import img2 from "../../../src/assets/images/featured/2.jpg";
import img3 from "../../../src/assets/images/featured/3.jpg";
import img4 from "../../../src/assets/images/featured/4.jpg";
import img5 from "../../../src/assets/images/featured/5.jpg";
import img6 from "../../../src/assets/images/featured/6.jpg";
import img7 from "../../../src/assets/images/featured/7.jpg";
import img8 from "../../../src/assets/images/featured/8.jpg";

const FeaturedProperties = () => {
  const featured = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
    { id: 7, image: img7 },
    { id: 8, image: img8 },
  ];

  return (
    <Container>
      <div className="bg my-20 py-10">
        <div className="flex justify-center py-5">
          <h2 className="text-center mb-8 text-white z-10 absolute uppercase">
            Featured Properties
          </h2>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          speed={2000}
          pagination={true}
          breakpoints={{
            320: {
              slidesPerView: 1, // Mobile phones
            },
            640: {
              slidesPerView: 2, // Tablets
            },
            1024: {
              slidesPerView: 3, // Desktops
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {featured.map((data) => (
            <SwiperSlide key={data.id}>
              <Image src={data.image} alt={`Featured ${data.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default FeaturedProperties;
