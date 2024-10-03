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
    name: "Mr. Moshad Alam",
    company: "Homebuyers Realty",
    location: "Dhaka",
    rating: 5,
    image: profile1,
    reviewTitle: "Exceptional Quality and Professionalism",
    review:
      "Anaa Developers Ltd. exceeded my expectations as a flat buyer. From the initial inquiry to the handover, the team was professional, transparent, and always responsive. The quality of construction is top-notch, and the attention to detail in every aspect of the project is commendable. I highly recommend them for anyone looking to invest in real estate in Bangladesh.",
  },
  {
    name: "Mr. Ibrahim",
    company: "Elite Homes",
    location: "Comilla",
    rating: 4,
    image: profile2,
    reviewTitle: "A Trustworthy Developer You Can Rely On",
    review:
      "As a share buyer in one of Anaa Developers Ltd.'s projects, I was initially concerned about transparency and deadlines. However, they proved to be reliable and trustworthy throughout the entire process. The company's commitment to delivering on time, along with excellent customer service, has made me a satisfied investor. I am confident in their future projects and would not hesitate to invest again.",
  },
  {
    name: "Mr. AHM Anowar",
    company: "Luxury Estates",
    location: "Chittagong",
    rating: 5,
    image: profile3,
    reviewTitle: "Top-Notch Construction and Great Value",
    review:
      "I purchased a flat from Anaa Developers Ltd. and couldn't be happier with my decision. The construction quality is excellent, and the design of the apartment makes great use of space. They offer incredible value for the price, and their customer service team was always available to address my concerns. If you're looking for a hassle-free home-buying experience in Bangladesh, Anaa Developers Ltd. is the company to go with.",
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
                  <div className="w-full lg:flex items-center">
                    <div className="lg:border-r lg:border-dashed lg:border-gray-500 lg:w-[900px] flex flex-col content-center items-center justify-center text-center space-x-3">
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
