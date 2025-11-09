import React from "react";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";
import slide4 from "../../assets/slide4.jpg";

import Slide from "../molecules/slide";
import ProgressBar from "../atoms/progressbar";
import useSlider from "../../hooks/useSlider";
import NavigationDots from "../atoms/navigation-dots";

const slides = [
  {
    id: 1,
    title: "Shri Meera ji",
    meta: "UPDATE • INSTALLATION",
    image: slide1,
  },
  {
    id: 2,
    title: "Shenzhen Bay Culture Park",
    meta: "PROJECT • MASTERPLAN",
    image: slide2,
  },
  {
    id: 3,
    title: "Harbin Opera House",
    meta: "PROJECT • ARCHITECTURE",
    image: slide3,
  },
  {
    id: 4,
    title: "PnL Studio",
    meta: "PROJECT • ARCHITECTURE",
    image: slide4,
  },
];

export default function HomePage() {
  const { active, progress, goTo } = useSlider(slides, 6000);

  return (
    <div className="flex flex-col">
      {/* this element dictates the space and serves as the positioning anchor for all absolute elements inside 
        here we're having defined height of the parent so that the child can adapt accordingly*/}
      <div className="stage-setter-element relative h-[calc(85svh-.75rem)] md:h-[calc(100svh-.75rem)] w-full px-3 pt-[40px] overflow-hidden">
        <div className="relative w-full h-full rounded-xl">
          {slides.map((slide, index) => (
            /* 
                each individual slides, should occupy exact same space so that we can fade between them. 
                this is done by taking the slide out of normal flow and stretching them to fill the stage(parent)
            */
            <Slide slide={slide} isActive={index === active} />
          ))}
        </div>

        <div className="absolute bottom-5 left-10 z-30">
          <div className="flex gap-4">
            {slides.map((_, idx) => (
              <ProgressBar
                progress={progress}
                isActive={idx === active}
                onClick={() => goTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
