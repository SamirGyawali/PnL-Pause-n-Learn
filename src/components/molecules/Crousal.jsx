import React from "react";

import { Navigation, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";

const Crousal = () => {
  return (
    <>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation, FreeMode]}
        freeMode={true}
        spaceBetween={10}
        className="mySwiper w-full h-full rounded-2xl"
      >
        <div className="flex items-center gap-6 absolute right-10 bottom-6 z-50 text-white">
          <button className="custom-next hover:cursor-pointer p-3 hover:text-neutral-200">NEXT</button>
          <button className="custom-prev hover:cursor-pointer p-3 hover:text-neutral-200">PREV</button>
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
