import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import slide11 from "../../assets/slide11.jpg";
import ScrollProgressBar from "../atoms/ScrollProgressBar";
import NewsGrid from "../organism/NewsGrid";

import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpeg";

const news = [
  {
    id: 1,
    title: "The Celestial dance",
    meta: "2022 • Retreat at Himalayas",
    image: slide1,
  },
  {
    id: 2,
    title: "The Celestial dance",
    meta: "2023 • Dance",
    image: slide2,
  },
  {
    id: 3,
    title: "The Celestial dance",
    meta: "2024 • Fair Education",
    image: slide3,
  },
  {
    id: 4,
    title: "The Celestial dance",
    meta: "PROJECT • Pause",
    image: slide1,
  },
  {
    id: 5,
    title: "Harbin Opera House",
    meta: "PROJECT • Unlearn",
    image: slide1,
  },
  {
    id: 6,
    title: "The Celestial dance",
    meta: "PROJECT • one",
    image: slide3,
  },
  {
    id: 7,
    title: "Harbin Opera House",
    meta: "PROJECT • two",
    image: slide1,
  },
];

const EachBlog = () => {
  const ContentRef = useRef();

  return (
    <div className="min-w-screen min-h-screen p-12 relative bg-sky-50">
      <div className="absolute inset-0 min-w-screen h-[30%] p-12 bg-red-500"></div>
      <div className="flex flex-col items-center">
        <div className="mt-15 mb-55 max-h-[575px] aspect-[16/9] relative flex flex-col items-center">
          <img
            src={slide11}
            alt=""
            className="w-full h-full object-cover rounded-4xl"
          />
          <motion.div
            className="p-4 absolute -bottom-20 bg-neutral-950/45 backdrop-blur-[0.5rem] rounded-4xl text-3xl font-inter-light text-white text-center max-w-[600px] hover:cursor-grab"
            drag
            dragDirectionLock
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 400, bounceDamping: 20 }}
            dragElastic={0.1}
            whileDrag={{ cursor: "grabbing" }}
          >
            <span className="px-4 py-2 text-[13px] font-ibm-mono-regular bg-neutral-500/50 rounded-3xl tracking-wide hover:bg-neutral-300 hover:text-black transition-all duration-300 ease-in">
              PUBLICATION
            </span>
            <p className="p-6 pb-0">
              To whom has this thought arisen?” -to me.
            </p>
            <span className="text-sm font-ibm-mono-regular tracking-widest text-white">
              <span>3 MIN READ</span>
              <span>5 DECEMBER, 2025</span>
            </span>
          </motion.div>
        </div>
      </div>
      <div className="relative w-full flex flex-col items-center justify-center">
        <div
          className="bg-green-500 max-w-[1000px] flex flex-col h-[100vh]"
          ref={ContentRef}
        >
          hello dafidifaiofidsf oidfhiodfdfdfdasfi dfidhfio
          a;fdlkafjd;lfkjd;afiehf;ekn f;alfhe; oknfdklfldhf i;oaf;nfjd; fdklf
          dj;lakjirjei l;
        </div>
        <motion.div
          className="flex fixed items-center top-[35%] left-12 z-20"
        >
          <div className="relative rotate-90">
            <ScrollProgressBar targetRef={ContentRef} />
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div>Gallery</div>
            <div>Share</div>
          </div>
        </motion.div>

        <div className="z-40">
          <p className="text-4xl p-3 font-inter-light md:text-5xl">
            Similar News
          </p>
          <NewsGrid>
            <div className="p-4">
              <NewsGrid.Cards data={news} />
            </div>
            <NewsGrid.Controls data={news} />
          </NewsGrid>
        </div>`
      </div>
    </div>
  );
};

export default EachBlog;
