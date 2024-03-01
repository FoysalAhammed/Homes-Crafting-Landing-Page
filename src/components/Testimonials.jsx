import React, { useRef, useState } from "react";
import { TESTIMONIALS } from "../utils/data";
import TestimonialsCard from "./Cards/TestimonialsCard";
import Slider from "react-slick";

const Testimonials = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed:800,
    autoplaySpeed: 4000,
    responsive:[
        {
            breakpoint:769,
            settings:{
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
  };
  return (
    <section id="testimonial" className="max-w-[1200px] py-16 mx-auto">
      <h5 className="text-2xl font-semibold text-darkBlue text-center mb-16 ">
        Testimonials
      </h5>
      <div className=" relative mb-7 px-5 md:px-10">
    <Slider ref={sliderRef} {...settings}>
    {TESTIMONIALS.map((item) => (
          <TestimonialsCard
            key={item.id}
            name={item.name}
            imgUrl={item.imgUrl}
            review={item.review}
            description={item.description}
          />
        ))}
    </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
