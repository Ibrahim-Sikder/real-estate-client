import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Container from "@/components/share/Container";
import profile1 from "../../../src/assets/images/testimonial/profile.jpg";
import profile2 from "../../../src/assets/images/testimonial/profile.jpg";
import profile3 from "../../../src/assets/images/testimonial/profile.jpg";
import bgImage from "../../../src/assets/images/testimonial/map.png";

const testimonials = [
  {
    name: "John Doe",
    company: "Homebuyers Realty",
    location: "New York",
    rating: 5,
    image: profile1,
    reviewTitle: "Exceptional Service and Smooth Transaction",
    review:
      "Working with this real estate company was a pleasure from start to finish. They guided me through every step of buying my first home, and I couldn't be happier with the outcome!",
  },
  {
    name: "Sarah Johnson",
    company: "Elite Homes",
    location: "California",
    rating: 4,
    image: profile2,
    reviewTitle: "Professional and Responsive",
    review:
      "I sold my house with their help, and they made the entire process stress-free. Their marketing and communication were top-notch, and they helped me get the best price for my property.",
  },
  {
    name: "Michael Smith",
    company: "Luxury Estates",
    location: "Miami",
    rating: 5,
    image: profile3,
    reviewTitle: "Outstanding Attention to Detail",
    review:
      "They truly understand the luxury market. Their attention to detail and personalized service made my experience of purchasing a high-end property seamless and enjoyable.",
  },
];

const Testimonials = () => {
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
              {testimonials.map((testimonial, index) => (
                <div key={index} className="">
                  <div className="w-full lg:flex">
                    <div className="lg:border-r lg:border-dashed lg:border-gray-500 lg:w-[600px] flex flex-col content-center items-center justify-center text-center space-x-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full w-[150px] h-[150px] mb-4"
                      />
                      <h3 className="text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-500 mb-2">
                        {testimonial.company}, {testimonial.location}
                      </p>
                      <div className="flex mb-4 gap-4">
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                          <span key={i} className="text-yellow-500">
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="lg:mx-8 space-y-5">
                      <p className="font-bold font-sans text-2xl lg:text-3xl text-justify">
                        {testimonial.reviewTitle}
                      </p>
                      <p className="text-justify">{testimonial.review}</p>
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
