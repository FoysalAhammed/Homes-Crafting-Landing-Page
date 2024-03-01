import React from "react";
import star from "../../assets/star.png";
const TestimonialsCard = ({ description, review, imgUrl, name }) => {
  return (
    <div className="bg-white rounded-md p-5 border mx-2">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={imgUrl}
          className="w-14 h-1/4 md:w-16 md:h-16 rounded-full"
          alt=""
        />
        <div>
          <p className="text-sm md:text-base mb-1">{name}</p>
          <div className="flex items-end gap-[2px]">
            <img src={star} className="w-4 h-4 object-contain" alt="" />
            <img src={star} className="w-4 h-4 object-contain" alt="" />
            <img src={star} className="w-4 h-4 object-contain" alt="" />
            <img src={star} className="w-4 h-4 object-contain" alt="" />
            <img src={star} className="w-4 h-4 object-contain" alt="" />
            <img src={star} className="w-4 h-4 object-contain" alt="" />
          </div>
        </div>
      </div>
      <h6 className="text-sm md:text-base font-medium mb-1">{review}</h6>
      <span className="text-xs md:text-[13px] text-slate-500">{description}</span>
    </div>
  );
};

export default TestimonialsCard;
