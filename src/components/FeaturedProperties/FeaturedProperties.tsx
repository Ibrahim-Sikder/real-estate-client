/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Styles.css";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import Image from "next/image";
import Loader from "../share/Loader/Loader";
import Link from "next/link";
import { TProject } from "@/types/project";

import EastIcon from "@mui/icons-material/East";
import img from "../../assets/images/Jolchaya-hazaribag/Jolchaya 01.jpg";

const FeaturedProperties = () => {
  const [projectData, setProjectData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/project`,
          { cache: "no-store" }
        );
        const data = await response.json();
        setProjectData(data);
      } catch (err: any) {
        setError("Failed to fetch project data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  if (loading) {
    <Loader />;
  }

  if (error) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        {error}
      </h1>
    );
  }

  if (!projectData) {
    return (
      <h1 className="mt-10 flex items-center justify-center text-3xl">
        Oops! Project data not found!
      </h1>
    );
  }

  const featuredImages = projectData?.data?.projects
    .filter((project: any) => project.feature === true)
    .flatMap((project: any) => project.overviewImages || []);

  return (
    <>
      <div className="bg  py-10 sectionMargin">
        <div className="flex justify-center py-5" data-aos="fade-up">
          <h1 className="text-center mb-5 text-white z-10 absolute uppercase">
            Featured Properties
          </h1>
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
            pauseOnMouseEnter: true,
          }}
          speed={2000}
          pagination={true}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
          data-aos="fade-up"
        >
          {projectData?.data?.projects?.map((data: TProject) => (
            <div key={data._id}>
              {featuredImages?.map((img: any, i: number) => (
                <SwiperSlide key={i} className="relative ">
                  <Link href={`/projects/${data._id}`}>
                    <div className="relative ">
                      <Image
                        src={img}
                        className="md:h-[450px] h-[250px]"
                        alt="feature"
                        width={500}
                        height={6000}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:h-[450px] h-[250px]"></div>
                      <p className="absolute bottom-0 w-full text-white text-center py-4 md:text-2xl text-sm font-semibold">
                        {data.title}
                      </p>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default FeaturedProperties;
