import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Container from "@/components/share/Container";
import bgImage from "../../../src/assets/images/testimonial/map.png";


export type TReview = {
  name: string,
  description: string,
  title: string,
  designation: string,
  createdAt: string,
  image: string,
}


const Testimonials = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/reviews`, {
    cache: "no-store",
  });
  const reviewsData = await response.json()


  if (!reviewsData) {
    return <h1 className="mt-10 flex items-center justify-center text-3xl capitalize ">Oops! Review data not found! </h1>

  }


  console.log(reviewsData)

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <>
      <div
        className="w-auto lg:w-full bg-bottom lg:bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <Container>
          <div className="w-full py-20 bg-opacity-80">
            <h2 className="text-center text-[#135F4A] text-xl mb-6">
              Testimonials
            </h2>
            <h2 className="text-center text-3xl font-bold mb-6">
              What Our Clients Say About Us
            </h2>
            <Slider {...settings}>
              {reviewsData?.data?.reviews.map((review: TReview, index: number) => (
                <div key={index} className="">
                  <div className="w-full lg:flex items-center">
                    <div className="lg:border-r lg:border-dashed lg:border-gray-500 lg:w-[900px] flex flex-col content-center items-center justify-center text-center space-x-3">
                      <Image
                        src={review.image}
                        alt={review.name}
                        width={500}
                        height={20}
                        className="rounded-full w-[150px] h-[150px] mb-4"
                      />
                      <h3 className="text-2xl font-semibold">
                        {review.name}
                      </h3>
                      <p className="text-gray-500 mb-2">
                        {review?.designation}
                      </p>
                      {/* <div className="flex mb-4 gap-4">
                        {Array.from({ length: review?.rating }, (_, i) => (
                          <span key={i} className="text-yellow-500">
                            &#9733;
                          </span>
                        ))}
                      </div> */}
                    </div>
                    <div className="lg:mx-8 space-y-5">
                      <p className="font-bold font-sans text-2xl lg:text-3xl text-justify">
                        {review.title}
                      </p>
                      <p className="text-justify">{review.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Testimonials;
