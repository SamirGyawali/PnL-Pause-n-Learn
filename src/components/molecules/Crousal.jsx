import React, { useState } from "react";

import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import { MoveLeft, MoveRight } from "lucide-react";

const Crousal = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        speed={600}
        modules={[Navigation]}
        spaceBetween={10}
        className="mySwiper w-full h-full rounded-2xl"
      >
        <div className="flex items-center gap-6 absolute right-10 bottom-6 z-50 text-white">
          <button
            className={`custom-prev hover:cursor-pointer py-2.5 px-5 bg-[#383838ad] hover:bg-[#292727c9] rounded-lg ${
              activeIndex === 0 ? "opacity-40 pointer-events-none" : ""
            }`}
            disabled={activeIndex === 0}
          >
            {<MoveLeft strokeWidth={1} />}
          </button>
          <button className="custom-next hover:cursor-pointer py-2.5 px-5 bg-[#383838ad] hover:bg-[#292727c9] rounded-lg">
            {<MoveRight strokeWidth={1} />}
          </button>
        </div>
        <SwiperSlide>
          <img
            src={slide1}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide1}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide11}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide1}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt="image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Crousal;
