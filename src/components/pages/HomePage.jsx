import React from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide11 from "../../assets/slide11.jpg";
import logo from "../../assets/logonav.png";

import Slide from "../molecules/slide";
import ProgressBar from "../atoms/progressbar";
import useSlider from "../../hooks/useSlider";
import { PhoneIcon } from "lucide-react";
import Button from "../atoms/button";

const slides = [
  {
    id: 1,
    title: "Gridhar gopal hare krishna hare krishna krishna krishna hare hare",
    meta: "UPDATE • INSTALLATION",
    image: slide1,
  },
  {
    id: 2,
    title:
      "Hare krishna Hare krishna krishna hare hare hare ram hare ram ram hare hare",
    meta: "PROJECT • MASTERPLAN",
    image: slide2,
  },
  {
    id: 3,
    title: "Jay Jagannath, hare krishna hare krishna krishna hare hare",
    meta: "PROJECT • ARCHITECTURE",
    image: slide3,
  },
  {
    id: 4,
    title:
      "Hare Ram Hare Ram Ram Ram hare hare, hare krishna hare krishna krishna hare hare",
    meta: "PROJECT • ARCHITECTURE",
    image: slide11,
  },
];

export default function HomePage() {
  const { active, progress, goTo } = useSlider(slides, 2400);

  return (
    <div className="flex flex-col">
      <div className="fixed top-0 z-99 backdrop-blur-sm w-full pt-2 pb-2 px-9 flex justify-between overflow-hidden">
        <a href="#" className="font-extrabold font-sans text-[16px]">
          <img
            src={logo}
            alt="logo"
            className={`w-[20px] mr-9 object-cover scale-220 translate-y-1`}
            style={{ transformOrigin: "center center" }}
          />
        </a>
        <div className="flex gap-3">
          <Button label="RETREATS" />
          <Button label="TRAININGS" />
          <Button label="UPDATES" />
          <Button icon={<PhoneIcon size={11} fill="#1a1a1a" stroke="0" />} />
        </div>
      </div>
      {/* this element dictates the space and serves as the positioning anchor for all absolute elements inside 
        here we're having defined height of the parent so that the child can adapt accordingly*/}
      <div className="stage-setter-element relative h-[calc(85svh-.75rem)] md:h-[calc(100svh-.75rem)] w-full px-3 pt-[49px] overflow-hidden">
        <div className="relative w-full h-full rounded-xl">
          {slides.map((slide, index) => (
            /* 
                each individual slides, should occupy exact same space so that we can fade between them. 
                this is done by taking the slide out of normal flow and stretching them to fill the stage(parent)
            */
            <Slide slide={slide} isActive={index === active} key={slide.id} />
          ))}
          {/* Overlay info */}
          <div className="absolute bottom-0 left-0 sm:bottom-3 sm:left-3 space-y-2 z-20 bg-[#d6d6d6] sm:bg-[#000000]/45 sm:text-white backdrop-blur-sm backdrop-saturate-80 rounded-xl w-[inherit] sm:w-[360px] p-3">
            <div className="flex gap-4 flex-row">
              {slides.map((_, idx) => (
                <ProgressBar
                  progress={progress}
                  isActive={idx === active}
                  onClick={() => goTo(idx)}
                  key={idx}
                />
              ))}
            </div>

            <div className="mt-2 max-w-[300px] w-[inherit] sm:w-[240px]">
              <h2 className="font-sans text-sm sm:text-lg font-medium w-full leading-tight truncate">
                {slides[active].title}
              </h2>
              <p className="font-mono text-[15px] opacity-90 mt-1">
                {slides[active].meta}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
